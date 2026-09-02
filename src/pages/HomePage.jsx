import React from 'react';
import Hero from '../components/home/Hero';
import Metrics from '../components/home/Metrics';
import Features from '../components/home/Features';
import Infrastructure from '../components/home/Infrastructure';
import Ecosystem from '../components/home/Ecosystem';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import LeadForm from '../components/home/LeadForm';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <Metrics />
      <Features />
      <Infrastructure />
      <Ecosystem />
      <Pricing />
      <Testimonials />
      <FAQ />
      <LeadForm />
    </div>
  );
}
