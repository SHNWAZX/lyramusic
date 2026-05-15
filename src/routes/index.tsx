import { createFileRoute } from "@tanstack/react-router";
import { BionovaHero } from "@/components/BionovaHero";
import { BloomSection } from "@/components/BloomSection";
import { FramelixSection } from "@/components/FramelixSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BIONOVA · Bloom · Framelix 3D" },
      {
        name: "description",
        content:
          "A multi-brand showcase: BIONOVA biotech consulting, Bloom AI floral design, and Framelix 3D cinematic motion studio.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <h1 className="sr-only">BIONOVA, Bloom, and Framelix 3D — combined showcase</h1>
      <BionovaHero />
      <BloomSection />
      <FramelixSection />
    </main>
  );
}
