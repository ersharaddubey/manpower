import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-500 py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-white text-3xl font-black tracking-tighter mb-6">
            sclerahunt<span className="text-orange-600">.</span>
          </h4>
          <p className="text-sm font-medium leading-relaxed opacity-70">
            Global manpower solutions for technical industries. Finding elite talent for high-stakes projects worldwide.
          </p>
        </div>
        
        {/* Navigation */}
        <div>
          <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-6">Quick Links</h4>
          <ul className="space-y-3 font-bold text-xs uppercase tracking-widest">
            <li className="hover:text-orange-500 transition-colors"><Link to="/">Home</Link></li>
            <li className="hover:text-orange-500 transition-colors"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Sectors */}
        <div>
          <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-6">Industries</h4>
          <ul className="space-y-3 font-bold text-xs uppercase tracking-widest">
            <li className="hover:text-orange-500 transition-colors"><Link to="/services">Services</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-6">Support</h4>
          <ul className="space-y-3 font-bold text-xs uppercase tracking-widest">
            <li className="hover:text-orange-500 transition-colors">
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li className="hover:text-orange-500 transition-colors">
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li className="hover:text-orange-500 transition-colors">
              <Link to="/help">Help Center</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">
          © 2026 sclerahunt Solutions. Engineered by Sharad Dubey.
        </p>
        <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest">
          {/* FIXED: Href value updated to avoid ESLint warning */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;