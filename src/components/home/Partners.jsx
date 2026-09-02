import React from 'react';

export default function Partners() {
  return (
    <section className="py-6 border-y border-white/10 bg-slate-900/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Powering Education at Leading Universities & Fast-Growing Academies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-75">
          <span className="font-extrabold text-sm text-slate-300 tracking-tight flex items-center gap-1.5 hover:text-orange-400 transition">
            🏫 Pacific State Univ
          </span>
          <span className="font-extrabold text-sm text-slate-300 tracking-tight flex items-center gap-1.5 hover:text-orange-400 transition">
            🎓 Oxford Online Academy
          </span>
          <span className="font-bold text-sm text-slate-300 tracking-tight flex items-center gap-1.5 hover:text-orange-400 transition">
            🏢 Nexis Corp Learning
          </span>
          <span className="font-extrabold text-sm text-slate-300 tracking-tight flex items-center gap-1.5 hover:text-orange-400 transition">
            🧪 Heritage Tech Institute
          </span>
        </div>
      </div>
    </section>
  );
}
