import { motion } from "motion/react";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260223_060517_9feec9ab-18e4-477a-b034-de5903a67e91.mp4";
const SHIP_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260223_063954_03a5f7ec-5f10-4acb-ba8d-dce4815217db.mp4";

const navColumns = [
  ["Reels", "Services"],
  ["Projects", "Pipeline"],
  ["Careers", "Get In Touch"],
];

function CartIcon() {
  return (
    <button className="relative flex items-center justify-center text-white">
      <svg viewBox="0 0 27 30" width="36" height="40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 6 a2 2 0 0 1 2-2 h17 a2 2 0 0 1 2 2 v18 a2 2 0 0 1 -2 2 h-17 a2 2 0 0 1 -2 -2 z M3 10 a1.5 1.5 0 0 0 0 3 M3 16 a1.5 1.5 0 0 0 0 3 M24 10 a1.5 1.5 0 0 1 0 3 M24 16 a1.5 1.5 0 0 1 0 3" />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">0</span>
    </button>
  );
}

export function FramelixSection() {
  return (
    <div className="font-inter w-full bg-black text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between bg-black px-9 pb-5 pt-8">
        <div className="flex items-center">
          <span className="text-2xl font-semibold tracking-tight text-white">
            Framelix<sup className="text-xs">3D</sup>
          </span>
        </div>
        <nav className="hidden gap-16 md:flex">
          {navColumns.map((col, i) => (
            <div key={i} className="flex flex-col gap-1 text-sm">
              {col.map((l) => (
                <a key={l} href="#" className="text-white/80 transition hover:text-white">
                  {l}
                </a>
              ))}
            </div>
          ))}
        </nav>
        <CartIcon />
      </header>

      {/* Hero */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <video
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          className="h-auto w-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 top-[50px] -translate-x-1/2 px-4 text-center"
        >
          <p className="text-[26px] font-medium">
            Framelix<sup className="text-xs">3D</sup>
          </p>
          <h2
            className="mt-2 font-medium leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 68px)" }}
          >
            Cinematic Motion Studios
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-[12%] left-1/2 -translate-x-1/2 text-center"
        >
          <button className="rounded-full bg-white px-14 py-4 text-[22px] font-medium text-black transition hover:opacity-90">
            Explore Reel
          </button>
          <p className="mt-3 text-sm text-white/60">Ready in 24-48 hours</p>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden bg-[#A6A4FF] py-[14px]">
        <div className="flex w-max animate-[marquee_20s_linear_infinite] gap-[60px] whitespace-nowrap text-base font-medium text-black">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-[60px]">
              New! 3D<sup>OS</sup> V1.2.1 out now!
            </span>
          ))}
        </div>
      </div>

      {/* Shipping */}
      <section className="rounded-b-[40px] bg-[#EAEAEA] pb-32 text-black">
        <div className="px-4 pt-16 text-center">
          <p className="text-xl font-medium">
            Framelix<sup className="text-xs">3D</sup>
          </p>
          <h2
            className="mt-2 font-medium leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 52px)" }}
          >
            Shipping Now
          </h2>
        </div>

        <div className="-my-24 flex justify-center px-4">
          <video
            src={SHIP_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            width={800}
            height={800}
            className="h-auto w-full max-w-[800px] rounded-2xl object-contain"
          />
        </div>

        <div className="text-center">
          <button className="rounded-full bg-black px-16 py-3 text-lg text-white transition hover:opacity-90 sm:px-46">
            Buy Now
          </button>
          <p className="mt-4 text-xl" style={{ fontWeight: 450 }}>
            Explore now
          </p>
        </div>
      </section>
    </div>
  );
}
