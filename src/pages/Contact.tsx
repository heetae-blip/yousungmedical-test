import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">문의하기</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            제품 상담 및 파트너십 문의는 언제든 환영합니다. 전문가가 신속하게 답변해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-brand-point/10 rounded-2xl flex items-center justify-center text-brand-point shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">본사 위치</h4>
                <p className="text-gray-500 leading-relaxed">
                  부산광역시 남구 황령대로319번가길 158-4, 1층 101호 (대연동,LS빌딩)<br />
                  Yousung Medical HQ, Busan, Korea
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-brand-point/10 rounded-2xl flex items-center justify-center text-brand-point shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">전화 번호</h4>
                <p className="text-gray-500 leading-relaxed">T. 051-715-3387<br />F. 051-715-3387</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-brand-point/10 rounded-2xl flex items-center justify-center text-brand-point shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">이메일</h4>
                <p className="text-gray-500 leading-relaxed">yousungmedical@naver.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50"
          >
            <h3 className="text-2xl font-bold mb-8">문의 양식</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('문의가 접수되었습니다.'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="성함 / 담당자"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-point/20 focus:border-brand-point outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="기관명"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-point/20 focus:border-brand-point outline-none transition-all"
                />
              </div>
              <input
                type="tel"
                placeholder="연락처"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-point/20 focus:border-brand-point outline-none transition-all"
              />
              <input
                type="email"
                placeholder="이메일"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-point/20 focus:border-brand-point outline-none transition-all"
              />
              <textarea
                rows={5}
                placeholder="문의하실 내용을 입력해주세요."
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-point/20 focus:border-brand-point outline-none transition-all resize-none"
              />
              <button className="w-full py-5 bg-brand-point text-white font-bold rounded-2xl hover:bg-brand-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-point/20">
                문의 보내기 <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
