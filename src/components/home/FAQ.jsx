import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      q: "How quickly can I launch my academy on Aurion LMS?",
      a: "You can set up your portal and start uploading courses in less than 30 minutes. Our onboarding process guides you through domain setup, payment gateway linking, and branding customization step-by-step."
    },
    {
      id: 2,
      q: "Which Sri Lankan payment gateways are supported?",
      a: "Aurion LMS integrates natively with PayHere, WebXpay, and direct manual bank transfer slip verification. You can accept payments in LKR directly into your Sri Lankan business bank account."
    },
    {
      id: 3,
      q: "Can I use my own custom domain name?",
      a: "Yes! Pro Academy and Enterprise plans allow you to map your custom domain (e.g., learn.yourdomain.lk) with free automated SSL encryption included."
    },
    {
      id: 4,
      q: "How does live Zoom integration work?",
      a: "You can schedule live Zoom sessions directly within your course modules. Students can join classes directly from their LMS portal without external meeting links, and student attendance is tracked automatically."
    },
    {
      id: 5,
      q: "Are course videos protected against unauthorized downloads?",
      a: "Yes, we enforce DRM protection, dynamic student watermarking, and anti-screen record mechanisms to ensure your intellectual content stays fully protected."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(prev => prev === id ? null : id);
  };

  return (
    <section id="faq" className="relative w-full py-24 lg:py-32 bg-slate-900 border-t border-slate-800 overflow-hidden scroll-mt-28">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked <span className="text-orange-400">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about setting up, managing, and scaling your online academy with Aurion LMS.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map(faq => {
            const isOpen = openFaq === faq.id;
            return (
              <div key={faq.id} className="bg-white/5 border border-white/10 backdrop-blur-sm transition duration-300 hover:border-white/20">
                <button 
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white">{faq.q}</span>
                  <span className="w-8 h-8 flex items-center justify-center bg-white/10 text-orange-400 flex-shrink-0">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-8 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Have a question that isn't answered here?{' '}
            <Link to="/contact" className="text-orange-400 hover:underline font-bold">Contact our support team →</Link>
          </p>
        </div>

      </div>
    </section>
  );
}
