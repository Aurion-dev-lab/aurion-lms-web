import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Solutions() {
  const [activeRole, setActiveRole] = useState('instructor');

  return (
    <section id="solutions" className="scroll-mt-24 space-y-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="px-3.5 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider">
          Tailored for your needs
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          One platform. Built for every role.
        </h2>
        <p className="text-slate-500 text-sm">
          Choose your perspective to see how Aurion LMS streamlines your daily workflow.
        </p>
      </div>

      {/* Role Tab Switcher */}
      <div className="flex items-center justify-center p-1 bg-slate-200/70 rounded-2xl max-w-md mx-auto border border-slate-200">
        <button 
          onClick={() => setActiveRole('instructor')} 
          className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition ${
            activeRole === 'instructor' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-indigo-600'
          }`}
        >
          👩‍🏫 Instructors
        </button>
        <button 
          onClick={() => setActiveRole('student')} 
          className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition ${
            activeRole === 'student' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-indigo-600'
          }`}
        >
          🎓 Students
        </button>
        <button 
          onClick={() => setActiveRole('admin')} 
          className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition ${
            activeRole === 'admin' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-indigo-600'
          }`}
        >
          🛡️ Institutions
        </button>
      </div>

      {/* Solution Content Cards */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10">
        
        {/* Instructors Tab */}
        {activeRole === 'instructor' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="px-2.5 py-1 bg-amber-50 text-amber-700 font-bold rounded-lg text-xs">For Course Instructors</span>
              <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">Teach more, grade faster, and automate administration.</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Aurion gives educators full control over curriculum delivery. Spend less time shuffling spreadsheets and more time engaging students.
              </p>
              <div className="space-y-2.5 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  SpeedGrader rubric evaluation saving 65% grading time
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Live student engagement metrics and lecture completion logs
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Built-in video classroom and automatic session recording
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex justify-between items-center text-xs font-bold border-b border-slate-200 pb-3">
                <span className="text-slate-800">Instructor Studio Dashboard</span>
                <span className="text-indigo-600">3 Courses Active</span>
              </div>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">CS-301: Distributed Systems</span>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded font-bold">850 Enrolled</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">AI-204: Machine Learning Essentials</span>
                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded font-bold">620 Enrolled</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Students Tab */}
        {activeRole === 'student' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 font-bold rounded-lg text-xs">For Students & Learners</span>
              <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">An intuitive learning experience on any device.</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clean, distraction-free study portal with interactive videos, checkpoints, and verified completion certificates.
              </p>
              <div className="space-y-2.5 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Seamless video player with playback speeds and bookmarks
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Instant quiz feedback and grade progression trackers
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Downloadable blockchain-verified completion credentials
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex justify-between items-center text-xs font-bold border-b border-slate-200 pb-3">
                <span className="text-slate-800">Student Portal</span>
                <span className="text-emerald-600 font-bold">GPA: 3.88 A</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-800">Distributed Cloud Architecture</span>
                  <span className="text-indigo-600">80% Completed</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Institutions Tab */}
        {activeRole === 'admin' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold rounded-lg text-xs">For Colleges & Enterprise</span>
              <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">Enterprise security, multi-tenant isolation, and SIS sync.</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Designed for multi-campus scale. Connect Canvas, Blackboard, or Banner through standard LTI 1.3 Advantage integration.
              </p>
              <div className="space-y-2.5 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Zero-compromise database isolation per campus domain
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  FERPA, SOC 2 Type II, WCAG 2.1 AA & GDPR Compliant
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  1-Click course archiving and IMS Common Cartridge import
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex justify-between items-center text-xs font-bold border-b border-slate-200 pb-3">
                <span className="text-slate-800">Enterprise Campus Overview</span>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded font-bold">LTI 1.3 Synced</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center text-xs">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="block text-slate-400 font-bold uppercase text-[10px]">Campuses</span>
                  <span className="block text-lg font-extrabold text-slate-900">4 Active</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="block text-slate-400 font-bold uppercase text-[10px]">Sync Status</span>
                  <span className="block text-lg font-extrabold text-emerald-600">100% OK</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
