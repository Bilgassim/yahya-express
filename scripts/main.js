/* ==========================================================================
   Yahya Express - Script JavaScript principal
   Fonctionnalites : Navigation mobile, gestion de formulaire et WhatsApp
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // Navigation mobile avec animation et fermeture automatique
  var menuBtn = document.querySelector('.mobile-menu-btn');
  var navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = navLinks.classList.toggle('mobile-open');
      menuBtn.classList.toggle('active', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fermer le menu lors du clic sur un lien
    var navItems = navLinks.querySelectorAll('a');
    navItems.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('mobile-open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Fermer le menu lors d'un clic en dehors
    document.addEventListener('click', function (e) {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('mobile-open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Fermer le menu avec la touche Echap
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('mobile-open')) {
        navLinks.classList.remove('mobile-open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Formulaire de contact et transmission WhatsApp
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var nom = document.getElementById('nom') ? document.getElementById('nom').value.trim() : '';
      var telephone = document.getElementById('telephone') ? document.getElementById('telephone').value.trim() : '';
      var adresse = document.getElementById('adresse') ? document.getElementById('adresse').value.trim() : '';
      var typeLivraison = document.getElementById('typeLivraison') ? document.getElementById('typeLivraison').value : '';
      var message = document.getElementById('message') ? document.getElementById('message').value.trim() : '';

      if (!nom || !telephone) {
        alert('Veuillez remplir votre nom et votre numero de telephone.');
        return;
      }

      var text = 'Demande de livraison - Yahya Express\n\n' +
        'Nom : ' + nom + '\n' +
        'Telephone : ' + telephone + '\n' +
        'Adresse : ' + (adresse || 'Non specifiee') + '\n' +
        'Type de service : ' + (typeLivraison || 'Standard') + '\n' +
        'Message : ' + (message || 'Aucun message particulier');

      var whatsappUrl = 'https://wa.me/212697893261?text=' + encodeURIComponent(text);
      window.open(whatsappUrl, '_blank');
    });
  }

  // Annee courante pour le copyright
  var yearElements = document.querySelectorAll('.current-year');
  var currentYear = new Date().getFullYear();
  yearElements.forEach(function (el) {
    el.textContent = currentYear;
  });
});
