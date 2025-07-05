// Vybereme všechny odkazy, které odkazují na sekce na stránce
window.addEventListener('click', (e) => {
  let link = e.target.closest('a');
  if (link && link.getAttribute('href').startsWith('#')) {
    e.preventDefault();

    let targetElement = document.querySelector(link.getAttribute('href'));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
});

const agendaWrapper = document.querySelector('.agenda_wrapper');
const agendaCards = document.querySelectorAll('.agenda_card');

let scrollSpeed = 2; // Rychlost pohybu
let isPaused = false;
let animationFrame;

// Přidání event listenerů pro zastavení a obnovení posunu
agendaCards.forEach((card) => {
  console.log('funguje');
  card.addEventListener('mouseenter', () => {
    console.log('kurzor na prvku');
    isPaused = true;
    cancelAnimationFrame(animationFrame); // Zastaví animaci
  });

  card.addEventListener('mouseleave', () => {
    console.log('kurzor opustil prvek');
    isPaused = false;
    autoScroll(); // Znovu spustí animaci
  });
});
