import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { motion, AnimatePresence } from "motion/react";
import {
  Download,
  Github,
  Music2,
  Search,
  Mic2,
  Car,
  Layers,
  Sparkles,
  Headphones,
  Smartphone,
  Play,
  ChevronRight,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const APK_URL =
  "https://github.com/shnwazdeveloper/lyra-music/releases/download/lyra-v3.0.1/Lyra-Music.apk";
const REPO_URL = "https://github.com/shnwazdeveloper/lyra-music";
const RELEASES_URL = "https://github.com/shnwazdeveloper/lyra-music/releases/latest";
const HLS_VIDEO =
  "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8";

const features = [
  { Icon: Search, title: "Universal Search", desc: "Find songs, videos, albums, and playlists in one place." },
  { Icon: Music2, title: "Background Playback", desc: "Stream uninterrupted while you do everything else." },
  { Icon: Download, title: "Offline Downloads", desc: "Save tracks locally and listen without a connection." },
  { Icon: Mic2, title: "Synced Lyrics", desc: "Sing along with lyrics rendered as the song plays." },
  { Icon: Layers, title: "Library & Playlists", desc: "Organize your music with smart, simple controls." },
  { Icon: Car, title: "Android Auto", desc: "Native media controls and Android Auto support." },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

function HlsBackground() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (v.canPlayType("application/vnd.apple.mpegurl")) {
      v.src = HLS_VIDEO;
      return;
    }
    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true });
      hls.loadSource(HLS_VIDEO);
      hls.attachMedia(v);
      return () => hls.destroy();
    }
  }, []);
  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
    />
  );
}

export function LyraSite() {
  const [tab, setTab] = useState("overview");

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-xl sm:px-6 sm:py-2.5">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
              <Music2 className="h-3.5 w-3.5" />
            </span>
            Lyra <span className="hidden text-white/50 sm:inline">Music</span>
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 text-sm text-white/70 transition hover:text-white md:inline-flex"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={APK_URL}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black transition hover:bg-white/90 sm:px-4 sm:text-sm"
          >
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Download APK</span>
            <span className="sm:hidden">APK</span>
          </a>
        </nav>
      </header>

      {/* Tabs */}
      <Tabs value={tab} onValueChange={setTab} className="pt-24">
        <div className="sticky top-20 z-40 flex justify-center px-4">
          <TabsList className="rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
            <TabsTrigger
              value="overview"
              className="rounded-full px-4 py-1.5 text-sm text-white/70 data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="features"
              className="rounded-full px-4 py-1.5 text-sm text-white/70 data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="download"
              className="rounded-full px-4 py-1.5 text-sm text-white/70 data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Download
            </TabsTrigger>
          </TabsList>
        </div>

        <AnimatePresence mode="wait">
          {/* OVERVIEW */}
          <TabsContent value="overview" forceMount={tab === "overview" ? true : undefined} hidden={tab !== "overview"}>
            <motion.section key="overview" {...fadeUp} className="relative overflow-hidden">
              <div className="relative min-h-[88vh]">
                <HlsBackground />
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/30 to-black" />
                <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
                    <Sparkles className="h-3 w-3" /> Material You · Open Source
                  </span>
                  <h1 className="mt-6 text-balance text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[80px]">
                    Music, the way
                    <br /> it should sound
                  </h1>
                  <p className="mt-5 max-w-xl text-pretty text-base text-white/60 sm:text-lg">
                    Lyra Music is a clean, ad-free Material You player for Android — stream, download, and enjoy lyrics with a modern Jetpack Compose interface.
                  </p>
                  <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                    <a
                      href={APK_URL}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90 sm:w-auto"
                    >
                      <Download className="h-4 w-4" /> Download APK
                    </a>
                    <button
                      onClick={() => setTab("features")}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
                    >
                      <Play className="h-4 w-4" /> See features
                    </button>
                  </div>
                </div>
              </div>

              {/* Marquee strip */}
              <div className="border-y border-white/10 bg-black px-4 py-6">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-50 grayscale sm:gap-x-14">
                  {["MATERIAL YOU", "ANDROID 6.0+", "KOTLIN", "JETPACK COMPOSE", "OFFLINE", "LYRICS", "ANDROID AUTO"].map((l) => (
                    <span key={l} className="text-[10px] font-semibold tracking-widest sm:text-sm">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>
          </TabsContent>

          {/* FEATURES */}
          <TabsContent value="features" forceMount={tab === "features" ? true : undefined} hidden={tab !== "features"}>
            <motion.section key="features" {...fadeUp} className="px-4 py-20 sm:py-28">
              <div className="mx-auto max-w-6xl">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Features</p>
                <h2 className="mt-4 max-w-2xl text-balance text-4xl font-medium tracking-tight sm:text-5xl">
                  Everything a music app should be — nothing it shouldn't.
                </h2>

                <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map(({ Icon, title, desc }) => (
                    <div key={title} className="bg-black p-6 transition hover:bg-white/[0.03] sm:p-8">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="mt-5 text-lg font-medium">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex justify-center">
                  <button
                    onClick={() => setTab("download")}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                  >
                    Get the APK <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.section>
          </TabsContent>

          {/* DOWNLOAD */}
          <TabsContent value="download" forceMount={tab === "download" ? true : undefined} hidden={tab !== "download"}>
            <motion.section key="download" {...fadeUp} className="px-4 py-20 sm:py-28">
              <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 sm:p-14">
                <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      <Smartphone className="h-3.5 w-3.5" /> Android 6.0+
                    </div>
                    <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                      Get Lyra Music on your phone
                    </h2>
                    <p className="mt-3 text-white/60">
                      Free, open-source, and lightweight. Sideload the APK directly from the latest GitHub release.
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <Headphones className="h-4 w-4 text-white/70" />
                        <p className="mt-2 font-medium">Background audio</p>
                        <p className="text-xs text-white/50">Keeps playing in your pocket.</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <Layers className="h-4 w-4 text-white/70" />
                        <p className="mt-2 font-medium">Material You</p>
                        <p className="text-xs text-white/50">Adapts to your wallpaper.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
                    <a
                      href={APK_URL}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                    >
                      <Download className="h-4 w-4" /> Download Lyra-Music.apk
                    </a>
                    <a
                      href={RELEASES_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      <Github className="h-4 w-4" /> View Releases
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          </TabsContent>
        </AnimatePresence>
      </Tabs>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 py-8 text-xs text-white/40 sm:flex-row">
        <p>© {new Date().getFullYear()} Lyra Music. Open source.</p>
        <p>Based on OpenTune · Built with Jetpack Compose.</p>
      </footer>
    </main>
  );
}
