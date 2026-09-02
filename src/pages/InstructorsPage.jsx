import React from 'react';
import { LayoutGrid, Clock, Video, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export default function InstructorsPage() {
  return (
    <div className="space-y-0">
      {/* Hero / Header */}
      <div className="pt-32 pb-16 bg-white overflow-hidden relative">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-bold mb-8 shadow-sm">
              <span className="text-indigo-600">✦</span> For Instructors
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Empower Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Teaching Experience.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Create engaging courses, track student progress, and deliver a world-class learning experience with our intuitive, powerful instructor tools.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
              
            {/* Section 1 */}
            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-slate-100">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                  Course Creation <br/>
                  <span className="text-slate-400 font-medium italic">Simplified.</span>
                </h2>
                <p className="text-lg text-slate-500">Everything you need to structure your curriculum without writing a single line of code.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <LayoutGrid className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Drag-and-Drop Builder</h3>
                  <p className="text-slate-500">Easily structure your curriculum into modules and lessons. Upload videos, PDFs, and SCORM packages.</p>
                </div>

                <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Drip Content</h3>
                  <p className="text-slate-500">Automate course pacing by unlocking modules based on specific dates or prerequisite completions.</p>
                </div>

                <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <Video className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Rich Media Editor</h3>
                  <p className="text-slate-500">Embed external tools like YouTube, Google Docs, or interactive whiteboards directly into your lessons.</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-100 to-transparent rounded-bl-full opacity-50"></div>
              <div className="relative z-10 max-w-3xl mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                  Assessments & <br/>
                  <span className="text-green-500 font-medium italic">Deep Analytics.</span>
                </h2>
                <p className="text-lg text-slate-500">Track exactly how your students are performing and engage them intelligently.</p>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-6 bg-slate-50 p-6 rounded-[2rem]">
                  <div className="bg-white p-4 rounded-full shadow-sm text-green-500 shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced Quiz Engine</h3>
                    <p className="text-slate-500 text-sm">Create randomized question banks, set time limits, and use advanced question types (matrix, matching, hotspots, coding).</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 bg-slate-50 p-6 rounded-[2rem]">
                  <div className="bg-white p-4 rounded-full shadow-sm text-blue-500 shrink-0">
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
