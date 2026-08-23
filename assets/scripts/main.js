/**
 * YAHYA EXPRESS - Main JavaScript
 * Handles navigation, mobile drawer, scroll animations, FAQ accordion,
 * contact form WhatsApp dispatcher & general interactivity.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. STICKY HEADER & SCROLL BEHAVIOR
  const header = document.querySelector('.header');
  const scrollBtn = document.querySelector('.float-btn-scroll');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header shadow on scroll
    if (header) {
      if (scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (scrollBtn) {
      if (scrollY > 400) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    }
  });

  // Scroll to top click
  if (scrollBtn) {
    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 2. MOBILE MENU DRAWER
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    if (mobileToggle && mobileDrawer && drawerBackdrop) {
      mobileToggle.classList.add('active');
      mobileDrawer.classList.add('open');
      drawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileToggle && mobileDrawer && drawerBackdrop) {
      mobileToggle.classList.remove('active');
      mobileDrawer.classList.remove('open');
      drawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // 3. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('active'));
  }

  // 4. FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
          }
        });

        // Toggle current
        if (isActive) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  // 5. CONTACT & ORDER FORM (Direct WhatsApp Dispatcher)
  const orderForm = document.getElementById('yahyaOrderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName')?.value.trim() || '';
      const phone = document.getElementById('clientPhone')?.value.trim() || '';
      const pickup = document.getElementById('pickupAddress')?.value.trim() || 'Non précisée';
      const dropoff = document.getElementById('dropoffAddress')?.value.trim() || 'Non précisée';
      const serviceType = document.getElementById('serviceType')?.value || 'Livraison';
      const notes = document.getElementById('orderNotes')?.value.trim() || 'Aucune note particulière';

      if (!name || !phone) {
        alert('Veuillez renseigner votre nom et votre numéro de téléphone.');
        return;
      }

      // Build WhatsApp message
      const text = `🚚 *NOUVELLE DEMANDE DE LIVRAISON - YAHYA EXPRESS* 🚚\n\n` +
        `👤 *Nom du client :* ${name}\n` +
        `📞 *Téléphone :* ${phone}\n` +
        `📦 *Type de service :* ${serviceType}\n` +
        `📍 *Départ / Ramassage :* ${pickup}\n` +
        `🏁 *Destination / Livraison :* ${dropoff}\n` +
        `📝 *Détails & Instructions :* ${notes}\n\n` +
        `_Message envoyé depuis le site officiel Yahya Express Berkane._`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/212600488901?text=${encodedText}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // Visual feedback
      const submitBtn = orderForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>✓ Demande transmise sur WhatsApp !</span>`;
        submitBtn.style.background = '#25D366';
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
        }, 4000);
      }
    });
  }

  // 6. DYNAMIC CURRENT YEAR
  const yearSpans = document.querySelectorAll('.current-year');
  const curYear = new Date().getFullYear();
  yearSpans.forEach(span => {
    span.textContent = curYear;
  });
});
