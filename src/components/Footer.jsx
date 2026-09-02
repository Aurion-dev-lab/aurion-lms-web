import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/20">
                <div className="absolute w-5 h-5 border-2 border-white rounded-md rotate-12"></div>
                <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">Aurion LMS</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The modern, multi-tenant learning management system built for universities, coaching academies, and growing online businesses.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-slate-400">System Status: <strong className="text-white font-medium">99.99% Cloud SLA</strong></span>
            </div>
          </div>

          {/* Product Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/features" className="hover:text-orange-400 transition">Core Features</Link></li>
              <li><Link to="/pricing" className="hover:text-orange-400 transition">Pricing Plans</Link></li>
              <li><Link to="/features" className="hover:text-orange-400 transition">Customer Reviews</Link></li>
              <li><Link to="/faq" className="hover:text-orange-400 transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Solutions & Roles */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/instructors" className="hover:text-orange-400 transition">For Instructors</Link></li>
              <li><Link to="/students" className="hover:text-orange-400 transition">For Students</Link></li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">Subscribe for product updates and LMS best practices.</p>
            {subscribed ? (
              <div className="p-3 bg-emerald-500/20 text-emerald-300 text-xs rounded-xl border border-emerald-500/30">
                ✓ Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input 
                  type="email" 
                  placeholder="work@organization.com" 
                  required 
                  className="w-full px-3.5 py-2 text-xs text-white bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:border-orange-500 transition placeholder:text-slate-500"
                />
                <button type="submit" className="w-full py-2 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-xl transition shadow-md shadow-orange-500/20">
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-800/80 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aurion LMS Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/features" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <Link to="/features" className="hover:text-slate-300 transition">Terms of Service</Link>
            <Link to="/contact" className="hover:text-slate-300 transition">Security & Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
