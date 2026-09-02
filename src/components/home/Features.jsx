import React from 'react';

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            All Your Education Tools<br />
            <span className="text-slate-400 font-normal italic">Made From One Platform.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto">
            Generate studio-quality courses, manage students, and grow your learning community in seconds, directly from your dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a href="#pricing" className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0 text-center">
              Get Started Free
            </a>
            <a href="#solutions" className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl border border-slate-200 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 text-center">
              Explore Solutions
            </a>
          </div>
        </div>

        {/* Perspective Curved Carousel Layout */}
        <div className="relative w-full overflow-visible pb-10">
          <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 perspective-[1000px]">
            
            {/* Card 1 (Far Left) */}
            <div className="hidden lg:block w-48 h-72 sm:w-64 sm:h-96 rounded-[2rem] overflow-hidden shadow-2xl transform-gpu -rotate-y-12 rotate-z-3 scale-90 translate-x-12 opacity-80 hover:opacity-100 hover:scale-95 transition-all duration-500 relative">
              <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover" alt="Analytics" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xl">Analytics</span>
              </div>
            </div>

            {/* Card 2 (Left) */}
            <div className="hidden md:block w-56 h-80 sm:w-72 sm:h-[26rem] rounded-[2rem] overflow-hidden shadow-2xl transform-gpu -rotate-y-6 rotate-z-1 scale-95 translate-x-6 opacity-90 hover:opacity-100 hover:scale-100 transition-all duration-500 relative">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover" alt="Live Classes" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xl">Live Classes</span>
              </div>
            </div>

            {/* Card 3 (Center - Active) */}
            <div className="z-20 w-64 h-96 sm:w-80 sm:h-[30rem] rounded-[2.5rem] overflow-hidden shadow-2xl transform-gpu scale-105 hover:scale-110 transition-all duration-500 border-4 border-white relative">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover" alt="Course Builder" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <span className="bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">Popular</span>
                  <h3 className="text-white font-bold text-2xl">Course Builder</h3>
                </div>
              </div>
            </div>

            {/* Card 4 (Right) */}
            <div className="hidden md:block w-56 h-80 sm:w-72 sm:h-[26rem] rounded-[2rem] overflow-hidden shadow-2xl transform-gpu rotate-y-6 -rotate-z-1 scale-95 -translate-x-6 opacity-90 hover:opacity-100 hover:scale-100 transition-all duration-500 relative">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover" alt="Assignments" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xl">Assignments</span>
              </div>
            </div>

            {/* Card 5 (Far Right) */}
            <div className="hidden lg:block w-48 h-72 sm:w-64 sm:h-96 rounded-[2rem] overflow-hidden shadow-2xl transform-gpu rotate-y-12 -rotate-z-3 scale-90 -translate-x-12 opacity-80 hover:opacity-100 hover:scale-95 transition-all duration-500 relative">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover" alt="Certificates" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xl">Certificates</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
