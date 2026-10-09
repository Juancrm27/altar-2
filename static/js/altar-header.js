// Header Altar · tablet and mobile menu (Figma "Header / Site", Menu=Open).
// The panel unfolds inside the header; Menu turns into Close. Search and Cart inside it keep Ipanema's
// own modals (js-modal-open-private), so the panel just closes itself before they open.
(function () {
  if (window.__altarHeaderInitialized) return;
  window.__altarHeaderInitialized = true;

  var DESKTOP = window.matchMedia("(min-width: 1024px)");

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

  DESKTOP.addEventListener("change", function (query) {
    if (query.matches) closeAll();
  });
})();
