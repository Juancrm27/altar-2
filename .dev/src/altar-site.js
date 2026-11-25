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

  // Product page (Sofi, ref. Paloma Wool): «cambios» / «pago seguro» are rows that open on click.
  const DISCLOSURE_TITLE = ".section-main-product .product-purchase-info div.icon-text-item .icon-text-item-title";

  function initProductDisclosures() {
    document.querySelectorAll(DISCLOSURE_TITLE).forEach((title) => {
      if (title.hasAttribute("role")) return;
      title.setAttribute("role", "button");
      title.setAttribute("tabindex", "0");
      title.setAttribute("aria-expanded", "false");
    });
  }

  function toggleProductDisclosure(event) {
    const title = event.target.closest?.(DISCLOSURE_TITLE);
    if (!title) return;
    if (event.type === "keydown" && event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    const item = title.closest(".icon-text-item");
    const open = !item.classList.contains("is-open");
    item.classList.toggle("is-open", open);
    title.setAttribute("aria-expanded", String(open));
  }

  // Out of stock → «avisarme cuando vuelva»: open the email field, send it as a contact message (product + variant).
  const isEnglish = () => document.documentElement.getAttribute("data-altar-home-layout") === "b";

  function selectedVariantText(root) {
    return Array.from(root.querySelectorAll(".product-detail-variants-group")).map((group) => {
      const axis = (group.querySelector(".form-label")?.firstChild?.textContent || "").replace(":", "").trim();
      const value = (group.querySelector(".js-insta-variation-label")?.textContent || group.querySelector(".btn-variant.selected")?.textContent || "").trim();
      return axis && value ? `${axis}: ${value}` : value;
    }).filter(Boolean).join(", ");
  }

  function toggleStockNotify(event) {
    const toggle = event.target.closest?.(".altar-stock-notify__toggle");
    if (!toggle) return;
    const box = toggle.closest("[data-altar-stock-notify]");
    const form = box.querySelector(".altar-stock-notify__form");
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    form.hidden = !open;
    const email = form.querySelector(".altar-stock-notify__email");
    email.placeholder = isEnglish() ? "your email" : "tu mail";
    if (open) email.focus();
  }

  function submitStockNotify(event) {
    const form = event.target.closest?.(".altar-stock-notify__form");
    if (!form) return;
    event.preventDefault();
    const box = form.closest("[data-altar-stock-notify]");
    const product = document.querySelector(".js-product-name")?.textContent.trim() || "";
    const variant = selectedVariantText(document.querySelector(".js-product-form") || document);
    form.querySelector("[data-altar-stock-message]").value =
      `Avisarme cuando vuelva: ${product}${variant ? ` (${variant})` : ""} — ${location.href}`;
    const done = () => {
      form.hidden = true;
      box.querySelector(".altar-stock-notify__toggle").hidden = true;
      box.querySelector(".altar-stock-notify__done").hidden = false;
    };
    if (box.hasAttribute("data-preview")) { done(); return; } // dev preview: no store behind it
    const send = form.querySelector(".altar-stock-notify__send");
    send.disabled = true;
    fetch(form.action, { method: "POST", body: new FormData(form), credentials: "same-origin" })
      .then((response) => { if (!response.ok) throw new Error(response.status); done(); })
      .catch(() => { send.disabled = false; form.submit(); }); // fall back to the normal contact-form post
  }

  function initSite() {
    initProductDisclosures();
    updateLiveDates();
    initNewsletterPreview();
    scheduleHeaderTheme();
  }

  window.addEventListener("scroll", scheduleHeaderTheme, { passive: true });
  window.addEventListener("resize", scheduleHeaderTheme);
  document.addEventListener("section:load", initSite);
  document.addEventListener("click", toggleProductDisclosure);
  document.addEventListener("click", toggleStockNotify);
  document.addEventListener("submit", submitStockNotify);
  document.addEventListener("keydown", toggleProductDisclosure);
  window.addEventListener("load", initProductDisclosures);
  setInterval(animateStandaloneGrain, 1000 / GRAIN_FPS);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSite, { once: true });
  } else {
    initSite();
  }
})();
