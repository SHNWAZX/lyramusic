import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { ArrowUpRight, Play } from "lucide-react";

const VIDEOS = {
  card1: "https://stream.mux.com/1RdbcBtpEUK6501pc6yaIvwo9UfSnOg02k1uHxat00xR3w.m3u8",
  card2: "https://stream.mux.com/t1TbTB8M1VYHkhxBuap4A8Vm1x015HTHyuQxqchDBago.m3u8",
  card3: "https://stream.mux.com/6yvj9SR5bjmXq9N3ak7gy427RwUs8R2ZoH4ndA7Q1018.m3u8",
};

const PILL_IMG =
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&q=70";

function attachHls(video: HTMLVideoElement | null, src: string): (() => void) | undefined {
  if (!video) return;
  if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = src;
    return;
  }
  if (Hls.isSupported()) {
    const hls = new Hls({ enableWorker: true });
    hls.loadSource(src);
    hls.attachMedia(video);
    return () => hls.destroy();
  }
}

export function BionovaHero() {
  const v1 = useRef<HTMLVideoElement>(null);
  const v2 = useRef<HTMLVideoElement>(null);
  const v3 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const cleanups = [
      attachHls(v1.current, VIDEOS.card1),
      attachHls(v2.current, VIDEOS.card2),
      attachHls(v3.current, VIDEOS.card3),
    ];
    return () => cleanups.forEach((c) => c?.());
  }, []);

  return (
    <section className="flex min-h-screen flex-col bg-background text-foreground lg:h-screen lg:overflow-hidden">
      {/* Nav */}
      <nav className="flex items-center justify-between px-5 py-5 lg:px-16">
        <a href="#" className="text-xl font-bold tracking-tight">
          BIONOVA
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {["About", "Offerings", "Pricing", "Blog"].map((l) => (
            <li key={l}>
              <a
                href="#"
                className="text-sm font-semibold text-foreground/70 transition hover:text-foreground"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-5 md:flex">
          <a href="#" className="text-sm font-semibold text-foreground/70 hover:text-foreground">
            Log in
          </a>
          <a
            href="#"
            className="rounded-full bg-hero-btn px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Request a call
          </a>
        </div>
      </nav>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-8 lg:px-16 lg:pb-[82px]">
        <div className="grid h-full flex-1 grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* LEFT */}
          <div
            className="flex flex-col justify-between opacity-0"
            style={{ animation: "fade-up 700ms cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            <div>
              <h1 className="text-[2rem] leading-[1.08] tracking-tight font-normal sm:text-5xl lg:text-[3.5rem] xl:text-7xl">
                <span
                  className="mr-2 inline-block h-10 w-20 rounded-full bg-cover bg-center align-middle sm:h-12 sm:w-24"
                  style={{ backgroundImage: `url(${PILL_IMG})` }}
                  aria-hidden
                />
                <span className="align-middle">World-class</span>
                <br />
                consultants that
                <br />
                <span className="align-middle">empower</span>{" "}
                <button className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-3 py-1 align-middle text-sm font-medium sm:px-5 sm:py-1.5 sm:text-base lg:text-lg">
                  <Play className="h-3 w-3 fill-foreground sm:h-4 sm:w-4" />
                  How do we work
                </button>
                <br />
                biotech leaders
              </h1>

              <div className="flex flex-wrap items-center gap-5 pt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-hero-btn px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Contact us
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold underline underline-offset-4"
                >
                  Request a call
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <p className="max-w-md text-sm text-foreground/70">
                BIONOVA partners with biotech founders, scientists, and operators to
                turn breakthrough science into resilient, fundable companies.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-3">
                {["Headway", "brightline", "hazel", "G&STC"].map((b) => (
                  <span key={b} className="text-2xl font-bold tracking-tight">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="flex flex-col gap-4 opacity-0"
            style={{
              animation: "fade-up 700ms cubic-bezier(0.16,1,0.3,1) forwards",
              animationDelay: "150ms",
            }}
          >
            {/* Card 1 */}
            <div className="relative flex min-h-[200px] flex-1 flex-col justify-between overflow-hidden rounded-[1.5rem] bg-black p-6 lg:rounded-[2.5rem] lg:p-8">
              <video
                ref={v1}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative z-10" />
              <div className="relative z-10 flex flex-col gap-4">
                <h2 className="max-w-md text-2xl font-medium text-white lg:text-3xl">
                  If you're ready to build your bioventure, let's get in touch.
                </h2>
                <div className="flex items-end justify-between gap-4">
                  <p className="max-w-xs text-sm text-white/85">
                    Book a strategy call with our partners and map your next milestone.
                  </p>
                  <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background text-foreground transition hover:scale-105">
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Cards 2 & 3 */}
            <div className="grid flex-1 grid-cols-2 gap-3 lg:gap-4">
              {/* Card 2 */}
              <div className="relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-black p-5 lg:rounded-[2.5rem] lg:p-8">
                <video
                  ref={v2}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                  style={{ transform: "translate(-50%,-50%) scale(1.5)" }}
                />
                <div className="relative z-10 flex items-start justify-between">
                  <span className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground">
                    locations
                  </span>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-medium text-white lg:text-2xl">
                    United bio-entrepreneurs
                  </h3>
                  <p className="mt-1 text-xs text-white/80 lg:text-sm">
                    A global network across hubs from Boston to Basel.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-black p-5 lg:rounded-[2.5rem] lg:p-8">
                <video
                  ref={v3}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                  style={{ transform: "translate(-50%,-50%) scale(2.8)" }}
                />
                <div className="relative z-10 flex items-start">
                  <span className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground">
                    scientists
                  </span>
                </div>
                <div className="relative z-10">
                  <p className="text-4xl font-semibold text-white lg:text-7xl">34</p>
                  <p className="mt-1 text-xs text-white/80 lg:text-sm">
                    PhDs and operators on call for your venture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
