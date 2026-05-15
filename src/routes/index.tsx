import { createFileRoute } from "@tanstack/react-router";
import { LyraSite } from "@/components/LyraSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lyra Music — Material You music player for Android" },
      {
        name: "description",
        content:
          "Free, open-source Material You music app for Android. Search, offline downloads, lyrics, and Android Auto support.",
      },
      { property: "og:title", content: "Lyra Music — Material You music player" },
      {
        property: "og:description",
        content: "Stream, download, and enjoy lyrics with a modern Jetpack Compose interface.",
      },
    ],
  }),
  component: () => <LyraSite />,
});
