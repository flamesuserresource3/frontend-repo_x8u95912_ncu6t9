import React, { useState } from 'react';

const filters = ['All', 'Movies', 'Web Series', 'Short Films', 'Music Videos', 'Upcoming'];

const sampleProjects = [
  {
    title: 'Midnight Frames',
    type: 'Movie',
    year: '2024',
    status: 'Released',
    logline: 'A cinematographer uncovers a secret buried in raw footage.',
  },
  {
    title: 'City of Echoes',
    type: 'Web Series',
    year: '2025',
    status: 'Upcoming',
    logline: 'Strangers connected by sound in the heart of Hyderabad.',
  },
  {
    title: 'Pulse',
    type: 'Short Film',
    year: '2023',
    status: 'Released',
    logline: 'A paramedic races against time through a city-wide blackout.',
  },
  {
    title: 'Reel Love',
    type: 'Music Video',
    year: '2024',
    status: 'Released',
    logline: 'A meta romance told between frames and timelines.',
  },
];

const ProjectCard = ({ p }) => (
  <div className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">{p.status}</span>
      </div>
      <p className="mt-1 text-sm text-zinc-600">{p.type} • {p.year}</p>
      <p className="mt-3 text-zinc-700">{p.logline}</p>
    </div>
    <div className="mt-4">
      <button className="w-full rounded-md bg-black px-4 py-2 text-white transition hover:bg-zinc-800">View Details</button>
    </div>
  </div>
);

export default function Projects() {
  const [active, setActive] = useState('All');
  const displayed = active === 'All' ? sampleProjects : sampleProjects.filter(p => {
    if (active === 'Upcoming') return p.status === 'Upcoming';
    if (active === 'Movies') return p.type === 'Movie';
    if (active === 'Web Series') return p.type === 'Web Series';
    if (active === 'Short Films') return p.type === 'Short Film';
    if (active === 'Music Videos') return p.type === 'Music Video';
    return true;
  });

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            Explore our released and upcoming projects — movies, web series, short films and music videos.
          </p>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-2 text-sm transition ${active === f ? 'border-black bg-black text-white' : 'border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayed.map((p) => (
          <ProjectCard key={`${p.title}-${p.year}`} p={p} />
        ))}
      </div>
    </section>
  );
}
