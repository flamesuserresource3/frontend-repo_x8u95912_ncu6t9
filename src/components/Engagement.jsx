import React from 'react';
import { Mail, Phone, Users, Rocket, Star } from 'lucide-react';

export default function Engagement() {
  return (
    <section className="bg-zinc-50">
      {/* Investors */}
      <div id="investors" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold md:text-4xl">Investors</h2>
          <p className="mt-2 max-w-3xl text-zinc-700">
            Invest in premium Telugu originals with a transparent model.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Why Partner with Us</h3>
            <ul className="list-disc space-y-1 pl-5 text-zinc-700">
              <li>Transparent budgeting</li>
              <li>Milestone-based tracking</li>
              <li>Diverse slate (films, series, short content)</li>
              <li>Strong post-production capabilities</li>
              <li>OTT delivery experience</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold">Investment Process</h3>
            <ol className="list-decimal space-y-1 pl-5 text-zinc-700">
              <li>Project approval</li>
              <li>Funding milestones</li>
              <li>Production + weekly updates</li>
              <li>Delivery with QC</li>
              <li>Revenue share after recoupment</li>
            </ol>

            <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-4">
              <h4 className="font-semibold">Contact</h4>
              <div className="mt-2 space-y-1 text-zinc-700">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> entertainment@prodyum.in</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 99495 90033</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Investor Interest Form</h3>
            <form className="grid gap-4">
              <div className="grid gap-2 md:grid-cols-2">
                <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Full Name" />
                <input type="email" className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Email" />
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Phone" />
                <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Investment Range" />
              </div>
              <textarea rows={4} className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Notes" />
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 font-semibold text-white hover:bg-zinc-800">
                Submit Interest
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Casting & Crew */}
      <div id="casting" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Casting & Crew</h2>
            <p className="mt-2 max-w-3xl text-zinc-700">Work with us — Cast & Crew Applications</p>
          </div>
          <div className="hidden md:flex gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-white text-sm"><Users className="h-4 w-4" /> Open Roles</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1 text-white text-sm"><Rocket className="h-4 w-4" /> Fast Review</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Application Form</h3>
            <form className="grid gap-4">
              <div className="grid gap-2 md:grid-cols-2">
                <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Name" />
                <input type="email" className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Email" />
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Phone" />
                <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Role" />
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Showreel/Portfolio Link" />
                <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Location" />
              </div>
              <textarea rows={4} className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Notes" />
              <p className="text-sm text-zinc-600">Submissions are reviewed on a rolling basis. We will contact shortlisted candidates.</p>
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 font-semibold text-white hover:bg-zinc-800">
                Submit Application
              </button>
            </form>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Who can apply</h3>
            <ul className="list-disc space-y-1 pl-5 text-zinc-700">
              <li>Actors</li>
              <li>DOPs</li>
              <li>Editors</li>
              <li>VFX</li>
              <li>Sound</li>
              <li>Makeup</li>
              <li>Art</li>
              <li>ADs</li>
              <li>Others</li>
            </ul>
            <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4">
              <p className="font-semibold">Project Detail Template</p>
              <div className="mt-2 text-sm text-zinc-700 space-y-2">
                <p><span className="font-medium">Type • Year • Status</span> (Released / Upcoming)</p>
                <p><span className="font-medium">Logline:</span> One-sentence summary.</p>
                <p><span className="font-medium">Synopsis:</span> 2–5 lines describing story/characters.</p>
                <p><span className="font-medium">Credits:</span> Producer, Director, Writer, Cast, DOP, Editor, Music, VFX, Sound</p>
                <p><span className="font-medium">Assets:</span> Trailer • Posters/Thumbnails • Stills • Subtitles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact + Footer */}
      <div id="contact" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Let’s build something cinematic together.</h2>
              <div className="mt-4 space-y-2 text-zinc-700">
                <p>Hyderabad, Telangana</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 99495 90033</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> entertainment@prodyum.in</p>
                <p>YouTube & Instagram – @prodyumentertainments</p>
              </div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="mb-4 text-lg font-semibold">Contact Form</h3>
              <form className="grid gap-4">
                <div className="grid gap-2 md:grid-cols-2">
                  <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Name" />
                  <input type="email" className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Email" />
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Phone" />
                  <input className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Topic" />
                </div>
                <textarea rows={4} className="rounded-md border border-zinc-300 px-3 py-2" placeholder="Message" />
                <button type="button" className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 font-semibold text-white hover:bg-zinc-800">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-600">
            <p className="font-medium">ProDyum Entertainments — Movies • Web Series • Short Films • Post-Production</p>
            <p>Hyderabad, India</p>
            <p className="mt-2">© 2025 ProDyum Pvt Ltd — All Rights Reserved</p>
            <p>Contact: entertainment@prodyum.in | +91 99495 90033</p>
          </div>
        </div>
      </div>
    </section>
  );
}
