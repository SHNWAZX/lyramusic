import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  Plus,
} from "lucide-react";
import flowers from "@/assets/hero-flowers.jpg";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4";

export function BloomSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <video
        src={VIDEO}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex min-h-screen w-full flex-col lg:flex-row">
        {/* LEFT */}
        <div className="relative flex w-full flex-1 lg:w-[52%]">
          <div className="liquid-glass-strong absolute inset-4 rounded-3xl lg:inset-6" />
          <div className="relative flex w-full flex-col p-8 lg:p-12">
            {/* Nav */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="liquid-glass flex h-8 w-8 items-center justify-center rounded-full">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span className="text-2xl font-semibold tracking-tighter">bloom</span>
              </div>
              <button className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80 transition-transform hover:scale-105">
                <Menu className="h-4 w-4" /> Menu
              </button>
            </div>

            {/* Center */}
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <div className="liquid-glass mb-6 flex h-20 w-20 items-center justify-center rounded-full">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-5xl font-medium tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Innovating the
                <br />
                <em className="font-serif font-medium not-italic text-white/80 italic">
                  spirit of
                </em>{" "}
                bloom AI
              </h2>

              <button className="liquid-glass-strong mt-10 inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm text-white transition-transform hover:scale-105 active:scale-95">
                <span>Explore Now</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <Download className="h-3.5 w-3.5" />
                </span>
              </button>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                {["Artistic Gallery", "AI Generation", "3D Structures"].map((p) => (
                  <span
                    key={p}
                    className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom quote */}
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Visionary Design
              </p>
              <p className="mt-3 text-xl text-white sm:text-2xl">
                <span>"We imagined a realm with </span>
                <em className="font-serif font-medium italic text-white/80">no ending</em>
                <span>."</span>
              </p>
              <div className="mt-3 flex items-center justify-center gap-3 text-xs tracking-widest uppercase text-white/60">
                <span className="h-px w-10 bg-white/30" />
                Marcus Aurelio
                <span className="h-px w-10 bg-white/30" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden w-[48%] flex-col gap-4 p-6 lg:flex">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <div className="liquid-glass flex items-center gap-3 rounded-full px-4 py-2">
              <a href="#" className="text-white transition-colors hover:text-white/80">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-white transition-colors hover:text-white/80">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="text-white transition-colors hover:text-white/80">
                <Instagram className="h-4 w-4" />
              </a>
              <span className="mx-1 h-4 w-px bg-white/20" />
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
            <button className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-105">
              <Sparkles className="h-4 w-4" />
            </button>
          </div>

          {/* Community card */}
          <div className="liquid-glass w-56 rounded-2xl p-4">
            <h3 className="text-sm font-medium text-white">Enter our ecosystem</h3>
            <p className="mt-1 text-xs text-white/60">
              Join thousands of designers shaping the next generation of botanical AI.
            </p>
          </div>

          {/* Bottom feature */}
          <div className="liquid-glass mt-auto rounded-[2.5rem] p-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="liquid-glass rounded-3xl p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Wand2 className="h-4 w-4 text-white" />
                </div>
                <h4 className="mt-4 text-sm font-medium text-white">Processing</h4>
                <p className="mt-1 text-xs text-white/60">
                  Real-time generative refinement.
                </p>
              </div>
              <div className="liquid-glass rounded-3xl p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <h4 className="mt-4 text-sm font-medium text-white">Growth Archive</h4>
                <p className="mt-1 text-xs text-white/60">
                  Every iteration, curated and searchable.
                </p>
              </div>
            </div>

            <div className="liquid-glass mt-3 flex items-center gap-3 rounded-3xl p-3">
              <img
                src={flowers}
                alt="Bloom"
                width={96}
                height={64}
                loading="lazy"
                className="h-16 w-24 rounded-2xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-medium text-white">
                  Advanced Plant Sculpting
                </h4>
                <p className="truncate text-xs text-white/60">
                  Shape petals, light, and form with intent.
                </p>
              </div>
              <button className="liquid-glass flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-transform hover:scale-105">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
