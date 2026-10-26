// Header Altar · tablet and mobile menu (Figma "Header / Site", Menu=Open).
// The panel unfolds inside the header; Menu turns into Close. Search and Cart inside it keep Ipanema's
// own modals (js-modal-open-private), so the panel just closes itself before they open.
(function () {
  if (window.__altarHeaderInitialized) return;
  window.__altarHeaderInitialized = true;
  window.__altarHeaderVersion = "2026-10-14";

  var DESKTOP = window.matchMedia("(min-width: 1200px)");

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

  function closeAll() {
    document.querySelectorAll(".altar-nav.is-menu-open").forEach(function (nav) { setOpen(nav, false); });
  }

  document.addEventListener("click", function (event) {
    var layout = event.target.closest("[data-altar-layout-toggle]");
    if (layout) {
      var alternate = layout.getAttribute("aria-checked") !== "true";
      layout.setAttribute("aria-checked", String(alternate));
      layout.setAttribute("aria-label", alternate ? "Usar layout inicial" : "Usar layout alternativo");
      document.documentElement.dataset.altarHomeLayout = alternate ? "b" : "a";
      document.dispatchEvent(new CustomEvent("altar:home-layout", { detail: { layout: alternate ? "b" : "a" } }));
      return;
    }
    var spotify = event.target.closest("[data-altar-spotify-toggle]");
    if (spotify) {
      var original = document.querySelector(".altar-solar__open-player");
      if (original) original.click();
      return;
    }
    var toggle = event.target.closest("[data-altar-menu-toggle]");
    if (toggle) {
      var nav = toggle.closest(".altar-nav");
      setOpen(nav, !nav.classList.contains("is-menu-open"));
      return;
    }
    if (event.target.closest("[data-altar-menu-panel] a, [data-altar-menu-panel] button")) closeAll();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeAll();
  });

  function syncSpotify() {
    var player = document.getElementById("altar-player");
    if (!player || player.dataset.headerObserved) return;
    player.dataset.headerObserved = "true";
    var sync = function () {
      document.querySelectorAll("[data-altar-spotify-toggle]").forEach(function (button) {
        button.setAttribute("aria-expanded", String(player.classList.contains("is-open")));
      });
    };
    new MutationObserver(sync).observe(player, { attributes: true, attributeFilter: ["class"] });
    sync();
  }
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
  syncSpotify();
  document.addEventListener("section:load", syncSpotify);

  DESKTOP.addEventListener("change", function (query) {
    if (query.matches) closeAll();
  });
})();
