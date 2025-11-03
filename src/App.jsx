import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Engagement from './components/Engagement';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Hero />
      <Services />
      <Projects />
      <Engagement />
    </div>
  );
}
