import { motion } from "motion/react";
import { Sparkles, Zap, Box } from "lucide-react";
import { VideoPlayer } from "@/components/VideoPlayer";

const navLinks = [
  { label: "Features", active: true },
  { label: "Insights" },
  { label: "About" },
  { label: "Case Studies", strike: true },
  { label: "Contact" },
];

const integrations = [
  { label: "OpenAI", Icon: Sparkles },
  { label: "Vercel", Icon: Zap },
  { label: "Linear", Icon: Box },
];

const marqueeLogos = ["ACME", "GLOBEX", "SOYLENT", "INITECH", "UMBRELLA", "WAYNE", "STARK"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-xl sm:px-6">
          <a href="#" className="font-medium tracking-tight text-white">
            Synapse
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
                    href="#"
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

          <button className="rounded-full bg-gradient-to-b from-white to-white/70 px-4 py-1.5 text-sm font-medium text-black shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset] transition hover:from-white hover:to-white">
            Get Started for Free
          </button>
        </nav>
      </header>

      {/* Background video — floating, no overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[35vh] z-0 h-[80vh] w-full">
        <VideoPlayer
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="h-full w-full object-cover opacity-100"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pt-32 pb-40 text-center sm:px-6">
        {/* Badges */}
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
              <span className="text-white/60">Integrated with</span>
              <Icon className="h-3.5 w-3.5" />
              <span className="font-medium text-white">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 text-balance text-[44px] font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[80px]"
        >
          Where Innovation
          <br />
          Meets Execution
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          className="mt-6 max-w-xl text-pretty text-base text-white/60 sm:text-lg"
        >
          From rigorous testing to seamless deployment, we turn bold ideas into
          production-ready products that scale beautifully.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.75 } } }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <motion.button
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-full border border-white/80 bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Get Started for Free
          </motion.button>
          <motion.button
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
          >
            Let's Get Connected
          </motion.button>
        </motion.div>
      </div>

      {/* Logo Marquee */}
      <div className="absolute inset-x-0 bottom-8 z-10 px-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-40 grayscale sm:gap-x-16">
          {marqueeLogos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-semibold tracking-widest text-white sm:text-base"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
