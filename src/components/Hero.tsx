import { motion } from "motion/react";
import { Music, Headphones, Sparkles, Download, Github } from "lucide-react";
import { VideoPlayer } from "@/components/VideoPlayer";

const APK_URL =
  "https://github.com/shnwazdeveloper/lyra-music/releases/download/lyra-v3.0.1/Lyra-Music.apk";
const RELEASES_URL = "https://github.com/shnwazdeveloper/lyra-music/releases/latest";

const navLinks = [
  { label: "Features", active: true },
  { label: "Download" },
  { label: "About" },
  { label: "Changelog", strike: true },
  { label: "GitHub", href: "https://github.com/shnwazdeveloper/lyra-music" },
];

const integrations = [
  { label: "Material You", Icon: Sparkles },
  { label: "Android Auto", Icon: Headphones },
  { label: "Jetpack Compose", Icon: Music },
];

const marqueeLogos = [
  "MATERIAL YOU",
  "ANDROID 6.0+",
  "KOTLIN",
  "JETPACK COMPOSE",
  "OFFLINE",
  "LYRICS",
  "ANDROID AUTO",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl sm:px-6 sm:py-2.5">
          <a href="#" className="font-medium tracking-tight text-white">
            Lyra<span className="text-white/50"> Music</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.active ? (
                  <span className="relative inline-block rounded-full p-[1px] [background:linear-gradient(135deg,rgba(255,255,255,0.6),rgba(255,255,255,0.05))]">
                    <span className="block rounded-full bg-black/80 px-3 py-1 text-sm text-white">
                      {link.label}
                    </span>
                  </span>
                ) : (
                  <a
                    href={link.href ?? "#"}
                    target={link.href ? "_blank" : undefined}
                    rel={link.href ? "noreferrer" : undefined}
                    className={`px-3 py-1 text-sm text-white/70 transition hover:text-white ${
                      link.strike ? "line-through decoration-white/30" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <a
            href={APK_URL}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-white to-white/70 px-3 py-1.5 text-xs font-medium text-black shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset] transition hover:from-white hover:to-white sm:px-4 sm:text-sm"
          >
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Download APK</span>
            <span className="sm:hidden">APK</span>
          </a>
        </nav>
      </header>

      {/* Background video */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[35vh] z-0 h-[80vh] w-full">
        <VideoPlayer
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="h-full w-full object-cover opacity-100"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pt-28 pb-44 text-center sm:px-6 sm:pt-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {integrations.map(({ label, Icon }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md sm:text-sm"
            >
              <span className="text-white/60">Built with</span>
              <Icon className="h-3.5 w-3.5" />
              <span className="font-medium text-white">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 text-balance text-[40px] font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[80px]"
        >
          Music, the way
          <br />
          it should sound
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          className="mt-6 max-w-xl text-pretty text-base text-white/60 sm:text-lg"
        >
          Lyra Music is a clean, ad-free Material You player for Android — stream,
          download, and enjoy lyrics with a modern Jetpack Compose interface.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.75 } } }}
          className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        >
          <motion.a
            href={APK_URL}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/80 bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black sm:w-auto"
          >
            <Download className="h-4 w-4" />
            Download APK
          </motion.a>
          <motion.a
            href={RELEASES_URL}
            target="_blank"
            rel="noreferrer"
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10 sm:w-auto"
          >
            <Github className="h-4 w-4" />
            View Releases
          </motion.a>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute inset-x-0 bottom-6 z-10 px-4 sm:bottom-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-40 grayscale sm:gap-x-16">
          {marqueeLogos.map((logo) => (
            <span
              key={logo}
              className="text-[10px] font-semibold tracking-widest text-white sm:text-sm"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
