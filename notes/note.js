/* Shared behaviour for notebook posts (notes/*.html):
   - syntax highlighting for <div class="code" data-name=".." data-lang="cpp|python"><pre><code>…</code></pre></div>
   - copy buttons, YouTube embeds (.yt[data-id]), table-of-contents highlight, click-to-zoom for .mfig images */
(function () {
  const LANG = {
    cpp: {
      label: "C++",
      re: /("(?:[^"\\]|\\.)*")|\b(\d+(?:\.\d+)?f?)\b|\b(void|bool|auto|const|return|if|else|for|while|this|size_t|true|false)\b|\b(std|grid_map|visualization_msgs|geometry_msgs|Marker|Index|Position|Point|stack|vector)\b|\b([A-Za-z_]\w*)(?=\()|(-&gt;|&lt;&lt;|::|&amp;&amp;|==|!=|\+=)/g,
      groups: ["str", "num", "kw", "ty", "fn", "op"],
    },
    python: {
      label: "Python",
      re: /(#[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(\d+(?:\.\d+)?)\b|\b(import|from|as|def|return|for|in|if|elif|else|while|None|True|False|and|or|not|lambda|class)\b|\b(np|plt|math)\b|\b([A-Za-z_]\w*)(?=\()|(==|!=|\*\*|\+=|-=)/g,
      groups: ["com", "str", "num", "kw", "ty", "fn", "op"],
    },
  };
  document.querySelectorAll(".code").forEach(b => {
    const L = LANG[b.dataset.lang || "cpp"], c = b.querySelector("code");
    c.innerHTML = c.innerHTML.replace(L.re, (m, ...g) => {
      const i = g.slice(0, L.groups.length).findIndex(x => x !== undefined);
      return i < 0 ? m : `<span class="tok-${L.groups[i]}">${m}</span>`;
    });
    const bar = document.createElement("div"); bar.className = "bar";
    bar.innerHTML = `<span><b>${b.dataset.name}</b> · ${L.label}</span><button type="button">copy</button>`;
    b.prepend(bar);
    bar.querySelector("button").onclick = async e => {
      try { await navigator.clipboard.writeText(c.innerText); e.target.textContent = "copied ✓"; }
      catch (_) { e.target.textContent = "select + copy"; }
      setTimeout(() => (e.target.textContent = "copy"), 1600);
    };
  });

  // YouTube rejects embeds with no Referer (file://), so fall back to a poster link there.
  document.querySelectorAll(".yt[data-id]").forEach(v => {
    const id = v.dataset.id, title = v.dataset.title || "Video";
    v.innerHTML = location.protocol === "file:"
      ? `<a class="poster" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener" style="background-image:url('https://i.ytimg.com/vi/${id}/hqdefault.jpg')"><span>▶ Watch on YouTube</span></a>`
      : `<iframe src="https://www.youtube.com/embed/${id}?rel=0&playsinline=1&origin=${encodeURIComponent(location.origin)}" title="${title}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  });

  // contents highlight
  const links = [...document.querySelectorAll("#toc a[href^='#']")];
  if (links.length) {
    const io = new IntersectionObserver(es => es.forEach(en => en.isIntersecting &&
      links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id))), { rootMargin: "-30% 0px -65% 0px" });
    links.forEach(a => { const t = document.getElementById(a.getAttribute("href").slice(1)); t && io.observe(t); });
  }

  // click-to-zoom for margin figures
  const figs = document.querySelectorAll(".mfig img, figure.zoomable img");
  if (figs.length) {
    const z = document.createElement("div"); z.className = "zoom"; z.innerHTML = "<img alt=''>"; document.body.append(z);
    figs.forEach(img => img.addEventListener("click", () => { z.firstChild.src = img.src; z.firstChild.alt = img.alt; z.classList.add("on"); }));
    z.onclick = () => z.classList.remove("on");
    addEventListener("keydown", e => e.key === "Escape" && z.classList.remove("on"));
  }
})();
