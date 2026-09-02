import React from 'react';

export default function Metrics() {
  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center space-y-1">
            <span className="block text-3xl font-black text-orange-600">14,820</span>
            <span className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Active Students</span>
            <span className="block text-[11px] text-orange-600 font-semibold">+18% this month</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center space-y-1">
            <span className="block text-3xl font-black text-slate-900">89.4%</span>
            <span className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Completion Rate</span>
            <span className="block text-[11px] text-slate-500">Industry avg: 72%</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center space-y-1">
            <span className="block text-3xl font-black text-slate-900">$189,450</span>
            <span className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Annualized Revenue</span>
            <span className="block text-[11px] text-slate-500">Instructor earnings</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center space-y-1">
            <span className="block text-3xl font-black text-orange-600">99.99%</span>
            <span className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Cloud SLA Uptime</span>
            <span className="block text-[11px] text-orange-600 font-semibold">ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
