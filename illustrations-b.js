/* Refined editorial line illustrations for Growth Authority — Version B.
   Monoline only: thin strokes, no flat fills, no faces, no sparkles.
   stroke="currentColor" = primary (set per slot); class "acc" = terracotta accent. */
(function () {
  const open = `<svg viewBox="0 0 440 360" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">`;
  const openS = `<svg viewBox="0 0 420 330" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">`;

  // ---- HERO : the dish, with the business rising from it -------------------
  const hero = [
    /* v1 — plated dish + rising sales line (ties to "you do the art, we handle the business") */
    `${open}<g role="img" aria-label="A plated dish with sales rising from it">
      <ellipse cx="150" cy="266" rx="116" ry="41"/>
      <ellipse cx="150" cy="262" rx="84" ry="28"/>
      <path d="M110 258 q40 -32 80 0"/>
      <path d="M132 252 q18 -13 36 0" class="acc"/>
      <path d="M44 304 V230"/>
      <path d="M32 202 V228 M44 200 V228 M56 202 V228"/>
      <path d="M30 228 q14 11 28 0"/>
      <path d="M262 304 V212 q16 -2 16 -26 q0 -16 -16 -14 Z"/>
      <path d="M198 250 C252 236 250 154 314 134 C358 122 376 104 402 78" class="acc"/>
      <path d="M374 74 L406 72 L399 103" class="acc"/>
      <circle cx="252" cy="190" r="4.4" class="dot"/>
      <circle cx="314" cy="134" r="4.4" class="dot"/>
    </g></svg>`,

    /* v2 — serving cloche with steam (the craft, kept warm) */
    `${open}<g role="img" aria-label="A serving cloche with steam rising">
      <ellipse cx="220" cy="286" rx="150" ry="32"/>
      <ellipse cx="220" cy="283" rx="118" ry="22"/>
      <path d="M122 283 A100 132 0 0 1 318 283"/>
      <path d="M154 283 A68 94 0 0 1 286 283" class="acc"/>
      <path d="M220 151 V134"/>
      <circle cx="220" cy="125" r="9" class="acc"/>
      <path d="M198 112 q-12 -16 0 -31 q12 -14 0 -30" class="acc"/>
      <path d="M242 112 q12 -16 0 -31 q-12 -14 0 -30" class="acc"/>
    </g></svg>`,
  ];

  // ---- STATEMENT : the restaurant you built and love ----------------------
  const statement = [
    /* v1 — bistro storefront with striped awning */
    `${openS}<g role="img" aria-label="A small bistro storefront with an awning">
      <path d="M44 296 H376"/>
      <path d="M80 296 V150 M340 296 V150"/>
      <path d="M66 150 H354"/>
      <path d="M150 132 V110 H270 V132"/>
      <path d="M66 150 L80 188 L104 150 L128 188 L152 150 L176 188 L200 150 L224 188 L248 150 L272 188 L296 150 L320 188 L344 150" class="acc"/>
      <path d="M186 296 V208 H234 V296"/>
      <path d="M210 296 V208"/>
      <circle cx="202" cy="254" r="2.6" class="dot"/>
      <circle cx="218" cy="254" r="2.6" class="dot"/>
      <path d="M100 252 V200 H160 V252 Z"/>
      <path d="M130 200 V252 M100 226 H160"/>
      <path d="M260 252 V200 H320 V252 Z"/>
      <path d="M290 200 V252 M260 226 H320"/>
    </g></svg>`,

    /* v2 — chef's toque flanked by a place setting */
    `${openS}<g role="img" aria-label="A chef's toque with a fork and knife place setting">
      <path d="M150 206 C150 140 176 140 189 168 C199 122 223 122 233 168 C246 140 272 140 272 206"/>
      <path d="M150 206 H272 V240 H150 Z"/>
      <path d="M180 206 V240 M211 206 V240 M242 206 V240" class="acc"/>
      <path d="M96 150 V180 M108 148 V180 M120 150 V180"/>
      <path d="M96 180 q12 12 24 0"/>
      <path d="M108 180 V288"/>
      <path d="M312 150 q15 6 15 32 q0 16 -15 16 Z"/>
      <path d="M310 198 V288" class="acc"/>
    </g></svg>`,
  ];

  window.ILLOS_B = { hero, statement };
})();
