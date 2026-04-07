import React from 'react';
import { Settings, ShieldAlert } from 'lucide-react';

const Admin = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-400">
            <ShieldAlert size={40} />
          </div>
          <h1 className="text-3xl font-bold mb-4">관리자 페이지</h1>
          <p className="text-gray-500 mb-8">이 페이지는 관리자 전용 구역입니다. 접근 권한이 필요합니다.</p>
          <div className="p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <p className="text-sm text-gray-400 font-mono">Authentication required to access dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
