import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 my-12 sm:my-16 max-w-3xl mx-auto w-full relative group px-4">
      {/* Background elements */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[1.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 text-white p-6 sm:p-10 rounded-[1.5rem] shadow-xl space-y-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="text-center max-w-2xl mx-auto space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-semibold uppercase tracking-widest backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            Ready to transform your academy?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300 pb-1">
            Start delivering world-class learning today.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg mx-auto">
            Book a personalized walkthrough or start your 14-day free trial. No credit card required.
          </p>
        </div>

        {/* Lead Form or Success Message */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1">
                <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider ml-1">Your Full Name</label>
                <div className="relative group/input">
                  <div className="absolute inset-0 bg-indigo-500/20 rounded-lg blur opacity-0 group-focus-within/input:opacity-100 transition duration-300"></div>
                  <input 
                    type="text" 
                    required 
                    placeholder="Alex Rivera" 
                    className="relative w-full px-3 py-2.5 text-xs bg-slate-800/50 border border-slate-700/50 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-slate-800 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider ml-1">Work / Academic Email</label>
                <div className="relative group/input">
                  <div className="absolute inset-0 bg-indigo-500/20 rounded-lg blur opacity-0 group-focus-within/input:opacity-100 transition duration-300"></div>
                  <input 
                    type="email" 
                    required 
                    placeholder="alex@academy.edu" 
                    className="relative w-full px-3 py-2.5 text-xs bg-slate-800/50 border border-slate-700/50 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-slate-800 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1">
                <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider ml-1">Organization Name</label>
                <div className="relative group/input">
                  <div className="absolute inset-0 bg-indigo-500/20 rounded-lg blur opacity-0 group-focus-within/input:opacity-100 transition duration-300"></div>
                  <input 
                    type="text" 
                    required 
                    placeholder="Pacific State Academy" 
                    className="relative w-full px-3 py-2.5 text-xs bg-slate-800/50 border border-slate-700/50 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-slate-800 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider ml-1">Estimated Student Count</label>
                <div className="relative group/input">
                  <div className="absolute inset-0 bg-indigo-500/20 rounded-lg blur opacity-0 group-focus-within/input:opacity-100 transition duration-300"></div>
                  <select className="relative w-full px-3 py-2.5 text-xs bg-slate-800/50 border border-slate-700/50 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-slate-800 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none cursor-pointer">
                    <option className="bg-slate-900 text-white">100 - 500 Students</option>
                    <option className="bg-slate-900 text-white">500 - 2,000 Students</option>
                    <option className="bg-slate-900 text-white">2,000 - 10,000 Students</option>
                    <option className="bg-slate-900 text-white">10,000+ Students</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-400">
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="group relative w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-lg text-xs sm:text-sm transition-all shadow-[0_0_15px_rgba(99,102,241,0.25)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 duration-300 overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Request Walkthrough & Free Sandbox
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              </button>
            </div>

            <p className="text-[10px] text-center text-slate-500 font-medium">Our LMS specialists reply in under 2 hours during business days.</p>
          </form>
        ) : (
          <div className="relative z-10 max-w-sm mx-auto text-center p-6 bg-indigo-500/10 backdrop-blur-md rounded-xl border border-indigo-500/20 shadow-inner space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20 text-3xl mb-1">🎉</div>
            <h4 className="text-lg font-bold text-white">Request Received!</h4>
            <p className="text-xs text-indigo-200 leading-relaxed">A demonstration sandbox token and calendar invite have been sent to your email.</p>
          </div>
        )}
      </div>
    </section>
  );
}
