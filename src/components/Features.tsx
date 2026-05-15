import { Search, Download, Music2, Mic2, Car, Layers } from "lucide-react";

const features = [
  { Icon: Search, title: "Universal Search", desc: "Find songs, videos, albums, and playlists in one place." },
  { Icon: Music2, title: "Background Playback", desc: "Stream uninterrupted while you do everything else." },
  { Icon: Download, title: "Offline Downloads", desc: "Save tracks locally and listen without a connection." },
  { Icon: Mic2, title: "Synced Lyrics", desc: "Sing along with lyrics rendered as the song plays." },
  { Icon: Layers, title: "Library & Playlists", desc: "Organize your music with smart, simple controls." },
  { Icon: Car, title: "Android Auto", desc: "Native media controls and Android Auto support." },
];

export function Features() {
  return (
    <section className="relative bg-black px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Features
          </p>
          <h2 className="mt-4 text-balance text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Everything a music app should be — nothing it shouldn't.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, desc }) => (
            <div key={title} className="group bg-black p-6 transition hover:bg-white/[0.03] sm:p-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
