import React from 'react';
import Hero from '../components/home/Hero';
import Partners from '../components/home/Partners';
import Metrics from '../components/home/Metrics';
import Features from '../components/home/Features';
import Infrastructure from '../components/home/Infrastructure';
import Solutions from '../components/home/Solutions';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import LeadForm from '../components/home/LeadForm';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <Partners />
      <Metrics />
      <Features />
      <Infrastructure />
      <Solutions />
      <Pricing />
      <Testimonials />
      <FAQ />
      <LeadForm />
    </div>
  );
}
