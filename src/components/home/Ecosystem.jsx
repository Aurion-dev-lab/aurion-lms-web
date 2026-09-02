import React from 'react';

export default function Ecosystem() {
  return (
    <section className="relative py-20 lg:py-32 bg-white text-slate-900 overflow-hidden border-t border-slate-100">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-bold text-xs tracking-wide">
            <span>+</span> Aurion LMS Ecosystem
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Build a learning <br className="hidden sm:inline" />
            community <span className="text-slate-400 font-normal italic">you own.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Host courses, create challenges or just email your students because you can. All your tools in one place.
          </p>

          {/* Visual Floating Circles & Collaboration Card */}
          <div className="relative mt-12 pt-6 pb-2 max-w-5xl mx-auto min-h-[360px] sm:min-h-[440px] flex justify-center items-center">
            
            {/* Top Left Floating Circle Photo */}
            <div className="absolute top-0 left-2 sm:left-12 w-24 h-24 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl transform -rotate-3 hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                alt="Instructor"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right Floating Circle Photo (Larger) */}
            <div className="absolute top-2 right-2 sm:right-12 w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl transform rotate-3 hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
                alt="Academy Director"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Lower Right Floating Circle Photo */}
            <div className="absolute bottom-8 right-0 sm:right-16 w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg transform -rotate-6 hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Center Large Curved Photo */}
            <div className="z-10 w-72 sm:w-[420px] h-48 sm:h-64 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                alt="Students Collaborating"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
