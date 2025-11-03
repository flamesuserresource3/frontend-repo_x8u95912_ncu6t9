import React from 'react';
import { Film, Clapperboard, Video, Palette, Rocket, Star } from 'lucide-react';

const ServiceItem = ({ icon: Icon, title, points }) => (
  <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <ul className="list-disc space-y-1 pl-5 text-zinc-700">
      {points.map((p, idx) => (
        <li key={idx}>{p}</li>
      ))}
    </ul>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Services</h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            We deliver end-to-end film production and a robust post-production workflow.
          </p>
        </div>
        <div className="hidden gap-2 md:flex">
          <span className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-white text-sm">
            <Star className="h-4 w-4" /> Cinema-first creative
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1 text-white text-sm">
            <Rocket className="h-4 w-4" /> Faster turnaround
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ServiceItem
          icon={Film}
          title="Movies"
          points={[
            'Feature films for OTT/Theatrical',
            'Development & Casting',
            'Production Management',
            'Post & Delivery',
          ]}
        />
        <ServiceItem
          icon={Clapperboard}
          title="Web Series"
          points={[
            'Concept & Season planning',
            'Episodic production',
            'QC & Marketing',
            'Platform delivery',
          ]}
        />
        <ServiceItem
          icon={Video}
          title="Short Films & Music Videos"
          points={[
            'Concept to completion',
            'Branded content & Trailers',
            'Posters & Promos',
            'Festival-ready outputs',
          ]}
        />
        <ServiceItem
          icon={Palette}
          title="Post-Production"
          points={[
            'Editing & Conform',
            'DI/Color & Title Design',
            'VFX, ADR, Foley',
            '5.1 Sound Mix',
          ]}
        />
      </div>

      <div className="mt-10 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
        <h3 className="text-lg font-semibold">Delivery & QC</h3>
        <p className="mt-2 text-zinc-700">
          OTT specs • DCP prep • Language versions • Subtitles/CC
        </p>
      </div>
    </section>
  );
}
