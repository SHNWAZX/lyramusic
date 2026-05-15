import { Download, Github, Smartphone } from "lucide-react";

const APK_URL =
  "https://github.com/shnwazdeveloper/lyra-music/releases/download/lyra-v3.0.1/Lyra-Music.apk";
const REPO_URL = "https://github.com/shnwazdeveloper/lyra-music";

export function DownloadCTA() {
  return (
    <section className="relative bg-black px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 sm:p-14">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Smartphone className="h-3.5 w-3.5" /> Android 6.0+
            </div>
            <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Get Lyra Music on your phone
            </h2>
            <p className="mt-3 text-white/60">
              Free, open-source, and lightweight. Sideload the APK directly from
              the latest GitHub release.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
            <a
              href={APK_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <Download className="h-4 w-4" /> Download Lyra-Music.apk
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> View on GitHub
            </a>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
        <p>© {new Date().getFullYear()} Lyra Music. Open source under its respective license.</p>
        <p>Based on OpenTune. Built with Jetpack Compose.</p>
      </footer>
    </section>
  );
}
