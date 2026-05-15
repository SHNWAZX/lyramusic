import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-black">
      <h1 className="sr-only">Synapse — Where Innovation Meets Execution</h1>
      <Hero />
    </main>
  );
}
