// Altar site-wide helpers. This file intentionally excludes Three.js/GSAP so commercial pages stay light.
(function () {
  if (window.__altarSiteInitialized) return;
  window.__altarSiteInitialized = true;

  const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)");
  const LIVE_DATE_TIME_ZONE = "America/Argentina/Buenos_Aires";
  const GRAIN_FPS = 10;
  let headerFrame = 0;
  let grainSeed = 1;

  function updateLiveDates() {
    const now = new Date();
    const parts = Object.fromEntries(
      new Intl.DateTimeFormat("en-US", {
        timeZone: LIVE_DATE_TIME_ZONE,
        month: "short",
        day: "2-digit",
        year: "2-digit",
      }).formatToParts(now).map(({ type, value }) => [type, value])
    );
    const isoDate = new Intl.DateTimeFormat("en-CA", { timeZone: LIVE_DATE_TIME_ZONE }).format(now);
    document.querySelectorAll("[data-live-date]").forEach((element) => {
      element.textContent = `${parts.month}/${parts.day}/${parts.year}`.toUpperCase();
      element.setAttribute("datetime", isoDate);
    });

    clearTimeout(updateLiveDates.timer);
    updateLiveDates.timer = setTimeout(updateLiveDates, 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()) + 50);
  }

  function updateHeaderTheme() {
    headerFrame = 0;
    const header = document.querySelector(".site-header");
    if (!header) return;
    const probe = header.getBoundingClientRect().height / 2;
    const onLight = Array.from(document.querySelectorAll('[data-header-theme="light"]')).some((section) => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= probe && bounds.bottom >= probe;
    });
    header.classList.toggle("is-on-light", onLight);
  }

  function scheduleHeaderTheme() {
    if (!headerFrame) headerFrame = requestAnimationFrame(updateHeaderTheme);
  }

  function initNewsletterPreview() {
    document.querySelectorAll("[data-newsletter-form]:not([action])").forEach((form) => {
      if (form.dataset.ready) return;
      form.dataset.ready = "true";
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const note = form.querySelector(".altar-footer__status");
        if (note) note.textContent = "¡Listo! Ya estás en la lista.";
        form.reset();
      });
    });
  }

  function solarOwnsGrain() {
    return Array.from(document.querySelectorAll("[data-altar-solar]")).some((root) => root.solarExperience?.renderer);
  }

  function animateStandaloneGrain() {
    if (document.hidden || REDUCED_MOTION.matches || solarOwnsGrain()) return;
    const nodes = document.querySelectorAll("[data-grain-turbulence]");
    if (!nodes.length) return;
    grainSeed = (grainSeed % 97) + 1;
    nodes.forEach((node) => node.setAttribute("seed", grainSeed));
  }

  function initSite() {
    updateLiveDates();
    initNewsletterPreview();
    scheduleHeaderTheme();
  }

  window.addEventListener("scroll", scheduleHeaderTheme, { passive: true });
  window.addEventListener("resize", scheduleHeaderTheme);
  document.addEventListener("section:load", initSite);
  setInterval(animateStandaloneGrain, 1000 / GRAIN_FPS);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSite, { once: true });
  } else {
    initSite();
  }
})();
