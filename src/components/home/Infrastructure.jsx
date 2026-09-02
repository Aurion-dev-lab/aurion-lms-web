import React, { useState } from 'react';
import { Cloud, Lock, Zap } from 'lucide-react';

export default function Infrastructure() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      icon: Cloud,
      title: "High-Performance Cloud",
      desc: "Experience lightning-fast load times with our distributed cloud architecture. We guarantee 99.9% uptime, ensuring your students can access learning materials anytime, anywhere without interruption.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      icon: Lock,
      title: "Ultimate Security",
      desc: "Protect your valuable educational assets with enterprise-grade security. Our servers feature advanced DDoS protection, end-to-end encryption, and daily automated backups to keep your data safe.",
      img: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      icon: Zap,
      title: "Effortless Scaling",
      desc: "Whether you have 50 or 50,000 students, our infrastructure scales dynamically to meet your demands. Never worry about traffic spikes during exam seasons again.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section id="servers" className="relative py-20 lg:py-32 bg-slate-900 border-t border-slate-800 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Next-Generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Infrastructure</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            Built on enterprise-grade architecture, our platform ensures your courses are delivered securely, reliably, and blazingly fast—no matter your scale.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Accordion Menu */}
          <div className="w-full lg:w-5/12 space-y-4">
            {steps.map(step => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              return (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-500 relative ${
                    isActive ? 'bg-white/5 shadow-2xl ring-1 ring-white/20' : 'hover:bg-white/[0.02] ring-1 ring-transparent hover:ring-white/5'
                  }`}
                >
                  <div 
                    className={`absolute left-0 top-6 bottom-6 w-1 bg-orange-500 rounded-r-full transition-transform duration-500 ${
                      isActive ? 'scale-y-100' : 'scale-y-0'
                    }`}
                  ></div>

                  <div className="flex items-center gap-4">
                    <div 
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${
                        isActive ? 'bg-orange-500/20 text-orange-400' : 'bg-white/5 text-slate-500'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-slate-500'
                    }`}>
                      {step.title}
                    </h3>
                  </div>

                  {isActive && (
                    <div className="mt-4 pl-14 transition-all duration-500">
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Video / Image Showcase */}
          <div className="w-full lg:w-7/12 relative">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 ring-1 ring-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              {/* Mac Glass Bar */}
              <div className="absolute top-0 inset-x-0 h-8 bg-white/5 backdrop-blur-md border-b border-white/10 z-20 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>

              {steps.map(step => (
                <div 
                  key={step.id}
                  className={`absolute inset-0 w-full h-full z-10 pt-8 transition-opacity duration-700 ${
                    activeStep === step.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover opacity-80 mix-blend-screen" />
                </div>
              ))}
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-[40px] pointer-events-none"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500/20 rounded-full blur-[40px] pointer-events-none"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
