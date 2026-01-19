(() => {
  const nav = document.getElementById("site-nav");
  const btn = document.querySelector(".nav-toggle");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  if (!nav || !btn) return;

  const setExpanded = (isOpen) => {
    btn.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-open", isOpen);
  };

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    setExpanded(!isOpen);
  });

  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    setExpanded(false);
  });

  document.addEventListener("click", (e) => {
    if (window.matchMedia("(max-width: 720px)").matches) {
      const clickInside = nav.contains(e.target) || btn.contains(e.target);
      if (!clickInside) setExpanded(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setExpanded(false);
  });
})();
