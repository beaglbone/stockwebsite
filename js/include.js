async function loadComponent(id, file, jsFile) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(file);
  el.innerHTML = await res.text();

  if (jsFile) {
    const script = document.createElement("script");
    script.src = jsFile;
    script.defer = true;
    document.body.appendChild(script);
  }

  // Re-init icons
  if (window.lucide) lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("site-header", "/components/header.html", "/js/header.js");
  loadComponent("site-footer", "/components/footer.html", "/js/footer.js");
});
