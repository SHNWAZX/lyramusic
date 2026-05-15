import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DownloadCTA } from "@/components/DownloadCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lyra Music — Material You music player for Android" },
      {
        name: "description",
        content:
          "Lyra Music is a clean, ad-free Material You music app for Android with search, offline downloads, lyrics, and Android Auto support.",
      },
      { property: "og:title", content: "Lyra Music — Material You music player" },
      {
        property: "og:description",
        content:
          "Stream, download, and enjoy lyrics with a modern Jetpack Compose interface. Free and open source.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-black">
      <h1 className="sr-only">Lyra Music — Material You Android music player</h1>
      <Hero />
      <Features />
      <DownloadCTA />
    </main>
  );
}
