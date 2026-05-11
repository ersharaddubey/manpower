import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-500 py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Support Section */}
        <div className="mb-12">
          <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-6">Support</h4>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-bold text-xs uppercase tracking-widest">
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

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/5">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">
            © 2026 workfource Solutions. Engineered by Sharad Dubey.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
