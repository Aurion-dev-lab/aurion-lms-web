import React, { useState, useEffect, useRef } from 'react';

export default function Features() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scrub progress: 0 when top of section enters viewport bottom, 1 when bottom leaves viewport top
      const totalDistance = windowHeight + rect.height;
      const currentDistance = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentDistance / totalDistance, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 6 Columns configuration matching FishiFox masonry animation with LMS Education photos
  const columns = [
    {
      id: 0,
      marginTop: false,
      startX: 140,
      endX: -140,
      items: [
        {
          id: '1a',
          height: 'h-44 sm:h-56 lg:h-64',
          title: 'AI Study Assistant',
          img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
        },
        {
          id: '1b',
          height: 'h-28 sm:h-36 lg:h-40',
          title: 'Learning Analytics',
          img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop',
        },
      ],
    },
    {
      id: 1,
      marginTop: true, // margin-top: 24px
      startX: 80,
      endX: -80,
      items: [
        {
          id: '2a',
          height: 'h-36 sm:h-44 lg:h-52',
          title: 'Interactive Lecturing',
          img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop',
        },
        {
          id: '2b',
          height: 'h-44 sm:h-56 lg:h-64',
          title: 'Peer Growth Hub',
          img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop',
        },
      ],
    },
    {
      id: 2,
      marginTop: false,
      startX: 25,
      endX: -25,
      items: [
        {
          id: '3a',
          height: 'h-28 sm:h-36 lg:h-40',
          title: 'Online Study Desk',
          img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
        },
        {
          id: '3b',
          height: 'h-36 sm:h-44 lg:h-52',
          title: 'Virtual Classrooms',
          img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
        },
      ],
    },
    {
      id: 3,
      marginTop: true, // margin-top: 24px
      startX: -25,
      endX: 25,
      items: [
        {
          id: '4a',
          height: 'h-44 sm:h-56 lg:h-64',
          title: 'Online Exam Proctoring',
          img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=600&auto=format&fit=crop',
        },
        {
          id: '4b',
          height: 'h-28 sm:h-36 lg:h-40',
          title: 'Interactive Notes',
          img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop',
        },
      ],
    },
    {
      id: 4,
      marginTop: false,
      startX: -80,
      endX: 80,
      items: [
        {
          id: '5a',
          height: 'h-36 sm:h-44 lg:h-52',
          title: 'Verified Graduation',
          img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop',
        },
        {
          id: '5b',
          height: 'h-44 sm:h-56 lg:h-64',
          title: '1-on-1 Mentorship',
          img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
        },
      ],
    },
    {
      id: 5,
      marginTop: true, // margin-top: 24px
      startX: -140,
      endX: 140,
      items: [
        {
          id: '6a',
          height: 'h-28 sm:h-36 lg:h-40',
          title: 'Mobile LMS App',
          img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop',
        },
        {
          id: '6b',
          height: 'h-36 sm:h-44 lg:h-52',
          title: 'Smart Certificates',
          img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop',
        },
      ],
    },
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="relative py-16 lg:py-24 bg-white text-slate-900 overflow-hidden border-t border-slate-100 scroll-mt-28"
    >
      {/* Background Subtle Radial Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            All Your Education Tools<br />
            <span className="text-slate-400 font-normal italic">Made From One Platform.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Generate studio-quality courses, manage students, and grow your learning community in seconds, directly from your dashboard.
          </p>
        </div>

        {/* Light Masonry Track with Compact Sizing & Parallax Animation */}
        <div className="relative w-full overflow-hidden pb-8">
          <div className="flex flex-nowrap justify-center gap-3 sm:gap-4 min-w-[700px] sm:min-w-none">
            {columns.map((col) => {
              // Calculate horizontal displacement matching GSAP timeline scrub logic
              const currentX = col.startX + (col.endX - col.startX) * scrollProgress;

              return (
                <div
                  key={col.id}
                  style={{
                    transform: `translate3d(${currentX}px, 0, 0)`,
                    marginTop: col.marginTop ? '24px' : '0px',
                    transition: 'transform 0.05s linear',
                  }}
                  className="flex-1 space-y-3 sm:space-y-4 min-w-[110px] sm:min-w-[140px]"
                >
                  {col.items.map((item) => (
                    <div
                      key={item.id}
                      className={`group relative rounded-2xl overflow-hidden bg-slate-100/60 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-orange-500/40 transition-all duration-300 cursor-pointer ${item.height}`}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <span className="text-slate-900 font-extrabold text-xs leading-tight">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Light Fade Overlay */}
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10"></div>
        </div>

      </div>
    </section>
  );
}
