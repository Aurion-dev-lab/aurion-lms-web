import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full py-24 lg:py-32 bg-white text-slate-900 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Loved by Educators, <span className="text-orange-500">Trusted by Students</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Discover how universities, private academies, and course creators use Aurion LMS to scale online learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="flex flex-col justify-between p-8 bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-400/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-amber-400 text-sm">
                ★★★★★
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                "Aurion LMS completely revolutionized how we conduct our online lectures. PayHere integration was seamless, and student enrollments tripled within two months."
              </p>
            </div>
            
            <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-200">
              <div className="w-11 h-11 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-sm shadow-md flex-shrink-0">
                DS
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Dr. Sanjeewa Perera</h4>
                <p className="text-xs text-slate-500">Head of Academic Affairs, Colombo Tech</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-400/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-amber-400 text-sm">
                ★★★★★
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                "The mobile optimization is amazing. My students in rural areas have zero issues accessing video content and completing quizzes on their phones."
              </p>
            </div>

            <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-200">
              <div className="w-11 h-11 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-sm shadow-md flex-shrink-0">
                FK
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Fatima Khan</h4>
                <p className="text-xs text-slate-500">Lead Instructor, Apex Online Academy</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-400/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-amber-400 text-sm">
                ★★★★★
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                "Auto-generated PDF certificates with QR verification saved our admin team hundreds of hours. Highly recommended LMS platform!"
              </p>
            </div>

            <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-200">
              <div className="w-11 h-11 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-sm shadow-md flex-shrink-0">
                RN
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Ruwan Fernando</h4>
                <p className="text-xs text-slate-500">Director, National IT Institute</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
