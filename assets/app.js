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
  const ART = {
    toile: `<svg viewBox="0 0 140 80" ${S}><rect x="0" y="0" width="140" height="80" fill="#fff6e2" stroke="none"/><circle cx="38" cy="42" r="23" fill="#ff4b2b"/><rect x="66" y="10" width="50" height="34" fill="#2338ff" transform="rotate(-8 91 27)"/><path d="M94 70 116 48 128 72z" fill="#ffc61a"/><path d="M8 66c14-16 26 8 40-6s22 6 34-4 16 10 26 0" fill="none" stroke-width="4"/><circle cx="104" cy="22" r="4" fill="${INK}" stroke="none"/></svg>`,
    sculpt: `<svg viewBox="0 0 120 108" ${S}><path d="M60 4c-3 6 0 10 3 12M63 16c8-6 16-4 20 2-8 3-15 2-20-2z" fill="#6fe3b0"/><path d="M60 18c-10 0-16 10-16 22 0 8-16 16-16 34 0 16 14 24 32 24s32-8 32-24c0-18-16-26-16-34 0-12-6-22-16-22z" fill="#b9a6ff"/><ellipse cx="60" cy="58" rx="12" ry="9" fill="#fff"/><circle cx="62" cy="59" r="5" fill="${INK}" stroke="none"/><path d="M47 47q13-7 26 0" fill="none"/><path d="M44 82q16 10 32 0" fill="none"/><path d="M38 96h44" fill="none"/><circle cx="80" cy="74" r="4" fill="#ff9bd0" stroke="none"/><circle cx="40" cy="74" r="4" fill="#ff9bd0" stroke="none"/></svg>`,
  };
  const gear = `<div class="bogie"><i class="wheel"></i><i class="wheel"></i></div><div class="bogie bogie--r"><i class="wheel"></i><i class="wheel"></i></div><span class="buffer"></span><span class="buffer buffer--r"></span>`;
  const plate = (label) => (label ? `<b class="wagon__plate">${label}</b>` : "");
  const wagon = (color, pax, label, type = "pass") => {
    const c = COLORS[color] || color;
    if (type === "toile" || type === "sculpt") {
      return `<div class="wagon wagon--flat" style="--c:${c}"><div class="cargo cargo--${type}">${ART[type]}</div><div class="wagon__deck">${plate(label)}</div>${gear}</div>`;
    }
    if (type === "fret") {
      return `<div class="wagon wagon--fret" style="--c:${c}"><div class="wagon__roof"></div><div class="wagon__body"><span class="hatch">${PAX[pax[0]] || ""}</span><span class="slide-door"></span><span class="fragile">Fragile<br>art actuel</span>${plate(label)}</div>${gear}</div>`;
    }
    return `<div class="wagon" style="--c:${c}"><div class="wagon__roof"></div><div class="wagon__body"><span class="wagon__win">${PAX[pax[0]]}</span><span class="wagon__win">${PAX[pax[1]]}</span>${plate(label)}</div>${gear}</div>`;
  };

  const wheelSvg = (cx, cy, r) => `<g class="spin"><circle cx="${cx}" cy="${cy}" r="${r}" fill="#ff4b2b"/><circle cx="${cx}" cy="${cy}" r="${r - 5}" fill="#fff6e2" stroke-width="2.5"/><path d="M${cx} ${cy - r + 5}v${2 * r - 10}M${cx - r + 5} ${cy}h${2 * r - 10}M${cx - (r - 5) * 0.7} ${cy - (r - 5) * 0.7}l${(r - 5) * 1.4} ${(r - 5) * 1.4}M${cx + (r - 5) * 0.7} ${cy - (r - 5) * 0.7}l${-(r - 5) * 1.4} ${(r - 5) * 1.4}" fill="none" stroke-width="2.5"/><path d="M${cx - r * 0.55} ${cy + r * 0.25}a${r * 0.6} ${r * 0.6} 0 0 0 ${r * 1.1} 0z" fill="${INK}" stroke="none"/><circle cx="${cx}" cy="${cy}" r="4.5" fill="#ffc61a"/></g>`;
  const loco = (color) => `
    <div class="loco" style="--c:${COLORS[color]}">
      <svg viewBox="0 0 320 180" ${S}>
        <path d="M188 58 182 30 168 12h68l-14 18-6 28z" fill="${INK}"/><path d="M174 20h56" stroke="#ff4b2b" stroke-width="6"/>
        <path d="M138 58c0-14 8-20 14-20s14 6 14 20z" fill="#ffc61a"/>
        <path d="M118 30v-14h6v14" fill="#ffc61a"/>
        <rect x="110" y="58" width="184" height="72" rx="32" fill="${COLORS[color]}"/>
        <path d="M150 60v68M250 60v68" stroke="#ffc61a" stroke-width="7"/>
        <path d="M150 60v68M250 60v68" fill="none" stroke-width="1.5"/>
        <g fill="${INK}" stroke="none"><circle cx="126" cy="120" r="2.4"/><circle cx="140" cy="122" r="2.4"/><circle cx="264" cy="122" r="2.4"/><circle cx="278" cy="118" r="2.4"/></g>
        <rect x="16" y="38" width="104" height="98" rx="8" fill="${COLORS[color]}"/>
        <path d="M4 40Q62 10 132 40v8H4z" fill="${INK}"/>
        <rect x="34" y="56" width="56" height="40" rx="9" fill="#bfe6ff"/>
        <circle cx="62" cy="80" r="10" fill="#fff6e2"/><path d="M50 72h24l-3-8H53z" fill="#2338ff"/><path d="M55 84q7-5 14 0" fill="none" stroke-width="2.5"/>
        <path d="M30 108h76M30 120h76" fill="none" stroke-width="2"/>
        <rect x="286" y="42" width="22" height="18" rx="4" fill="${INK}"/><circle cx="302" cy="51" r="6" fill="#ffc61a"/>
        <rect x="100" y="128" width="200" height="8" rx="3" fill="${INK}"/>
        <g class="eyes">
          <circle class="eye" cx="210" cy="90" r="18" fill="#fff"/><circle class="pupil" cx="210" cy="90" r="7.5" fill="${INK}" stroke="none"/>
          <circle class="eye" cx="257" cy="90" r="18" fill="#fff"/><circle class="pupil" cx="257" cy="90" r="7.5" fill="${INK}" stroke="none"/>
        </g>
        <circle cx="196" cy="114" r="6" fill="#ff9bd0" stroke="none"/><circle cx="272" cy="114" r="6" fill="#ff9bd0" stroke="none"/>
        <path d="M233 108c-6-7-20-7-26 2 6-1 9 3 13 6 7 3 13-1 13-6 0 5 6 9 13 6 4-3 7-7 13-6-6-9-20-9-26-2z" fill="${INK}"/>
        <path d="M296 136l20 30h-34zM300 142l-8 22M308 146l-4 18" fill="#ffc61a"/>
        ${wheelSvg(66, 150, 24)}${wheelSvg(150, 150, 24)}${wheelSvg(214, 150, 24)}${wheelSvg(272, 158, 15)}
        <rect x="140" y="146" width="84" height="7" rx="3.5" fill="#cfd2e6"/>
      </svg>
      <span class="puff"></span><span class="puff"></span><span class="puff"></span>
    </div>`;

  document.querySelectorAll("[data-train]").forEach((el) => {
    const cfg = JSON.parse(el.dataset.train);
    el.innerHTML = cfg.wagons.map((w) => wagon(w[0], [w[1], w[2]], w[3], w[4])).join("") + loco(cfg.loco);
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

  /* ---------- yeux : les pupilles suivent la souris avec un ressort, et clignent ---------- */
  const eyeGroups = [...document.querySelectorAll(".eyes")];
  const pupils = eyeGroups.flatMap((g) => [...g.querySelectorAll(".pupil")].map((p, k) => ({ p, eye: g.querySelectorAll(".eye")[k], bx: k ? 257 : 210, x: 0, y: 0, tx: 0, ty: 0 })));
  let springing = false;
  function aim(mx, my) {
    pupils.forEach((o) => {
      const b = o.eye.getBoundingClientRect(), cx = b.left + b.width / 2, cy = b.top + b.height / 2;
      const ang = Math.atan2(my - cy, mx - cx), d = Math.min(1, Math.hypot(mx - cx, my - cy) / 220) * 8;
      o.tx = Math.cos(ang) * d; o.ty = Math.sin(ang) * d;
    });
    if (!springing) { springing = true; requestAnimationFrame(spring); }
  }
  function spring() {
    let moving = false;
    pupils.forEach((o) => {
      o.x += (o.tx - o.x) * 0.16; o.y += (o.ty - o.y) * 0.16;
      if (Math.abs(o.tx - o.x) > 0.05 || Math.abs(o.ty - o.y) > 0.05) moving = true;
      o.p.setAttribute("cx", (o.bx + o.x).toFixed(2)); o.p.setAttribute("cy", (90 + o.y).toFixed(2));
    });
    springing = moving;
    if (moving) requestAnimationFrame(spring);
  }
  if (!reduce && pupils.length) {
    addEventListener("pointermove", (ev) => aim(ev.clientX, ev.clientY), { passive: true });
    const blink = (g) => {
      setTimeout(() => {
        if (!document.hidden && g.isConnected) g.animate([{ transform: "scaleY(1)" }, { transform: "scaleY(0.08)", offset: 0.45 }, { transform: "scaleY(1)" }], { duration: 170, easing: "ease-out" });
        blink(g);
      }, 2600 + Math.random() * 4200);
    };
    eyeGroups.forEach(blink);
  }

  /* ---------- soulever le train ---------- */
  const rails = document.querySelector(".rails"), lift = document.querySelector(".lift");
  if (rails) {
    /* les roues tournent pendant le trajet puis freinent (au lieu de s'arrêter net) */
    const wheels = () => [...rails.querySelectorAll(".wheel, .loco .spin")].flatMap((w) => w.getAnimations());
    const roll = (ms, brakeMs = 500) => {
      cancelAnimationFrame(roll.raf); clearTimeout(roll.t);
      wheels().forEach((an) => { an.playbackRate = 1; });
      rails.classList.add("rolling");
      roll.t = setTimeout(() => {
        const t0 = performance.now();
        const step = (t) => {
          const k = 1 - (t - t0) / brakeMs;
          if (k <= 0) { rails.classList.remove("rolling"); wheels().forEach((an) => { an.playbackRate = 1; }); return; }
          wheels().forEach((an) => { an.playbackRate = k * k; });
          roll.raf = requestAnimationFrame(step);
        };
        roll.raf = requestAnimationFrame(step);
      }, Math.max(0, ms - brakeMs));
    };
    if (!reduce) roll(2100, 1300);
    if (lift) {
      const label = lift.querySelector("[data-label]"), hint = lift.querySelector("[data-hint]");
      lift.addEventListener("click", () => {
        const on = rails.dataset.lifted !== "true";
        rails.dataset.lifted = String(on);
        lift.setAttribute("aria-pressed", String(on));
        label.textContent = on ? "Remettre le train" : "Soulever le train";
        hint.textContent = on ? "Il en cachait bien un autre, non ?" : "Allez, regardez dessous.";
        if (!reduce) roll(1350, 450);
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
  passage.innerHTML = `<div class="track rolling">${[["tomato","eye","fish","","pass"],["mustard","","","","toile"],["mint","egg","","","fret"],["pink","","","","sculpt"]].map((w) => wagon(w[0], [w[1], w[2]], w[3], w[4])).join("")}${loco("lilac")}</div>`;
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
        if (bad) { ok = false; inp.classList.remove("shake"); void inp.offsetWidth; inp.classList.add("shake"); }
      });
      const sent = form.querySelector(".sent");
      sent.dataset.show = String(ok);
      if (ok) sent.focus();
    });
  }
})();
