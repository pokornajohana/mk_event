// Vybereme všechny odkazy, které odkazují na sekce na stránce
window.addEventListener("click", e => {
  let link = e.target.closest('a');
  if (link && link.getAttribute('href').startsWith("#")) {
    e.preventDefault();

    let targetElement = document.querySelector(link.getAttribute('href'));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
});
