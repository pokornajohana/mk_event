// Vybereme všechny odkazy, které odkazují na sekce na stránce
const links = document.querySelectorAll('nav a[href^="#"]');

links.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Zabráníme výchozímu chování odkazu

    const targetId = link.getAttribute('href'); // Získáme ID cílové sekce
    const targetElement = document.querySelector(targetId); // Vybereme cílový prvek

    if (targetElement) {
      // Plynulé scrollování
      targetElement.scrollIntoView({
        behavior: 'smooth', // Plynulé scrollování
        block: 'start', // Zarovnat k začátku sekce
      });
    }
  });
});
