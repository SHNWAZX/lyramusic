import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContentProtection } from "./components/ContentProtection";
import { LyraSite } from "./components/LyraSite";
import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <ContentProtection />
    <LyraSite />
  </StrictMode>,
);
