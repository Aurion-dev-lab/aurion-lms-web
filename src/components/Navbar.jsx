import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, BookOpen, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (mobileMenuOpen) return;
      if (Math.abs(lastScrollTop - currentScroll) <= 10) return;
      
      if (currentScroll > lastScrollTop && currentScroll > 90) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  return (
    <header 
      id="site-header" 
      className={`sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* 1. Top Contact & Hotline Header Bar */}
      <div className="w-full bg-slate-950/90 text-slate-300 border-b border-white/5 text-xs backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-1.5 sm:py-0 sm:h-9 gap-1 sm:gap-0">
            <div className="flex items-center gap-3 sm:gap-6 text-[11px] font-medium">
              <a href="tel:+15550192834" className="flex items-center gap-1.5 text-slate-300 hover:text-orange-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span className="hidden md:inline text-slate-400">Hotline:</span>
                <span className="font-bold text-white hover:text-orange-400 tracking-tight sm:tracking-wide transition-colors">+1 (555) 019-2834</span>
              </a>

              <span className="h-3 w-px bg-slate-800"></span>

              <a href="mailto:support@aurionlms.com" className="flex items-center gap-1.5 text-slate-300 hover:text-orange-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span className="hidden md:inline text-slate-400">Email:</span>
                <span className="font-semibold text-white hover:text-orange-400 transition-colors truncate max-w-[140px] sm:max-w-none">support@aurionlms.com</span>
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-400 font-medium">
              <Link to="/instructors" className="hover:text-orange-400 transition-colors">Instructors</Link>
              <span className="h-3 w-px bg-slate-800"></span>
              <Link to="/students" className="hover:text-orange-400 transition-colors">Students</Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main White Liquid Glass Navigation Header */}
      <div className="w-full bg-white/70 backdrop-blur-2xl backdrop-saturate-200 border-b border-slate-900/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-orange-500 text-white shadow-md shadow-orange-500/20 group-hover:bg-orange-600 transition-all duration-300 shrink-0">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-tight">Aurion</span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-orange-600 uppercase -mt-0.5">LMS Platform</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 sm:gap-1.5">
              <Link to="/" className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-slate-900/5 transition-all duration-200">Home</Link>
              <a href="#features" className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-slate-900/5 transition-all duration-200">Features</a>
              <a href="#pricing" className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-slate-900/5 transition-all duration-200">Pricing</a>
              <Link to="/instructors" className={`px-3.5 py-2 text-sm font-semibold transition-all duration-200 ${location.pathname === '/instructors' ? 'text-orange-600 bg-orange-500/10' : 'text-slate-700 hover:text-orange-600 hover:bg-slate-900/5'}`}>For Instructors</Link>
              <Link to="/students" className={`px-3.5 py-2 text-sm font-semibold transition-all duration-200 ${location.pathname === '/students' ? 'text-orange-600 bg-orange-500/10' : 'text-slate-700 hover:text-orange-600 hover:bg-slate-900/5'}`}>For Students</Link>
              <a href="#faq" className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-slate-900/5 transition-all duration-200">FAQ</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="px-5 py-2.5 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-500/20 transition-all duration-200 active:scale-95">
                Get Started Free
              </a>
            </div>

            {/* Mobile Header Actions */}
            <div className="md:hidden flex items-center gap-2">
              <a href="#contact" className="px-3.5 py-2 text-xs font-bold text-white bg-orange-500 active:scale-95 transition-transform">
                Get Started
              </a>
              <button 
                onClick={toggleMobileMenu} 
                className="p-2 text-slate-800 bg-slate-900/5 hover:bg-slate-900/10 active:bg-orange-500/10 transition focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-900/5 bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-1.5 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-800 hover:text-orange-600 hover:bg-slate-900/5 transition">Home</Link>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-800 hover:text-orange-600 hover:bg-slate-900/5 transition">Features</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-800 hover:text-orange-600 hover:bg-slate-900/5 transition">Pricing</a>
            <Link to="/instructors" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-800 hover:text-orange-600 hover:bg-slate-900/5 transition">For Instructors</Link>
            <Link to="/students" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-800 hover:text-orange-600 hover:bg-slate-900/5 transition">For Students</Link>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-slate-800 hover:text-orange-600 hover:bg-slate-900/5 transition">FAQ</a>
            
            <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-900/5">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-3 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 transition shadow-sm active:scale-[0.99]">
                Get Started Free
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
