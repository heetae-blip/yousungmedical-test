import React, { useState } from 'react';
import { LayoutDashboard, FileText, Settings, Image as ImageIcon, Save, Plus, Trash2, Edit3, Globe, Search, Share2 } from 'lucide-react';
import { cn } from '../lib/utils';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('content');

  const tabs = [
    { id: 'dashboard', name: '대시보드', icon: LayoutDashboard },
    { id: 'content', name: '콘텐츠 관리', icon: FileText },
    { id: 'design', name: '디자인 설정', icon: ImageIcon },
    { id: 'seo', name: 'SEO 및 연동', icon: Globe },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
              <div className="mb-8 px-4 py-2">
                <h2 className="text-lg font-bold text-gray-900">관리자 센터</h2>
                <p className="text-xs text-gray-400">Admin Dashboard v1.0</p>
              </div>
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                      activeTab === tab.id 
                        ? "bg-brand-point text-white shadow-md shadow-brand-point/20" 
                        : "text-gray-500 hover:bg-gray-50 hover:text-brand-point"
                    )}
                  >
                    <tab.icon size={18} />
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm min-h-[600px]">
              {activeTab === 'content' && (
                <div className="space-y-10">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">콘텐츠 관리</h3>
                      <p className="text-gray-400 text-sm">웹사이트의 텍스트와 이미지를 실시간으로 수정합니다.</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-brand-point text-white font-bold rounded-xl hover:bg-brand-dark transition-all">
                      <Save size={18} />
                      전체 저장
                    </button>
                  </div>

                  {/* Section Editor */}
                  <div className="space-y-8">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                          <Edit3 size={18} className="text-brand-point" />
                          메인 히어로 섹션
                        </h4>
                        <button className="text-xs font-bold text-brand-point hover:underline">이미지 변경</button>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">메인 슬로건</label>
                          <input 
                            type="text" 
                            defaultValue="신뢰와 정직으로 동반 성장을 꿈꿉니다"
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-point/20 outline-none"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">서브 설명</label>
                          <textarea 
                            rows={3}
                            defaultValue="(주)유성메디칼은 의료기기 및 진단 시약 유통의 선두주자로서 최고의 제품과 서비스를 통해 의료 현장의 가치를 높입니다."
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-point/20 outline-none resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                          <FileText size={18} className="text-brand-point" />
                          공지사항 게시판
                        </h4>
                        <button className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 bg-white border border-gray-200 rounded-lg hover:border-brand-point transition-colors">
                          <Plus size={14} /> 새 글 작성
                        </button>
                      </div>
                      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                              <th className="px-4 py-3 font-bold">제목</th>
                              <th className="px-4 py-3 font-bold">작성일</th>
                              <th className="px-4 py-3 font-bold text-right">관리</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr>
                              <td className="px-4 py-3 font-medium">홈페이지 리뉴얼 안내</td>
                              <td className="px-4 py-3 text-gray-400">2026.04.06</td>
                              <td className="px-4 py-3 text-right">
                                <div className="flex justify-end gap-2">
                                  <button className="p-1.5 text-gray-400 hover:text-brand-point"><Edit3 size={14} /></button>
                                  <button className="p-1.5 text-gray-400 hover:text-red-500"><Trash2 size={14} /></button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'design' && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">디자인 설정</h3>
                    <p className="text-gray-400 text-sm">브랜드 아이덴티티에 맞춰 테마와 폰트를 변경합니다.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-sm font-bold text-gray-700">포인트 컬러</label>
                      <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full bg-[#1B7A8A] ring-4 ring-brand-point/20" />
                        <button className="w-10 h-10 rounded-full bg-[#3B82F6]" />
                        <button className="w-10 h-10 rounded-full bg-[#10B981]" />
                        <button className="w-10 h-10 rounded-full bg-[#F59E0B]" />
                        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"><Plus size={16} /></button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-sm font-bold text-gray-700">기본 폰트</label>
                      <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-point/20">
                        <option>Pretendard (권장)</option>
                        <option>Noto Sans KR</option>
                        <option>Spoqa Han Sans</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'seo' && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">SEO 및 연동</h3>
                    <p className="text-gray-400 text-sm">검색 엔진 최적화와 소셜 미디어 연동을 설정합니다.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                      <h4 className="font-bold flex items-center gap-2"><Search size={18} className="text-brand-point" /> 메타 데이터</h4>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400">사이트 제목</label>
                          <input type="text" defaultValue="(주)유성메디칼 - 의료기기 유통 전문" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400">사이트 설명 (Description)</label>
                          <textarea rows={2} defaultValue="신뢰와 정직을 바탕으로 최고의 의료기기를 공급하는 유성메디칼입니다." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none resize-none" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                      <h4 className="font-bold flex items-center gap-2"><Share2 size={18} className="text-brand-point" /> 소셜 미디어 연동</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Instagram URL" className="px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none" />
                        <input type="text" placeholder="Facebook URL" className="px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'dashboard' && (
                <div className="flex flex-center justify-center items-center h-full text-gray-400">
                  <div className="text-center">
                    <LayoutDashboard size={48} className="mx-auto mb-4 opacity-20" />
                    <p>통계 데이터 수집 중입니다.</p>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
