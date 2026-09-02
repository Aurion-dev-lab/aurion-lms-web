import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden scroll-mt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.jpeg`}
          alt="Sri Lanka Education"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl space-y-6">

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Transform Education
            <span className="block text-orange-400">Across Sri Lanka</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
            The all-in-one cloud platform for universities, training centres, and course creators. Create, manage, and sell courses with ease.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link 
              to="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 transition shadow-lg shadow-orange-500/25"
            >
              <ArrowRight className="w-4 h-4" />
              Get Started Free
            </Link>
            <Link 
              to="/features"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust Stats */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
            <div className="text-center">
              <span className="block text-2xl font-extrabold text-white">500+</span>
              <span className="block text-xs text-slate-400 font-medium">Institutions</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="text-center">
              <span className="block text-2xl font-extrabold text-white">50K+</span>
              <span className="block text-xs text-slate-400 font-medium">Active Learners</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="text-center">
              <span className="block text-2xl font-extrabold text-white">4.9</span>
              <span className="block text-xs text-slate-400 font-medium flex items-center gap-1">
                <span className="text-amber-400">★★★★★</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
