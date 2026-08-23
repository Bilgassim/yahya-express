/**
 * YAHYA EXPRESS - Media Gallery & Lightbox Modal
 * Handles category filtering, image/video modal playback, and keyboard controls.
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('lightboxModal');
  const modalContainer = document.getElementById('lightboxMediaContainer');
  const modalCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  let activeIndex = 0;
  let visibleItems = Array.from(galleryItems);

  // 1. FILTER CATEGORIES
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory.includes(filterValue)) {
          item.style.display = '';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 250);
        }
      });

      // Update visible items array for lightbox
      visibleItems = Array.from(galleryItems).filter(item => {
        const cat = item.getAttribute('data-category');
        return filterValue === 'all' || cat.includes(filterValue);
      });
    });
  });

  // 2. OPEN LIGHTBOX
  function openLightbox(index) {
    if (!modal || visibleItems.length === 0) return;
    activeIndex = index;
    updateModalContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!modal) return;
    modal.classList.remove('active');
    if (modalContainer) modalContainer.innerHTML = '';
    document.body.style.overflow = '';
  }

  function updateModalContent() {
    if (!modalContainer || !visibleItems[activeIndex]) return;

    const item = visibleItems[activeIndex];
    const type = item.getAttribute('data-type') || 'image';
    const src = item.getAttribute('data-src');
    const title = item.querySelector('.gallery-item-title')?.textContent || '';
    const desc = item.querySelector('.gallery-item-desc')?.textContent || '';

    modalContainer.innerHTML = '';

    if (type === 'video') {
      const video = document.createElement('video');
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.style.maxWidth = '100%';
      video.style.maxHeight = '75vh';
      modalContainer.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = src;
      img.alt = title;
      img.style.maxWidth = '100%';
      img.style.maxHeight = '75vh';
      modalContainer.appendChild(img);
    }

    if (modalCaption) {
      modalCaption.innerHTML = `<strong>${title}</strong><br><span style="font-size:0.85rem; font-weight:400; color:#CBD5E1;">${desc}</span>`;
    }
  }

  function showNext() {
    activeIndex = (activeIndex + 1) % visibleItems.length;
    updateModalContent();
  }

  function showPrev() {
    activeIndex = (activeIndex - 1 + visibleItems.length) % visibleItems.length;
    updateModalContent();
  }

  // Attach click listeners to gallery items
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const currentIdx = visibleItems.indexOf(item);
      if (currentIdx !== -1) {
        openLightbox(currentIdx);
      }
    });
  });

  // Modal controls
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
});
