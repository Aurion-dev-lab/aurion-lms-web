import React from 'react';
import { LayoutGrid, Clock, Video, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export default function InstructorsPage() {
  return (
    <div className="space-y-0">
      {/* Hero / Header */}
      <div className="pt-32 pb-16 bg-white overflow-hidden relative">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200/60 text-slate-800 text-sm font-bold mb-8 shadow-xs">
              <span className="text-orange-600">✦</span> For Instructors
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Empower Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Teaching Experience.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Create engaging courses, track student progress, and deliver a world-class learning experience with our intuitive, powerful instructor tools.
            </p>
          </div>
        </div>
      </div>

      {/* Storefront / Automated Builder Collage Section (Matching nas.com storefront style) */}
      <div className="py-20 bg-slate-50 border-t border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Headline matching requested style */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 max-w-4xl mx-auto">
            Other platforms give you the tools to build a course.<br />
            <span className="font-serif italic font-normal text-slate-500">Aurion LMS builds it for you.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-16">
            Launch custom course storefronts, automated landing pages, and interactive student portals in seconds.
          </p>

          {/* Scattered Overlapping 3D Browser Window Fan Collage */}
          <div className="relative w-full max-w-6xl mx-auto min-h-[460px] sm:min-h-[580px] flex justify-center items-center overflow-visible my-6">
            
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 blur-3xl rounded-full pointer-events-none"></div>

            {/* Card 1 - Left Far Tilted */}
            <div className="absolute -left-4 sm:left-2 top-12 w-[270px] sm:w-[360px] bg-white rounded-2xl border border-slate-200 shadow-xl transform -rotate-12 hover:-rotate-6 scale-90 hover:scale-95 transition-all duration-500 z-10 hidden sm:block">
              <div className="h-8 bg-slate-100 border-b border-slate-200 rounded-t-2xl px-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <div className="mx-auto bg-white border border-slate-200 rounded-full px-3 py-0.5 text-[10px] text-slate-400 font-mono">aurion.lms/storefront</div>
              </div>
              <div className="p-4 space-y-3 text-left">
                <div className="h-28 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-white flex flex-col justify-end">
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Featured Academy</span>
                  <span className="font-extrabold text-base">Fullstack Masterclass 2026</span>
                </div>
                <div className="flex justify-between items-center text-xs font-bold pt-1">
                  <span className="text-slate-800">4,200 Students Enrolled</span>
                  <span className="px-3 py-1 bg-orange-500 text-white rounded-lg">Enroll Now</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Left Inner Tilted */}
            <div className="absolute left-6 sm:left-20 top-4 w-[290px] sm:w-[400px] bg-white rounded-2xl border border-slate-200 shadow-2xl transform -rotate-6 hover:rotate-0 scale-95 hover:scale-100 transition-all duration-500 z-20">
              <div className="h-8 bg-slate-100 border-b border-slate-200 rounded-t-2xl px-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <div className="mx-auto bg-white border border-slate-200 rounded-full px-3 py-0.5 text-[10px] text-slate-400 font-mono">Create an online course</div>
              </div>
              <div className="p-5 space-y-4 text-left">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="font-extrabold text-sm text-slate-900">Aurion Course Builder</span>
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold">1-Click Publish</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Total Sales</span>
                    <span className="text-base font-extrabold text-slate-900">LKR 450,000</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Active Learners</span>
                    <span className="text-base font-extrabold text-orange-600">1,280</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Center Front Card */}
            <div className="relative z-30 w-[310px] sm:w-[460px] bg-white rounded-3xl border-2 border-orange-500/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] transform hover:scale-[1.03] transition-all duration-500">
              <div className="h-9 bg-slate-900 rounded-t-3xl px-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs font-mono text-slate-300 truncate">https://instructor.aurionlms.com/dashboard</span>
              </div>
              <div className="p-6 space-y-4 text-left">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">AI Storefront Creator</span>
                    <h3 className="text-xl font-extrabold text-slate-900">Start an online course for free</h3>
                  </div>
                  <div className="px-3 py-1 bg-orange-500 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Live Studio
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                  <div className="h-3.5 bg-slate-200 rounded-full w-3/4"></div>
                  <div className="h-3 bg-slate-200 rounded-full w-1/2"></div>
                  <div className="flex gap-2 pt-2">
                    <div className="h-9 w-28 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xs font-bold">Get Started</div>
                    <div className="h-9 w-28 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-700 text-xs font-bold">Preview</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Right Inner Tilted */}
            <div className="absolute right-6 sm:right-20 top-4 w-[290px] sm:w-[400px] bg-white rounded-2xl border border-slate-200 shadow-2xl transform rotate-6 hover:rotate-0 scale-95 hover:scale-100 transition-all duration-500 z-20">
              <div className="h-8 bg-slate-100 border-b border-slate-200 rounded-t-2xl px-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <div className="mx-auto bg-white border border-slate-200 rounded-full px-3 py-0.5 text-[10px] text-slate-400 font-mono">Create an online store</div>
              </div>
              <div className="p-5 space-y-3 text-left">
                <div className="h-24 bg-slate-900 rounded-xl p-4 text-white flex items-end">
                  <span className="font-bold text-sm">Automated Student Onboarding</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full w-full"></div>
                <div className="h-2.5 bg-slate-100 rounded-full w-2/3"></div>
              </div>
            </div>

            {/* Card 5 - Right Far Tilted */}
            <div className="absolute -right-4 sm:right-2 top-12 w-[270px] sm:w-[360px] bg-white rounded-2xl border border-slate-200 shadow-xl transform rotate-12 hover:rotate-6 scale-90 hover:scale-95 transition-all duration-500 z-10 hidden sm:block">
              <div className="h-8 bg-slate-100 border-b border-slate-200 rounded-t-2xl px-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <div className="mx-auto bg-white border border-slate-200 rounded-full px-3 py-0.5 text-[10px] text-slate-400 font-mono">Aurion Home</div>
              </div>
              <div className="p-4 space-y-3 text-left">
                <div className="p-3 bg-orange-50 rounded-xl text-orange-700 text-xs font-bold">
                  99.9% Course Completion Rate
                </div>
                <div className="h-16 bg-slate-100 rounded-xl"></div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
              
            {/* Section 1 */}
            <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 shadow-xl border border-slate-100">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                  Course Creation <br/>
                  <span className="text-slate-400 font-medium italic">Simplified.</span>
                </h2>
                <p className="text-lg text-slate-500">Everything you need to structure your curriculum without writing a single line of code.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-xs">
                    <LayoutGrid className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Drag-and-Drop Builder</h3>
                  <p className="text-slate-500">Easily structure your curriculum into modules and lessons. Upload videos, PDFs, and SCORM packages.</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-xs">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Drip Content</h3>
                  <p className="text-slate-500">Automate course pacing by unlocking modules based on specific dates or prerequisite completions.</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-xs">
                    <Video className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Rich Media Editor</h3>
                  <p className="text-slate-500">Embed external tools like YouTube, Google Docs, or interactive whiteboards directly into your lessons.</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-50"></div>
              <div className="relative z-10 max-w-3xl mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                  Assessments & <br/>
                  <span className="text-orange-500 font-medium italic">Deep Analytics.</span>
                </h2>
                <p className="text-lg text-slate-500">Track exactly how your students are performing and engage them intelligently.</p>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-6 bg-white p-6 rounded-[2rem] border border-slate-100">
                  <div className="bg-orange-50 p-4 rounded-full shadow-xs text-orange-500 shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced Quiz Engine</h3>
                    <p className="text-slate-500 text-sm">Create randomized question banks, set time limits, and use advanced question types (matrix, matching, hotspots, coding).</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 bg-white p-6 rounded-[2rem] border border-slate-100">
                  <div className="bg-orange-50 p-4 rounded-full shadow-xs text-orange-500 shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Engagement Heatmaps</h3>
                    <p className="text-slate-500 text-sm">See exactly when students pause, rewind, or drop off in your video lectures to optimize your future content.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
