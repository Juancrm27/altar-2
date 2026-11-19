// Header Altar v3 · Figma "Navigation / Site / Desktop" (768:1698) and "/ Mobile" (773:3948).
// - The switch is the language for the whole visit: off = ES (layout A), on = EN (layout B), kept in
//   sessionStorage("altar-lang") and applied before paint by layouts/layout.tpl. On the home it also swaps A / B.
// - Search opens inline (Estado=Buscar abierto); tablet/mobile MENU unfolds one row (Estado=Menú abierto).
//   While either is open, MENU reads CERRAR / CLOSE and closes it.
(function () {
  if (window.__altarHeaderInitialized) return;
  window.__altarHeaderInitialized = true;
  window.__altarHeaderVersion = "2026-11-17";

  var DESKTOP = window.matchMedia("(min-width: 1024px)");
  var root = document.documentElement;

  function isEnglish() { return root.dataset.altarHomeLayout === "b"; }

  // Switch state, search placeholders and <html lang> follow the language.
  function syncLanguage() {
    var en = isEnglish();
    document.querySelectorAll("[data-altar-layout-toggle]").forEach(function (button) {
      button.setAttribute("aria-checked", String(en));
      button.setAttribute("aria-label", en ? "Español" : "English");
    });
    document.querySelectorAll("[data-placeholder-es]").forEach(function (input) {
      var text = en ? input.dataset.placeholderEn : input.dataset.placeholderEs;
      input.placeholder = text;
      input.setAttribute("aria-label", text);
    });
    if (document.querySelector(".altar-nav--v3")) root.lang = en ? "en" : "es";
  }

  function setSearch(nav, open) {
    var form = nav && nav.querySelector("[data-altar-search-form]");
    if (!form) return;
    if (open) setOpen(nav, false);
    nav.classList.toggle("is-search-open", open);
    form.hidden = !open;
    nav.querySelectorAll("[data-altar-search-open]").forEach(function (button) {
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
    var toggle = nav.querySelector("[data-altar-menu-toggle]");
    if (toggle && !nav.classList.contains("is-menu-open")) toggle.setAttribute("aria-expanded", open ? "true" : "false");
    var input = form.querySelector("input[name='q']");
    if (open && input) input.focus();
    if (!open && input) input.value = "";
    // On the search results page, closing the search goes back to the whole collection (Figma).
    if (!open && form.dataset.altarSearchResults) window.location.href = form.dataset.altarSearchResults;
  }

  function setOpen(nav, open) {
    var toggle = nav.querySelector("[data-altar-menu-toggle]");
    var panel = nav.querySelector("[data-altar-menu-panel]");
    if (!toggle || !panel) return;
    nav.classList.toggle("is-menu-open", open);
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    var label = toggle.querySelector("[data-altar-menu-label]");
    if (label) label.textContent = open ? toggle.dataset.labelClose : toggle.dataset.labelOpen;
  }

  function closeSearches(except) {
    document.querySelectorAll(".altar-nav.is-search-open").forEach(function (nav) { if (nav !== except) setSearch(nav, false); });
  }

  // Home v3: A ⇄ B (colours, copy, sky, 3D lighting) is revealed as one circle growing from the hero film,
  // with a soft edge (View Transitions; the circle itself lives in altar-home-v3.css). Without support, or
  // with reduced motion, the layouts swap at once.
  function revealLayout(swap) {
    var root = document.documentElement;
    if (!root.classList.contains("altar-home-v3") || !document.startViewTransition ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      swap();
      return;
    }
    var source = document.getElementById("altar-hero-campaign");
    var bounds = source && source.getBoundingClientRect();
    // From the film's centre while it is on screen; otherwise from the middle of the viewport.
    var onScreen = bounds && bounds.bottom > 0 && bounds.top < window.innerHeight;
    var x = onScreen ? bounds.left + bounds.width / 2 : window.innerWidth / 2;
    var y = onScreen ? bounds.top + bounds.height / 2 : window.innerHeight / 2;
    var reach = Math.max(Math.hypot(x, y), Math.hypot(window.innerWidth - x, y),
      Math.hypot(x, window.innerHeight - y), Math.hypot(window.innerWidth - x, window.innerHeight - y));
    root.style.setProperty("--altar-wave-x", x + "px");
    root.style.setProperty("--altar-wave-y", y + "px");
    // Past the farthest corner by the width of the soft edge, so the old layout is fully gone at the end.
    root.style.setProperty("--altar-wave-end", Math.ceil(reach + 160) + "px");
    root.classList.add("is-layout-revealing");
    var transition = document.startViewTransition(swap);
    transition.finished.finally(function () { root.classList.remove("is-layout-revealing"); });
  }

  function closeAll() {
    document.querySelectorAll(".altar-nav.is-menu-open").forEach(function (nav) { setOpen(nav, false); });
    closeSearches();
  }

  document.addEventListener("click", function (event) {
    var layout = event.target.closest("[data-altar-layout-toggle]");
    if (layout) {
      var alternate = layout.getAttribute("aria-checked") !== "true";
      var swap = function () {
        root.dataset.altarHomeLayout = alternate ? "b" : "a";
        try { sessionStorage.setItem("altar-lang", alternate ? "en" : "es"); } catch (error) {}
        syncLanguage();
        document.dispatchEvent(new CustomEvent("altar:home-layout", { detail: { layout: alternate ? "b" : "a" } }));
      };
      revealLayout(swap);
      return;
    }
    var spotify = event.target.closest("[data-altar-spotify-toggle]");
    if (spotify) {
      // PLAY opens Altar's Spotify playlist (set in the header section) in a new tab, on every page.
      var player = document.querySelector(".altar-solar__open-player");
      var url = spotify.dataset.spotifyUrl || (player && (player.dataset.currentSpotifyUrl || player.dataset.spotifyUrl));
      if (url) window.open(url, "_blank", "noopener");
      return;
    }
    // Footer "Cartas / Newsletter": the form is always open, so the link just takes you to the email field.
    var newsletter = event.target.closest("[data-altar-newsletter-focus]");
    if (newsletter) {
      var field = document.getElementById("altar-newsletter-email");
      if (field) { event.preventDefault(); field.focus({ preventScroll: true }); field.scrollIntoView({ block: "center", behavior: "smooth" }); }
      return;
    }
    var searchOpen = event.target.closest("[data-altar-search-open]");
    if (searchOpen) {
      setSearch(searchOpen.closest(".altar-nav"), true);
      return;
    }
    var toggle = event.target.closest("[data-altar-menu-toggle]");
    if (toggle) {
      var nav = toggle.closest(".altar-nav");
      if (nav.classList.contains("is-search-open")) setSearch(nav, false);
      else setOpen(nav, !nav.classList.contains("is-menu-open"));
      return;
    }
    if (event.target.closest("[data-altar-menu-panel] a, [data-altar-menu-panel] button")) {
      document.querySelectorAll(".altar-nav.is-menu-open").forEach(function (open) { setOpen(open, false); });
      return;
    }
    // A click outside an open, empty search field closes it.
    document.querySelectorAll(".altar-nav.is-search-open").forEach(function (open) {
      var input = open.querySelector("[data-altar-search-form] input[name='q']");
      if (!open.querySelector("[data-altar-search-form]").contains(event.target) && input && !input.value.trim()) setSearch(open, false);
    });
  });

  // An empty search does nothing.
  document.addEventListener("submit", function (event) {
    var form = event.target.closest && event.target.closest("[data-altar-search-form]");
    var input = form && form.querySelector("input[name='q']");
    if (input && !input.value.trim()) { event.preventDefault(); input.focus(); }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeAll();
  });

  syncLanguage();
  document.addEventListener("section:load", syncLanguage);

  // Newsletter: Tiendanube answers the subscription with a fresh page at the top; bring the footer's reply
  // (Gracias… · Enviado, or the error line) into view so the visitor sees it.
  var newsletterReply = document.querySelector(".altar-footer__newsletter.is-sent, .altar-footer__newsletter .altar-footer__status");
  if (newsletterReply) window.addEventListener("load", function () { newsletterReply.scrollIntoView({ block: "center" }); });

  // Share the hero's actual media with its continuation, including editor updates.
  function syncHeroMedia() {
    var image = document.querySelector(".altar-hero-v2__media--expanded");
    if (!image) return;
    var update = function () {
      var url = image.currentSrc || image.src;
      if (url) document.documentElement.style.setProperty("--altar-hero-expanded-image", "url(" + JSON.stringify(url) + ")");
    };
    update();
    if (!image.dataset.continuationObserved) {
      image.dataset.continuationObserved = "true";
      image.addEventListener("load", update);
      new MutationObserver(update).observe(image, { attributes: true, attributeFilter: ["src", "srcset"] });
    }
  }
  syncHeroMedia();
  document.addEventListener("section:load", syncHeroMedia);

  DESKTOP.addEventListener("change", function (query) {
    if (query.matches) closeAll();
  });
})();
