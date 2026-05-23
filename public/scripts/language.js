const root = document.documentElement;
const stored = window.localStorage.getItem("site-language");

if (stored) {
  root.dataset.currentLang = stored;
}

document.querySelectorAll("[data-language-switch]").forEach((button) => {
  const language = button.getAttribute("data-language-switch");
  button.setAttribute("aria-pressed", String(root.dataset.currentLang === language));

  button.addEventListener("click", () => {
    root.dataset.currentLang = language;
    window.localStorage.setItem("site-language", language);

    document.querySelectorAll("[data-language-switch]").forEach((item) => {
      item.setAttribute(
        "aria-pressed",
        String(item.getAttribute("data-language-switch") === language)
      );
    });
  });
});
