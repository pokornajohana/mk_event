document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a[href^="#"]');

  for (let link of links) {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Zabráníme výchozímu chování odkazu

      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth', // Plynulý scroll
          block: 'start', // Pozice scrollu
        });
      }
    });
  }
});
