import React from 'react';
import Spline from '@splinetool/react-spline';
import { Film, Clapperboard, Video, Palette, MapPin } from 'lucide-react';

const Badge = ({ icon: Icon, label }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur border border-white/20">
    <Icon className="h-4 w-4" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-24 pb-16 text-white md:pt-32">
        <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wider backdrop-blur border border-white/20">
          <MapPin className="h-3 w-3" /> Hyderabad
        </div>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          We craft cinematic stories for Movies, Web Series & Short Films
        </h1>
        <p className="max-w-3xl text-lg text-white/90 md:text-xl">
          From script to screen—and every post-production pixel—ProDyum Entertainments builds premium Telugu and multilingual content for OTT, TV, and YouTube.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-semibold text-black shadow-lg shadow-black/20 transition hover:bg-white/90"
          >
            View Projects
          </a>
          <a
            href="#investors"
            className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur border border-white/20 transition hover:bg-white/20"
          >
            Investor Information
          </a>
          <a
            href="#casting"
            className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur border border-white/20 transition hover:bg-white/20"
          >
            Apply: Cast & Crew
          </a>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Badge icon={Film} label="Production" />
          <Badge icon={Palette} label="Post-Production (Edit / DI / VFX / Sound)" />
          <Badge icon={Video} label="OTT/TV/YouTube Delivery" />
          <Badge icon={Clapperboard} label="Hyderabad" />
        </div>

        <div className="mt-8 max-w-4xl text-white/90">
          <p>
            ProDyum Entertainments is a cinema-first studio producing movies, original web series, short films and high-impact music videos. Our in-house post production pipeline—Editing, DI/Color, Title Design, VFX, Sound Design & 5.1 Mix—ensures speed, quality, and cost control. We partner with investors to create premium content with transparent budgeting.
          </p>
        </div>
      </div>
    </section>
  );
}
