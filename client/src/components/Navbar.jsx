import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Added 'Contact' to the main navigation array
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Electronics', path: '/electronics' },
    { name: 'Electrical', path: '/electrical' },
    { name: 'Chemical', path: '/chemical' },
    { name: 'Industries', path: '/industries' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }, // New Link Added
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] top-0 left-0 transition-all duration-500 ${
        scrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] py-4' 
        : 'bg-white py-6'
      }`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
            <span className="text-3xl font-black tracking-tighter text-gray-950 group-hover:text-orange-600 transition-colors">sclerahunt</span>
            <span className="h-2 w-2 rounded-full bg-orange-600 mt-2 animate-pulse"></span>
          </Link>

          {/* 1. Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group ${
                  location.pathname === link.path ? 'text-orange-600' : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* 2. Desktop CTA - Linked to Contact */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <button className="bg-gray-950 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl active:scale-95">
                Hire Talent
              </button>
            </Link>
          </div>

          {/* 3. Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-gray-900 group"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-gray-950 group-hover:bg-orange-600 transition-colors"></span>
              <span className="block w-6 h-0.5 bg-gray-950 group-hover:bg-orange-600 transition-colors"></span>
              <span className="block w-4 h-0.5 bg-orange-600"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* 4. Mobile Side Drawer */}
      <div className={`fixed inset-0 z-[200] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-gray-950/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Side Panel */}
        <div className={`absolute right-0 top-0 h-full w-full max-w-[400px] bg-white shadow-2xl transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-10 flex flex-col h-full">
            <div className="flex justify-between items-center mb-20">
              <span className="font-black text-xs tracking-[0.3em] text-gray-400">NAVIGATION</span>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 text-2xl hover:bg-orange-50 hover:text-orange-600 transition-all"
              >
                &times;
              </button>
            </div>

            <div className="space-y-8">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-5xl font-black tracking-tighter transition-all duration-300 ${
                    location.pathname === link.path ? 'text-orange-600' : 'text-gray-900 hover:text-orange-600 translate-x-0 hover:translate-x-4'
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-gray-100">
              <p className="text-gray-400 text-sm font-medium mb-6">Ready to source global talent for your next project?</p>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-orange-600 text-white py-6 rounded-[2rem] font-black text-lg shadow-2xl shadow-orange-200">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;