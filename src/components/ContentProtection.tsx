import { useEffect } from "react";

/**
 * Client-side deterrents only. Determined users can still view source via
 * devtools, curl, or "view-source:" — the browser MUST receive the HTML/JS.
 */
export function ContentProtection() {
  useEffect(() => {
    const block = (e: Event) => e.preventDefault();

    const blockKeys = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      // F12
      if (e.key === "F12") return e.preventDefault();
      // Ctrl/Cmd + U  (view source)
      if ((e.ctrlKey || e.metaKey) && k === "u") return e.preventDefault();
      // Ctrl/Cmd + S  (save page)
      if ((e.ctrlKey || e.metaKey) && k === "s") return e.preventDefault();
      // Ctrl/Cmd + P  (print)
      if ((e.ctrlKey || e.metaKey) && k === "p") return e.preventDefault();
      // Ctrl/Cmd + Shift + I / J / C  (devtools)
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        (k === "i" || k === "j" || k === "c")
      )
        return e.preventDefault();
      // Cmd + Opt + I / J / C / U (mac)
      if (e.metaKey && e.altKey && (k === "i" || k === "j" || k === "c" || k === "u"))
        return e.preventDefault();
    };

    document.addEventListener("contextmenu", block);
    document.addEventListener("copy", block);
    document.addEventListener("cut", block);
    document.addEventListener("selectstart", block);
    document.addEventListener("dragstart", block);
    document.addEventListener("keydown", blockKeys);

    const prevUserSelect = document.body.style.userSelect;
    const prevWebkitUserSelect = (document.body.style as CSSStyleDeclaration & {
      webkitUserSelect?: string;
    }).webkitUserSelect;
    document.body.style.userSelect = "none";
    (document.body.style as CSSStyleDeclaration & {
      webkitUserSelect?: string;
    }).webkitUserSelect = "none";

    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("copy", block);
      document.removeEventListener("cut", block);
      document.removeEventListener("selectstart", block);
      document.removeEventListener("dragstart", block);
      document.removeEventListener("keydown", blockKeys);
      document.body.style.userSelect = prevUserSelect;
      (document.body.style as CSSStyleDeclaration & {
        webkitUserSelect?: string;
      }).webkitUserSelect = prevWebkitUserSelect;
    };
  }, []);

  return null;
}
