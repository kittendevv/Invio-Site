(function () {
  function init() {
    try {
      const lucide = globalThis.lucide;
      if (lucide && typeof lucide.createIcons === "function") {
        lucide.createIcons();
      }
    } catch (_err) {
      // ignore lucide init errors
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else init();
})();
