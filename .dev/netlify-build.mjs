// Builds a static copy of the local preview for Netlify (review only — production lives on Tiendanube).
// Layout mirrors the repo so every "../static/..." path in the preview keeps working:
//   dist/preview/  ← preview.html (+ index.html), storefront mock, its scripts and data
//   dist/static/   ← theme assets (compiled JS, CSS, images, models)
// No dependencies: static/js/solar-experience.js is already compiled and committed (run `npm run build` in .dev first).
import { cpSync, existsSync, mkdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dev = join(root, ".dev");
const dist = join(root, "dist");
const skip = (path) => /(^|\/)\.DS_Store$/.test(path);

rmSync(dist, { recursive: true, force: true });
mkdirSync(join(dist, "preview"), { recursive: true });

cpSync(join(root, "static"), join(dist, "static"), { recursive: true, filter: (path) => !skip(path) });
for (const entry of ["preview.html", "storefront.html", "storefront-mock.html", "storefront.css", "ipanema.html", "ipanema-sim.css", "src", "data"]) {
  const from = join(dev, entry);
  if (existsSync(from)) cpSync(from, join(dist, "preview", entry), { recursive: true, filter: (path) => !skip(path) });
}
// The header (src/ipanema-sim.js) reads the theme's settings, copy and icon sprite.
cpSync(join(root, "config", "settings_data.json"), join(dist, "config", "settings_data.json"));
cpSync(join(root, "translations", "es_AR.json"), join(dist, "translations", "es_AR.json"));
cpSync(join(root, "layouts", "resources", "icons-sprite.tpl"), join(dist, "layouts", "resources", "icons-sprite.tpl"));
// /preview/ opens the experience directly.
cpSync(join(dev, "preview.html"), join(dist, "preview", "index.html"));
// Fallback for hosts without netlify.toml redirects.
writeFileSync(join(dist, "index.html"), '<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=./preview/"><title>Altar · preview</title><a href="./preview/">Abrir preview</a>\n');

const js = join(dist, "static", "js", "solar-experience.js");
console.log(`dist listo · solar-experience.js ${(statSync(js).size / 1024).toFixed(0)} KB`);
