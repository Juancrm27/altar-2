{#
  Altar film grain: the same animated SVG noise as the home sections 3·4 (.altar-section-grain).
  Params: grain_id (unique per page), grain_class (extra classes for placement).
  solar-experience.js re-seeds every [data-grain-turbulence] so the grain moves; on the home the
  lighting panel also drives its opacity (--section-grain-opacity), detail and refresh rate.
#}
<svg class="altar-solar__grain altar-section-grain {{ grain_class }}" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
  <filter id="altar-grain-{{ grain_id }}" x="0" y="0" width="100%" height="100%">
    <feTurbulence data-grain-turbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="1" stitchTiles="stitch"></feTurbulence>
    <feColorMatrix type="saturate" values="0"></feColorMatrix>
  </filter>
  <rect width="100%" height="100%" filter="url(#altar-grain-{{ grain_id }})"></rect>
</svg>
