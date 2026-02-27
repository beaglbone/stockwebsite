async function loadComponent(id, htmlPath, jsPath) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(htmlPath);
  if (!res.ok) {
    console.error("Failed to load:", htmlPath);
    return;
  }

  el.innerHTML = await res.text();

  if (jsPath) {
    const s = document.createElement("script");
    s.src = jsPath;
    s.defer = true;
    document.body.appendChild(s);
  }

  if (window.lucide) {
    setTimeout(() => lucide.createIcons(), 0);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("site-header", "./components/header.html", "./js/header.js");
  loadComponent("site-footer", "./components/footer.html", "./js/footer.js");
});
