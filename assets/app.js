/* Un train peut en cacher un autre : maquette
   - fabrique les trains (wagons, passagers absurdes, locomotive aux yeux qui suivent la souris)
   - déchire les papiers
   - soulève le train de devant pour révéler celui de derrière */
(() => {
  "use strict";
  const INK = "#15103c";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- passagers (60x60) ---------- */
  const S = `stroke="${INK}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;
  const PAX = {
    eye: `<svg viewBox="0 0 60 60" ${S}><ellipse cx="30" cy="33" rx="25" ry="15" fill="#fff"/><circle cx="30" cy="33" r="10.5" fill="#2338ff"/><circle cx="30" cy="33" r="4.5" fill="${INK}"/><circle cx="26" cy="29" r="2" fill="#fff" stroke="none"/><path d="M11 21l-4-6M21 17l-2-7M30 15V7M39 17l2-7M49 21l4-6" fill="none"/></svg>`,
    moustache: `<svg viewBox="0 0 60 60" ${S}><path d="M30 28C24 19 10 21 5 32c7-3 11 1 15 5 6 4 10-2 10-6 0 4 4 10 10 6 4-4 8-8 15-5C50 21 36 19 30 28z" fill="${INK}"/></svg>`,
    fish: `<svg viewBox="0 0 60 60" ${S}><path d="M44 30l13-13v26z" fill="#ff4b2b"/><ellipse cx="26" cy="30" rx="21" ry="14" fill="#ff9bd0"/><path d="M24 17c4-6 10-6 12-2M26 43c3 5 8 5 11 2" fill="none"/><circle cx="14" cy="26" r="4.5" fill="#fff"/><circle cx="13" cy="26" r="1.8" fill="${INK}" stroke="none"/><path d="M7 34q3 3 7 1" fill="none"/></svg>`,
    cow: `<svg viewBox="0 0 60 60" ${S}><path d="M16 17Q12 8 7 9M44 17q4-9 9-8" fill="none"/><ellipse cx="9" cy="24" rx="7" ry="4" fill="#fff" transform="rotate(-20 9 24)"/><ellipse cx="51" cy="24" rx="7" ry="4" fill="#fff" transform="rotate(20 51 24)"/><rect x="14" y="14" width="32" height="40" rx="14" fill="#fff"/><path d="M14 26c0-8 6-12 12-11-3 5-1 10-6 12z" fill="${INK}"/><ellipse cx="30" cy="44" rx="13" ry="8" fill="#ff9bd0"/><circle cx="25" cy="44" r="1.8" fill="${INK}" stroke="none"/><circle cx="35" cy="44" r="1.8" fill="${INK}" stroke="none"/><circle cx="23" cy="31" r="3" fill="${INK}" stroke="none"/><circle cx="38" cy="31" r="3" fill="${INK}" stroke="none"/></svg>`,
    egg: `<svg viewBox="0 0 60 60" ${S}><path d="M30 9C45 6 55 21 51 36 48 49 36 55 26 52 13 49 6 37 12 25c4-10 10-15 18-16z" fill="#fff"/><circle cx="30" cy="32" r="11" fill="#ffb400"/><path d="M25 28q2-3 5-3" fill="none" stroke="#fff"/></svg>`,
    ghost: `<svg viewBox="0 0 60 60" ${S}><path d="M12 53V28C12 16 20 8 30 8s18 8 18 20v25l-6-6-6 6-6-6-6 6-6-6z" fill="#fff"/><circle cx="24" cy="28" r="3.5" fill="${INK}" stroke="none"/><circle cx="36" cy="28" r="3.5" fill="${INK}" stroke="none"/><ellipse cx="30" cy="39" rx="4" ry="5" fill="${INK}"/></svg>`,
    melon: `<svg viewBox="0 0 60 60" ${S}><path d="M13 38C13 16 47 16 47 38z" fill="${INK}"/><path d="M13 33h34" stroke="#ff4b2b" stroke-width="5"/><ellipse cx="30" cy="39" rx="26" ry="5.5" fill="${INK}"/><circle cx="23" cy="51" r="2.2" fill="${INK}" stroke="none"/><circle cx="37" cy="51" r="2.2" fill="${INK}" stroke="none"/></svg>`,
  };
  window.UTPECUA_PAX = PAX;
  const COLORS = { tomato: "#ff4b2b", mustard: "#ffc61a", mint: "#6fe3b0", pink: "#ff9bd0", lilac: "#b9a6ff", bone: "#fff6e2" };

  /* ---------- wagon & loco ---------- */
  const wagon = (color, pax, label) => `
    <div class="wagon" style="--c:${COLORS[color] || color}">
      <div class="wagon__body">
        <span class="wagon__win">${PAX[pax[0]]}</span><span class="wagon__win">${PAX[pax[1]]}</span>
        <b class="wagon__label">${label}</b>
      </div>
      <i class="wheel"></i><i class="wheel"></i>
    </div>`;

  const loco = (color) => `
    <div class="loco" style="--c:${COLORS[color]}">
      <svg viewBox="0 0 300 176" ${S}>
        <rect x="204" y="18" width="30" height="46" fill="${INK}"/><path d="M196 12h46l-6 14h-34z" fill="${INK}"/>
        <rect x="110" y="56" width="184" height="74" rx="32" fill="${COLORS[color]}"/>
        <rect x="14" y="26" width="112" height="108" rx="10" fill="${COLORS[color]}"/>
        <rect x="4" y="16" width="132" height="16" rx="8" fill="${INK}"/>
        <rect x="34" y="48" width="60" height="42" rx="8" fill="#bfe6ff"/>
        <circle cx="168" cy="56" r="14" fill="#ffc61a"/>
        <path d="M292 130l14 14h-24z" fill="${INK}"/>
        <g class="eyes">
          <circle class="eye" cx="210" cy="90" r="19" fill="#fff"/><circle class="pupil" cx="210" cy="90" r="8" fill="${INK}" stroke="none"/>
          <circle class="eye" cx="257" cy="90" r="19" fill="#fff"/><circle class="pupil" cx="257" cy="90" r="8" fill="${INK}" stroke="none"/>
        </g>
        <path d="M222 118q11 7 24 0" fill="none"/>
        <g class="spin"><circle cx="72" cy="146" r="27" fill="#fff6e2"/><path d="M72 119v54M45 146h54M52 126l40 40M92 126l-40 40" stroke-width="3" fill="none"/><circle cx="72" cy="146" r="5" fill="${INK}"/></g>
        <g class="spin"><circle cx="176" cy="152" r="19" fill="#fff6e2"/><path d="M176 133v38M157 152h38" fill="none"/><circle cx="176" cy="152" r="4" fill="${INK}"/></g>
        <g class="spin"><circle cx="238" cy="152" r="19" fill="#fff6e2"/><path d="M238 133v38M219 152h38" fill="none"/><circle cx="238" cy="152" r="4" fill="${INK}"/></g>
      </svg>
      <span class="puff"></span><span class="puff"></span><span class="puff"></span>
    </div>`;

  document.querySelectorAll("[data-train]").forEach((el) => {
    const cfg = JSON.parse(el.dataset.train);
    el.innerHTML = cfg.wagons.map((w) => wagon(w[0], [w[1], w[2]], w[3])).join("") + loco(cfg.loco);
  });

  document.querySelectorAll("[data-pax]").forEach((el) => { el.innerHTML = PAX[el.dataset.pax]; });

  /* petit train qui roule sur la page Historique */
  document.querySelectorAll("[data-rider]").forEach((el) => {
    el.innerHTML = `<svg viewBox="0 0 64 100" ${S} style="transform:rotate(0deg)"><rect x="12" y="4" width="40" height="20" rx="6" fill="#ffc61a"/><rect x="12" y="28" width="40" height="40" rx="14" fill="#ff4b2b"/><circle cx="24" cy="46" r="7" fill="#fff"/><circle cx="40" cy="46" r="7" fill="#fff"/><circle cx="25" cy="47" r="3" fill="${INK}" stroke="none"/><circle cx="41" cy="47" r="3" fill="${INK}" stroke="none"/><rect x="26" y="70" width="12" height="24" fill="${INK}"/><path d="M20 76h24" fill="none"/></svg>`;
  });

  /* ---------- papier déchiré ---------- */
  const rng = (seed) => () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  const px = (n) => `${n.toFixed(1)}px`;
  function tornPolygon(seed, amp = 5) {
    const r = rng(seed), pts = [], n = 18, m = 9;
    for (let i = 0; i <= n; i++) pts.push(`${(i / n) * 100}% ${px(r() * amp)}`);
    for (let j = 1; j < m; j++) pts.push(`calc(100% - ${px(r() * amp * 0.8)}) ${(j / m) * 100}%`);
    for (let i = n; i >= 0; i--) pts.push(`${(i / n) * 100}% calc(100% - ${px(r() * amp)})`);
    for (let j = m - 1; j > 0; j--) pts.push(`${px(r() * amp * 0.8)} ${(j / m) * 100}%`);
    return `polygon(${pts.join(",")})`;
  }
  function tornStrip(seed) {
    const r = rng(seed), pts = [], n = 46;
    for (let i = 0; i <= n; i++) pts.push(`${(i / n) * 100}% ${px(2 + r() * 26)}`);
    pts.push("100% 100%", "0 100%");
    return `polygon(${pts.join(",")})`;
  }
  document.querySelectorAll(".scrap, .lift").forEach((el, i) => el.style.setProperty("--torn", tornPolygon(i * 977 + 13, el.classList.contains("scrap--tight") ? 3 : 6)));
  document.querySelectorAll(".torn-top").forEach((el, i) => el.style.setProperty("--torn-strip", tornStrip(i * 31 + 7)));

  /* ---------- yeux googly ---------- */
  const eyes = [...document.querySelectorAll(".eyes")];
  let mx = innerWidth * 0.5, my = innerHeight * 0.4, ticking = false;
  function look() {
    ticking = false;
    eyes.forEach((g) => {
      g.querySelectorAll(".eye").forEach((e, k) => {
        const p = g.querySelectorAll(".pupil")[k], b = e.getBoundingClientRect();
        const cx = b.left + b.width / 2, cy = b.top + b.height / 2;
        const a = Math.atan2(my - cy, mx - cx), d = Math.min(1, Math.hypot(mx - cx, my - cy) / 220) * 8;
        p.setAttribute("cx", 210 + (k ? 47 : 0) + Math.cos(a) * d);
        p.setAttribute("cy", 90 + Math.sin(a) * d);
      });
    });
  }
  if (!reduce && eyes.length) {
    addEventListener("pointermove", (ev) => { mx = ev.clientX; my = ev.clientY; if (!ticking) { ticking = true; requestAnimationFrame(look); } }, { passive: true });
  }

  /* ---------- soulever le train ---------- */
  const rails = document.querySelector(".rails"), lift = document.querySelector(".lift");
  if (rails) {
    const roll = (ms) => { rails.classList.add("rolling"); clearTimeout(roll.t); roll.t = setTimeout(() => rails.classList.remove("rolling"), ms); };
    if (!reduce) roll(2000);
    if (lift) {
      const label = lift.querySelector("[data-label]"), hint = lift.querySelector("[data-hint]");
      lift.addEventListener("click", () => {
        const on = rails.dataset.lifted !== "true";
        rails.dataset.lifted = String(on);
        lift.setAttribute("aria-pressed", String(on));
        label.textContent = on ? "Remettre le train" : "Soulever le train";
        hint.textContent = on ? "Il en cachait bien un autre, non ?" : "Allez, regardez dessous.";
        if (!reduce) roll(1300);
      });
    }
  }

  /* ---------- menu mobile ---------- */
  const toggle = document.querySelector(".menu-toggle"), navWrap = document.querySelector(".nav-wrap");
  if (toggle && navWrap) {
    toggle.addEventListener("click", () => {
      const open = navWrap.dataset.open !== "true";
      navWrap.dataset.open = String(open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector("[data-label]").textContent = open ? "Refermer" : "Tous les wagons";
    });
  }

  /* ---------- recherche d'artistes ---------- */
  const finder = document.querySelector("#cherche-artiste");
  if (finder) {
    const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
    const items = [...document.querySelectorAll("[data-name]")], out = document.querySelector("#cherche-resultat"), empty = document.querySelector(".empty-state");
    finder.addEventListener("input", () => {
      const q = norm(finder.value.trim());
      let n = 0;
      items.forEach((li) => { const hit = !q || norm(li.dataset.name).includes(q); li.hidden = !hit; if (hit) n++; });
      out.textContent = q ? `${n} voyageur${n > 1 ? "s" : ""} trouvé${n > 1 ? "s" : ""}` : "";
      empty.dataset.show = String(q && n === 0);
    });
  }

  /* ---------- un train passe entre deux pages (il cache le changement) ---------- */
  const passage = document.createElement("div");
  passage.className = "passage"; passage.setAttribute("aria-hidden", "true");
  passage.innerHTML = `<div class="track rolling">${[["tomato","eye","fish",""],["mustard","cow","moustache",""],["mint","egg","melon",""],["pink","ghost","eye",""]].map((w) => wagon(w[0], [w[1], w[2]], w[3])).join("")}${loco("lilac")}</div>`;
  document.body.appendChild(passage);
  const store = (fn) => { try { return fn(); } catch (e) { return null; } };
  if (document.documentElement.classList.contains("arriving")) {
    store(() => sessionStorage.removeItem("utpecua-pass"));
    passage.classList.add("is-out");
    document.documentElement.classList.remove("arriving");
    passage.addEventListener("animationend", () => passage.classList.remove("is-out"), { once: true });
  }
  addEventListener("pageshow", (e) => { if (e.persisted) passage.classList.remove("is-in"); });
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a || reduce || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const href = a.getAttribute("href");
    if (a.target === "_blank" || /^(#|mailto:|tel:|https?:)/.test(href)) return;
    e.preventDefault();
    store(() => sessionStorage.setItem("utpecua-pass", "1"));
    passage.classList.add("is-in");
    setTimeout(() => { location.href = a.href; }, 440);
  });

  /* ---------- formulaire démo ---------- */
  const form = document.querySelector("[data-demo-form]");
  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      let ok = true;
      form.querySelectorAll("input[required]").forEach((inp) => {
        const err = inp.parentElement.querySelector(".err");
        const bad = !inp.value.trim() || (inp.type === "email" && !/^\S+@\S+\.\S+$/.test(inp.value));
        inp.setAttribute("aria-invalid", String(bad));
        err.textContent = bad ? (inp.type === "email" ? "Cette adresse ne ressemble à aucun quai connu." : "Un billet sans nom ne passe pas le portillon.") : "";
        if (bad) ok = false;
      });
      const sent = form.querySelector(".sent");
      sent.dataset.show = String(ok);
      if (ok) sent.focus();
    });
  }
})();
