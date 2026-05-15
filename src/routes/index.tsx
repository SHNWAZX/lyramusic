import { createFileRoute } from "@tanstack/react-router";
import { BionovaHero } from "@/components/BionovaHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BIONOVA — World-class biotech consulting" },
      {
        name: "description",
        content:
          "BIONOVA partners with biotech founders and scientists to turn breakthrough science into resilient, fundable companies.",
      },
      { property: "og:title", content: "BIONOVA — Biotech consulting" },
      {
        property: "og:description",
        content:
          "Consultants that empower biotech leaders. Book a strategy call with our partners.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <h1 className="sr-only">BIONOVA — World-class consultants that empower biotech leaders</h1>
      <BionovaHero />
    </main>
  );
}
