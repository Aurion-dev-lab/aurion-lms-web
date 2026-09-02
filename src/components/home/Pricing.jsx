import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="pricing" className="relative py-20 lg:py-24 bg-[#242d42] border-t border-white/10 overflow-hidden">
      {/* Orange Glow Decor */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Simple, Transparent <span className="text-orange-400">Pricing</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Flexible plans tailored for individual instructors, growing academies, and large enterprise institutions in Sri Lanka.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>Monthly Billing</span>
          <button 
            onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
            className="relative w-14 h-8 bg-slate-800 border border-white/10 rounded-full p-1 transition-colors duration-300 focus:outline-none cursor-pointer"
          >
            <div 
              className={`w-6 h-6 bg-orange-500 rounded-full shadow-md transition-transform duration-300 ${
                billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></div>
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>Annual Billing</span>
            <span className="px-2.5 py-0.5 text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-400/20">Save 20%</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* 1. Starter Plan */}
          <div className="flex flex-col justify-between p-8 bg-white/5 border border-white/10 backdrop-blur-sm transition duration-300 hover:border-white/20">
            <div className="space-y-6">
              <div>
                <h3 class="text-xl font-bold text-white mb-1">Starter</h3>
                <p className="text-xs text-slate-400">Ideal for individual course creators & tutors.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">LKR</span>
                <span className="text-4xl sm:text-5xl font-extrabold text-white">
                  {billingCycle === 'monthly' ? '4,900' : '3,900'}
                </span>
                <span className="text-sm text-slate-400 font-medium">/ month</span>
              </div>

              <ul className="space-y-3.5 text-slate-300 text-sm border-t border-white/10 pt-6">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>Up to <strong>3 Active Courses</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>Up to <strong>250 Students</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>Local Payment Gateway Integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>Basic Quiz & Assignment Engine</span>
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <X className="w-5 h-5 text-slate-600 flex-shrink-0" />
                  <span className="line-through">Custom Domain Branding</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a 
                href="#contact" 
                className="block w-full text-center px-6 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* 2. Pro Plan (Highlighted) */}
          <div className="relative flex flex-col justify-between p-8 bg-white/10 border-2 border-orange-500 backdrop-blur-sm shadow-xl shadow-orange-500/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white bg-orange-500">
              Most Popular
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Pro Academy</h3>
                <p className="text-xs text-slate-300">Perfect for private institutes & fast-growing academies.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">LKR</span>
                <span className="text-4xl sm:text-5xl font-extrabold text-white">
                  {billingCycle === 'monthly' ? '14,900' : '11,900'}
                </span>
                <span className="text-sm text-slate-300 font-medium">/ month</span>
              </div>

              <ul className="space-y-3.5 text-slate-200 text-sm border-t border-white/10 pt-6">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span><strong>Unlimited Active Courses</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>Up to <strong>2,500 Students</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>Live Zoom & Teams Integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>Automated QR Verified Certificates</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>Custom Domain Branding</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a 
                href="#contact" 
                className="block w-full text-center px-6 py-3.5 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 transition shadow-lg shadow-orange-500/25"
              >
                Start 14-Day Free Trial
              </a>
            </div>
          </div>

          {/* 3. Enterprise Plan */}
          <div className="flex flex-col justify-between p-8 bg-white/5 border border-white/10 backdrop-blur-sm transition duration-300 hover:border-white/20">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Enterprise</h3>
                <p className="text-xs text-slate-400">Tailored for universities and large educational networks.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">Custom</span>
              </div>

              <ul className="space-y-3.5 text-slate-300 text-sm border-t border-white/10 pt-6">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span><strong>Unlimited Students & Faculties</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>Multi-Branch & Admin Roles</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>Dedicated On-Premise / Cloud Server</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>Custom Payment Gateway Integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span>24/7 Dedicated Support & SLA</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a 
                href="#contact" 
                className="block w-full text-center px-6 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
              >
                Contact Sales
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
