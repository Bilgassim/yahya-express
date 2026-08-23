/* ==========================================================================
   Yahya Express - Script JavaScript principal
   Fonctionnalites : Navigation mobile, gestion de formulaire et WhatsApp
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // Navigation mobile
  var menuBtn = document.querySelector('.mobile-menu-btn');
  var navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      navLinks.classList.toggle('mobile-open');
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
