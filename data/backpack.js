// Top-down illustration of the camera bag. Each piece of kit is a <g class="it" data-k="N">
// whose N matches `bag` in data/gear.js; `.hl` marks the outline that lights up on hover.
window.BACKPACK_SVG = `
<svg viewBox="0 0 640 700" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="bag-t">
  <title id="bag-t">Top-down view of the camera backpack and its contents</title>
  <defs>
    <pattern id="ribs" width="5" height="10" patternUnits="userSpaceOnUse"><rect width="5" height="10" fill="#2a2b2e"/><rect width="2" height="10" fill="#1d1e20"/></pattern>
  </defs>

  <!-- 7 · Shimoda Action X40 v2: the bag itself (straps, body, lid, cover, interior) -->
  <g class="it bag" data-k="7">
  <!-- straps & handle (behind the body) -->
  <g fill="none" stroke-linecap="round">
    <path d="M420 90 C428 34 486 34 492 92" stroke="#222426" stroke-width="28"/>
    <path d="M420 90 C428 34 486 34 492 92" stroke="#34373a" stroke-width="1.5" stroke-dasharray="3 4"/>
    <path d="M318 92 C312 46 386 44 384 92" stroke="#222426" stroke-width="12"/>
  </g>

  <!-- bag body -->
  <rect class="hl" x="190" y="80" width="320" height="560" rx="30" fill="#2a2c2e" stroke="#151617" stroke-width="2"/>
  <rect x="198" y="88" width="304" height="544" rx="25" fill="none" stroke="#3a3d40" stroke-width="1.2" stroke-dasharray="2 4"/>

  <!-- open lid, folded out to the left -->
  <rect x="176" y="270" width="28" height="350" fill="#232527"/>
  <rect class="hl" x="20" y="266" width="164" height="358" rx="18" fill="#303235" stroke="#151617" stroke-width="2"/>
  <rect x="31" y="277" width="142" height="48" rx="9" fill="#9fd0cd"/>
  <rect x="31" y="325" width="142" height="288" rx="9" fill="#2b2d30"/>
  <rect x="82" y="352" width="40" height="9" rx="1.5" fill="#44474a"/>
  <path d="M31 330 Q100 340 173 330" stroke="#3c3f42" fill="none"/>

  <!-- rolled-back inner cover -->
  <path d="M212 278 L228 120 Q330 92 432 128 L484 278 Z" fill="#a9d8d5" stroke="#6aa3a0" stroke-width="2"/>
  <path d="M250 260 Q300 190 280 130 M330 270 Q352 200 340 112 M400 268 Q402 210 440 150" stroke="#7fb6b3" stroke-width="1.6" fill="none"/>

  <!-- interior + dividers -->
  <rect x="208" y="278" width="284" height="344" rx="12" fill="#7fb6b3" stroke="#1d1f20" stroke-width="3"/>
  <g fill="#b8e0dd" stroke="#6aa3a0" stroke-width="1.2">
    <rect x="312" y="282" width="9" height="336" rx="2"/>
    <rect x="321" y="376" width="167" height="9" rx="2"/>
    <rect x="321" y="494" width="167" height="9" rx="2"/>
    <rect x="404" y="282" width="9" height="94" rx="2"/>
    <rect x="450" y="385" width="9" height="109" rx="2"/>
  </g>

  </g>

  <!-- cloth (unnumbered) -->
  <path d="M420 300 Q440 286 460 300 Q482 292 484 314 Q490 344 474 360 Q452 372 432 364 Q416 352 420 330 Z" fill="#8e908c"/>
  <path d="M428 312 Q448 326 472 314 M426 340 Q450 332 478 346" stroke="#6f716d" fill="none" stroke-width="1.5"/>

  <!-- batteries (unnumbered) -->
  <rect x="463" y="396" width="21" height="40" rx="3" fill="#2b2c2e" stroke="#46484b"/>
  <rect x="463" y="444" width="21" height="40" rx="3" fill="#2b2c2e" stroke="#46484b"/>

  <!-- 1 · Sigma 150–600, filling the long slot -->
  <g class="it" data-k="1">
    <rect class="hl" x="219" y="288" width="86" height="326" rx="10" fill="#1b1c1d" stroke="#0e0f10" stroke-width="2"/>
    <rect x="223" y="292" width="78" height="62" rx="7" fill="#151617"/>
    <rect x="223" y="348" width="78" height="6" fill="#2a2c2e"/>
    <rect x="219" y="378" width="86" height="44" fill="url(#ribs)"/>
    <rect x="219" y="432" width="86" height="16" fill="#2c2d30"/>
    <rect x="219" y="470" width="86" height="12" fill="url(#ribs)"/>
    <rect x="293" y="492" width="22" height="34" rx="3" fill="#4a4d50"/><circle cx="304" cy="509" r="3" fill="#2a2c2e"/>
    <rect x="226" y="540" width="72" height="58" rx="5" fill="#202123"/>
    <rect x="234" y="598" width="56" height="12" rx="3" fill="#2c2d30"/>
    <text x="256" y="455" fill="#8a8c8f" font-family="monospace" font-size="10" letter-spacing="1" text-anchor="middle" transform="rotate(-90 256 455)">SIGMA 150-600</text>
  </g>

  <!-- 2 · Sony α7R IV -->
  <g class="it" data-k="2">
    <rect class="hl" x="328" y="302" width="70" height="58" rx="7" fill="#1a1b1c" stroke="#0e0f10" stroke-width="2"/>
    <rect x="350" y="292" width="26" height="14" rx="3" fill="#1a1b1c"/>
    <rect x="328" y="302" width="18" height="58" rx="7" fill="#232427"/>
    <circle cx="388" cy="314" r="5" fill="#2e3033" stroke="#4a4c4f"/><circle cx="388" cy="347" r="4.5" fill="#2e3033" stroke="#4a4c4f"/>
    <text x="367" y="335" fill="#a0a2a4" font-family="monospace" font-size="8" text-anchor="middle">α7R IV</text>
  </g>

  <!-- 3 · Tamron 28–75 G1, standing on its cap -->
  <g class="it" data-k="3">
    <circle class="hl" cx="384" cy="439" r="44" fill="#1a1b1c" stroke="#0e0f10" stroke-width="2"/>
    <circle cx="384" cy="439" r="35" fill="#1f2022" stroke="#3b3d40"/>
    <text x="384" y="437" fill="#d0d0d0" font-family="sans-serif" font-size="10" letter-spacing="1" text-anchor="middle">TAMRON</text>
    <text x="384" y="451" fill="#8f9194" font-family="monospace" font-size="7.5" text-anchor="middle">28-75 F2.8</text>
  </g>

  <!-- 4 · Nikon ZR in a cage -->
  <g class="it" data-k="4">
    <rect class="hl" x="334" y="514" width="142" height="92" rx="6" fill="#1c1d1e" stroke="#0e0f10" stroke-width="2"/>
    <rect x="338" y="518" width="134" height="84" rx="4" fill="none" stroke="#46484b" stroke-width="3"/>
    <g fill="#0f1011">${Array.from({ length: 9 }, (_, i) => `<circle cx="${350 + i * 14}" cy="526" r="2.4"/>`).join("")}</g>
    <circle cx="398" cy="562" r="25" fill="#26272a" stroke="#4a4c4f" stroke-width="1.5"/><circle cx="398" cy="562" r="16" fill="#1b1c1d"/>
    <text x="452" y="594" fill="#c4c6c8" font-family="sans-serif" font-weight="700" font-size="12" text-anchor="middle">ZR</text>
    <text x="452" y="550" fill="#8f9194" font-family="sans-serif" font-size="7" letter-spacing="1" text-anchor="middle">NIKON</text>
  </g>

  <!-- 5 · Tree Root Pro tripod, strapped to the side -->
  <g class="it" data-k="5">
    <rect class="hl" x="524" y="226" width="64" height="420" rx="10" fill="none" stroke="transparent" stroke-width="2"/>
    <rect x="528" y="236" width="16" height="400" rx="7" fill="#1e1f21"/>
    <rect x="547" y="236" width="18" height="406" rx="8" fill="#232426"/>
    <rect x="568" y="236" width="16" height="400" rx="7" fill="#1e1f21"/>
    <g fill="#3a3c3f">${[350, 456, 556].map(y => `<rect x="526" y="${y}" width="60" height="10" rx="3"/>`).join("")}</g>
    <g fill="#111">${[536, 556, 576].map(x => `<rect x="${x - 7}" y="632" width="14" height="10" rx="4"/>`).join("")}</g>
  </g>
  <g fill="#2b2d30" stroke="#151617">
    <rect x="500" y="300" width="98" height="16" rx="3"/><rect x="574" y="296" width="16" height="24" rx="3" fill="#44474a"/>
    <rect x="500" y="520" width="98" height="16" rx="3"/><rect x="574" y="516" width="16" height="24" rx="3" fill="#44474a"/>
  </g>

  <!-- 6 · Leofoto BV-20 fluid head on top of the tripod -->
  <g class="it" data-k="6">
    <path d="M556 196 L604 108" stroke="#1c1d1e" stroke-width="8" stroke-linecap="round"/>
    <path d="M590 132 L604 108" stroke="#3a3c3f" stroke-width="9" stroke-linecap="round"/>
    <circle class="hl" cx="556" cy="198" r="30" fill="#222326" stroke="#0e0f10" stroke-width="2"/>
    <circle cx="556" cy="198" r="19" fill="#2c2e31" stroke="#46484b"/>
    <rect x="530" y="160" width="52" height="14" rx="3" fill="#3a3c3f"/>
    <text x="556" y="201" fill="#a0a2a4" font-family="monospace" font-size="7" text-anchor="middle">BV-20</text>
  </g>

  <!-- number badges -->
  <g class="badges" font-family="monospace" font-size="11" text-anchor="middle">
    ${[[1, 262, 318], [2, 398, 296], [3, 420, 404], [4, 470, 520], [5, 606, 410], [6, 520, 160], [7, 102, 470]].map(([k, x, y]) =>
      `<g class="badge" data-k="${k}"><circle cx="${x}" cy="${y}" r="11"/><text x="${x}" y="${y + 4}">${k}</text></g>`).join("")}
  </g>
</svg>`;
