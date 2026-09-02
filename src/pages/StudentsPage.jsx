import React, { useState } from 'react';
import { Search, PlayCircle, ClipboardList, Download, Settings, BookOpen, Award, Library, Calendar } from 'lucide-react';

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-0">
      {/* Hero / Header */}
      <div className="pt-32 pb-16 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-800 text-sm font-bold mb-8 shadow-sm border border-slate-100">
              <span className="text-emerald-500">✌</span> For Students
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Learn on <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Your Own Terms.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
              Aurion LMS provides a seamless, distraction-free environment to help you focus, collaborate, and achieve your educational goals faster.
            </p>
            
            <div className="relative max-w-lg mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full blur opacity-50"></div>
              <div className="relative bg-white border border-slate-100 shadow-xl rounded-full p-2 flex items-center h-16">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a course..." 
                  className="flex-1 bg-transparent border-none focus:ring-0 text-slate-700 text-lg px-6 placeholder-slate-400 font-medium outline-none h-full"
                />
                <button className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white transition-transform hover:scale-105 shadow-md flex-shrink-0 cursor-pointer">
                  <Search className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
              
            {/* Section 1 */}
            <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                  Interactive Learning <br/>
                  <span className="text-emerald-500 font-medium italic">Experience.</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center mb-6">
                    <PlayCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Video Player</h3>
                  <p className="text-slate-500 text-sm">Adaptive bitrate streaming, variable playback speeds (up to 2x), automatic closed captions.</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-teal-50 text-teal-500 rounded-xl flex items-center justify-center mb-6">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Dynamic Quizzes</h3>
                  <p className="text-slate-500 text-sm">Multiple choice, fill-in-the-blank, coding playgrounds, and essay submissions with instant feedback.</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-cyan-50 text-cyan-500 rounded-xl flex items-center justify-center mb-6">
                    <Download className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Downloadable Resources</h3>
                  <p className="text-slate-500 text-sm">Offline access to PDFs, slide decks, and project files seamlessly integrated into your course player.</p>
                </div>
              </div>
            </div>

            {/* Customization Section */}
            <div>
              <div className="bg-slate-900 rounded-[3rem] p-8 sm:p-16 text-white shadow-2xl flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>
                <div className="md:w-1/2 space-y-6 relative z-10">
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    Customize Absolutely <span className="italic text-emerald-400">Everything.</span>
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    From dashboard layouts and notification preferences to custom themes and personalized learning paths, you are in full control.
                  </p>
                  <ul className="space-y-4 font-medium text-slate-200 mt-8">
                    <li className="flex items-center gap-3">
                      <div className="bg-emerald-500/20 p-1.5 rounded-full">
                        <span className="text-emerald-400 block w-3 h-3 bg-emerald-400 rounded-full"></span>
                      </div>
                      Drag-and-drop dashboard widgets
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-emerald-500/20 p-1.5 rounded-full">
                        <span className="text-emerald-400 block w-3 h-3 bg-emerald-400 rounded-full"></span>
                      </div>
                      Custom UI themes
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-emerald-500/20 p-1.5 rounded-full">
                        <span className="text-emerald-400 block w-3 h-3 bg-emerald-400 rounded-full"></span>
                      </div>
                      Granular notification settings
                    </li>
                  </ul>
                </div>

                <div className="md:w-1/2 w-full bg-white/5 rounded-[2rem] p-8 border border-white/10 backdrop-blur flex items-center justify-center min-h-[300px] relative z-10">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-emerald-500 rounded-2xl shadow-lg flex items-center justify-center mx-auto text-white animate-float transform rotate-3">
                      <Settings className="w-10 h-10" />
                    </div>
                    <p className="text-emerald-100 font-medium text-lg">Personalization Engine UI</p>
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
