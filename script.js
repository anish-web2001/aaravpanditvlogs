/* ==================================================
   AARAV PANDIT VLOGS - JAVASCRIPT CONTROLLER
   ================================================== */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const videosData = [
    {
      id: 'v1',
      title: "🌿 Jungle Trail Noida 🌳 | Hidden Green Escape in Noida! ",
      category: 'Family',
      thumbnail: './assets/video-1.jpg',
      duration: '6:48',
      description: '🌿 JUNGLE TRAIL IN NOIDA 😱 | Untouched Nature, Adventure & Crazy Moments! | @AaravPanditVlogs',
      url: 'https://www.youtube.com/watch?v=Q07Jlw6wuFk'
    },
    {
      id: 'v2',
      title: "Aarav's Sundar nursery vlogs Adventure & Scenic Views",
      category: 'Travel',
      thumbnail: './assets/video-2.jpg',
      duration: '1:14',
      description: 'A trip to the beautiful park! Aarav experiences fun😎, scenic spots',
      url: 'https://www.youtube.com/watch?v=bx56Ud_OT7A'
    },
    {
      id: 'v3',
      title: 'Everyday Fun & Creative Playtime at Home',
      category: 'Daily Life',
      thumbnail: './assets/video-3.jpg',
      duration: '08:15',
      description: 'A happy day filled with imaginative games, painting, and unboxing new educational toys with Aarav!',
      url: 'https://www.youtube.com/@aaravpanditvlogs'
    },
    {
      id: 'v4',
      title: "Aarav's Cool Dance Steps & Energetic Performance",
      category: 'Dance',
      thumbnail: './assets/video-4.jpg',
      duration: '06:50',
      description: 'Watch 5-year-old Aarav show off his super energetic dance moves to popular catchy tunes!',
      url: 'https://www.youtube.com/@aaravpanditvlogs'
    },
    {
      id: 'v5',
      title: 'Super Funny Moments & Unstoppable Laughs',
      category: 'Funny Shorts',
      thumbnail: './assets/video-5.jpg',
      duration: '03:30',
      description: 'A hilarious collection of cute bloopers, silly jokes, and non-stop giggles from Aarav.',
      url: 'https://www.youtube.com/@aaravpanditvlogs'
    },
    {
      id: 'v6',
      title: 'Family Beach Picnic & Water Fun Day',
      category: 'Travel',
      thumbnail: './assets/video-6.jpg',
      duration: '11:05',
      description: 'Building sandcastles and splashing in waves! Aarav enjoys a sunny family outing by the sea.',
      url: 'https://www.youtube.com/@aaravpanditvlogs'
    }
  ];

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, match => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[match]));
  }

  function renderFeaturedVideos() {
    const videoGrid = document.getElementById('video-grid');
    if (!videoGrid) return;

    videoGrid.innerHTML = videosData.map(video => `
      <article class="video-card">
        <div class="video-thumbnail-wrapper">
          <img src="${video.thumbnail}" alt="${escapeHtml(video.title)}" class="video-thumb" loading="lazy" width="1280" height="720">
          <div class="video-play-overlay">
            <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="play-btn-circle" aria-label="Play ${escapeHtml(video.title)} on YouTube">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          </div>
          <span class="video-category-badge">${escapeHtml(video.category)}</span>
          <span class="video-duration-badge">${video.duration}</span>
        </div>
        <div class="video-content">
          <h3 class="video-card-title">${escapeHtml(video.title)}</h3>
          <p class="video-card-desc">${escapeHtml(video.description)}</p>
          <div class="video-card-footer">
            <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="btn-video-watch">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#ff1f3d">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Watch Video</span>
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  renderFeaturedVideos();

  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    if (!mobileNav || !mobileNavBackdrop || !menuToggle) return;
    mobileNav.classList.add('active');
    mobileNavBackdrop.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!mobileNav || !mobileNavBackdrop || !menuToggle) return;
    mobileNav.classList.remove('active');
    mobileNavBackdrop.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openMobileNav);
  if (menuClose) menuClose.addEventListener('click', closeMobileNav);
  if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileNav);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (header) {
      if (scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }

    if (backToTopBtn) {
      if (scrollY > 500) backToTopBtn.classList.add('visible');
      else backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) link.classList.add('active');
        });
      }
    });
  }, { passive: true });

  const galleryData = [
    { src: './assets/gallery-1.jpg', caption: 'Park Playtime Fun with Aarav' },
    { src: './assets/gallery-2.jpg', caption: 'Beach Vacation Sunny Day' },
    { src: './assets/gallery-3.jpg', caption: 'Family Picnic & Outdoor Games' },
    { src: './assets/gallery-4.jpg', caption: 'Dance Practice & Musical Fun' },
    { src: './assets/gallery-5.jpg', caption: 'Special Birthday Celebration' },
    { src: './assets/gallery-6.jpg', caption: 'Funny Shorts Shooting Day' },
    { src: './assets/gallery-7.jpg', caption: 'Exploring Beautiful New Places' },
    { src: './assets/gallery-8.jpg', caption: 'Daily Smiles & Happy Memories' }
  ];

  let currentGalleryIndex = 0;
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  function openLightbox(index) {
    currentGalleryIndex = index;
    updateLightboxContent();
    if (!lightbox) return;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = galleryData[currentGalleryIndex];
    if (!item || !lightboxImg || !lightboxCaption || !lightboxCounter) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    lightboxCaption.textContent = item.caption;
    lightboxCounter.textContent = `${currentGalleryIndex + 1} of ${galleryData.length}`;
  }

  function showNextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
    updateLightboxContent();
  }

  function showPrevImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxContent();
  }

  galleryItems.forEach((item, idx) => item.addEventListener('click', () => openLightbox(idx)));
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);

  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
    }

    if (mobileNav && mobileNav.classList.contains('active')) {
      if (e.key === 'Escape') closeMobileNav();
    }
  });

  const animatedElements = document.querySelectorAll('.fade-in, .scale-in');
  if ('IntersectionObserver' in window) {
    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.15 });

    animatedElements.forEach(el => scrollObserver.observe(el));
  } else {
    animatedElements.forEach(el => el.classList.add('appear'));
  }

  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const actionAttr = contactForm.getAttribute('action');
      if (!actionAttr || actionAttr === 'YOUR_FORM_ENDPOINT_HERE') {
        e.preventDefault();
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span>Sending Inquiry...</span>';
        }

        setTimeout(() => {
          if (formStatus) {
            formStatus.className = 'form-status-msg success';
            formStatus.innerHTML = '✨ <strong>Thank you!</strong> Your inquiry has been sent to Aarav\'s parent/guardian. We will get back to you shortly.';
            formStatus.style.display = 'block';
          }

          contactForm.reset();

          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>SEND INQUIRY</span>';
          }

          setTimeout(() => {
            if (formStatus) formStatus.style.display = 'none';
          }, 6000);
        }, 1000);
      }
    });
  }

  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();
});
