function odeslatEmail() {
  var jmeno = document.getElementById('jmeno').value;
  var prijmeni = document.getElementById('prijmeni').value;
  var email = document.getElementById('email').value;
  var zprava = document.getElementById('zprava').value;

  // Validace pole emailu (pro jednoduchost)
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Prosím, zadejte platnou e-mailovou adresu.');
    return;
  }

  // Odeslat email pomocí AJAX
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert('E-mail byl úspěšně odeslán.');
      // Resetovat formulář po úspěšném odeslání
      document.getElementById('kontaktni_formular').reset();
    }
  };
  xhttp.open('POST', 'odeslat_email.php', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send(
    'jmeno=' +
      jmeno +
      '&prijmeni=' +
      prijmeni +
      '&email=' +
      email +
      '&zprava=' +
      zprava,
  );
}

// Přidání události pro načtení dokumentu
document.addEventListener('DOMContentLoaded', function () {
  // Vyberte všechny odkazy s kotvou, které mají atribut href začínající "#"
  const anchorLinks = document.querySelectorAll("a[href^='#']");

  // Funkce pro plynulé scrollování na danou kotvu
  function scrollToAnchor(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth', // Plynulá animace scrollování
      });
    }
  }

  // Přidání události kliknutí na každý odkaz s kotvou
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', scrollToAnchor);
  });
});

// const agendaDesc = document.querySelector('.agenda_desc');
// const agendaCard = document.querySelector('.agenda_card');

// const displayDesc = () => {
//   const agendaDesc = document.querySelector('.agenda_desc');
//   console.log(agendaDesc);
// };

// agendaCard.addEventListener('click', () => {
//   console.log(agendaDesc);
// });

// Přidání události pro načtení dokumentu
document.addEventListener('DOMContentLoaded', function () {
  // Vyberte všechny odkazy s kotvou, které mají atribut href začínající "#"
  const anchorLinks = document.querySelectorAll("a[href^='#']");

  // Funkce pro plynulé scrollování na danou kotvu
  function scrollToAnchor(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth', // Plynulá animace scrollování
      });
    }
  }

  // Přidání události kliknutí na každý odkaz s kotvou
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', scrollToAnchor);
  });
});

function scrollLeft() {
  document.getElementById('agenda_sec').scrollBy({
    left: -300,
    behavior: 'smooth',
  });
}

function scrollRight() {
  document.getElementById('agenda_sec').scrollBy({
    left: 300,
    behavior: 'smooth',
  });
}
