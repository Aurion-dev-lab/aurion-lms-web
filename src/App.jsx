import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InstructorsPage from './pages/InstructorsPage';
import StudentsPage from './pages/StudentsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pathToIdMap = {
      '/features': 'features',
      '/pricing': 'pricing',
      '/faq': 'faq',
      '/contact': 'contact',
    };

    const sectionId = pathToIdMap[pathname];

    if (sectionId) {
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<HomePage />} />
            <Route path="/pricing" element={<HomePage />} />
            <Route path="/faq" element={<HomePage />} />
            <Route path="/contact" element={<HomePage />} />
            <Route path="/instructors" element={<InstructorsPage />} />
            <Route path="/students" element={<StudentsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
