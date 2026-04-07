import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, BarChart3, Building2, Briefcase, Home as HomeIcon, Settings, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

const Logo = ({ className = "h-10" }: { className?: string }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={cn(className, "flex items-center justify-center shrink-0")}>
      {!imageError ? (
        <img
          src="/logo.png"
          alt="YS Logo"
          className="h-full w-auto object-contain"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="h-full aspect-square bg-brand-point rounded-lg flex items-center justify-center text-white font-bold text-xs">
          YS
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '홈', path: '/', icon: HomeIcon },
    { name: '회사소개', path: '/about', icon: Building2 },
    { name: '사업내용', path: '/business', icon: Briefcase },
    { name: '문의하기', path: '/contact', icon: Mail },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="group-hover:scale-110 transition-transform flex items-center">
            <Logo className="h-12" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 tracking-tight">(주)유성메디칼</span>
            <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">Yousung Medical</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-brand-dark",
                location.pathname === item.path ? "text-brand-point" : "text-gray-600"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/admin" className="p-2 text-gray-400 hover:text-brand-point transition-colors">
            <Settings size={18} />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-bold flex items-center gap-4",
                    location.pathname === item.path ? "text-brand-point" : "text-gray-900"
                  )}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              ))}
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold flex items-center gap-4 text-gray-400"
              >
                <Settings size={20} />
                관리자
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="h-10" />
              <span className="text-xl font-bold text-gray-900 tracking-tight">(주)유성메디칼</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
              의료 현장의 가치를 높이는 혁신적인 진단 솔루션 파트너. 
              신뢰와 정직을 바탕으로 최상의 서비스를 제공합니다.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-500 hover:text-brand-point text-sm transition-colors">회사소개</Link></li>
              <li><Link to="/business" className="text-gray-500 hover:text-brand-point text-sm transition-colors">사업내용</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-brand-point text-sm transition-colors">문의하기</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin size={18} className="text-brand-point shrink-0" />
                <span>부산광역시 남구 황령대로319번가길 158-4, 1층 101호 (대연동,LS빌딩)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone size={18} className="text-brand-point shrink-0" />
                <span>051-715-3387</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail size={18} className="text-brand-point shrink-0" />
                <span>yousungmedical@naver.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">© 2026 (주)유성메디칼. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
