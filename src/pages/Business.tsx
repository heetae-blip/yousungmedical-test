import React from 'react';
import { BUSINESS_ITEMS, PARTNERS, CORE_BUSINESS } from '../constants';
import { CheckCircle2, TrendingUp, Zap, Briefcase, Activity, Package, BookOpen, Settings, Truck, ClipboardList } from 'lucide-react';

const IconMap: Record<string, any> = {
  Activity,
  Package,
  BookOpen,
  Settings,
  Truck,
  ClipboardList,
  Briefcase
};

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

        {/* Core Business Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_BUSINESS.map((item, idx) => (
              <div key={idx} className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-brand-point/30 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-brand-point/10 rounded-xl flex items-center justify-center text-brand-point mb-6 group-hover:scale-110 transition-transform">
                  {React.createElement(IconMap[item.icon] || Briefcase, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Items Grid */}
        <section className="mb-32">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <Zap className="text-brand-point" />
            주요 취급 브랜드 및 품목
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                {/* Image Area */}
                <div className="aspect-[4/3] bg-gray-50 relative overflow-hidden border-b border-gray-50">
                  <img 
                    src={item.image} 
                    alt={item.brand} 
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback image if the specific brand image is not found
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1583912267550-d44d7a125e7e?auto=format&fit=crop&q=80&w=500';
                      (e.target as HTMLImageElement).className = "w-full h-full object-cover opacity-20 grayscale";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-point text-[10px] font-bold rounded-full shadow-sm">
                      {item.brand}
                    </span>
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-8 flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">{item.brand}</h3>
                    <span className="text-xs text-gray-400 font-medium">
                      {item.items.length} Items
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {item.items.slice(0, 6).map((sub, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                        <CheckCircle2 size={16} className="text-brand-point/40" />
                        {sub}
                      </li>
                    ))}
                    {item.items.length > 6 && (
                      <li className="text-xs text-gray-300 pl-6">외 {item.items.length - 6}개 품목 더보기...</li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Table */}
        <section className="mb-32">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <TrendingUp className="text-brand-point" />
            주요 거래처 현황
          </h2>
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-8 py-5 text-sm font-bold text-gray-900">거래처 목록</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {PARTNERS.map((partner, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-5 font-bold text-gray-900">{partner.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Business;
