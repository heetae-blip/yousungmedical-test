import React from 'react';
import { motion } from 'motion/react';
import { Zap, CheckCircle2 } from 'lucide-react';
import { CORE_BUSINESS, BUSINESS_ITEMS } from '../constants';

const Business = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Core Business Solutions</h1>
          <h2 className="text-2xl font-bold text-brand-point mb-4">핵심 비즈니스 솔루션</h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            진단 장비의 도입부터 사후 관리까지, 의료 현장의 효율성을 극대화하는 통합 서비스를 제공합니다.
          </p>
        </div>

        {/* Core Business Grid */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_BUSINESS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-brand-point/30 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </section>

        {/* Brands Section */}
        <section className="mb-32">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <Zap className="text-brand-point" />
            주요 취급 브랜드 및 품목
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="aspect-[4/3] bg-gray-50 relative overflow-hidden border-b border-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.brand} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-point text-[10px] font-bold rounded-full shadow-sm">
                      {item.brand}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{item.brand}</h3>
                  <ul className="space-y-3">
                    {item.items.map((sub, sIdx) => (
                      <li 
                        key={sIdx} 
                        className="flex items-center gap-2 text-gray-500 text-sm cursor-pointer hover:text-brand-point transition-colors group/item"
                        onClick={() => window.open(sub.link, '_blank')}
                      >
                        <CheckCircle2 size={16} className="text-brand-point/40 group-hover/item:text-brand-point transition-colors" />
                        {sub.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Business;
