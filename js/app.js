/**
 * reBot - DLI Course Top-Level Hub JavaScript
 * Mobile Responsive Menu, Spec Toggle, Accessories Tabs & Navigation Interaction
 */

document.addEventListener('DOMContentLoaded', () => {
  setupNavLinks();
  setupMobileMenu();
  setupSpecToggle();
  setupAccessoriesTabs();
  setup3DCardSpotlight();
  setupNeuralParticleCanvas();
  setupScrollAndEntranceAnimations();
});

function setupNavLinks() {
  const links = document.querySelectorAll('.hub-nav-link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      links.forEach(l => l.classList.remove('active'));
      e.currentTarget.classList.add('active');

      // Auto-close mobile dropdown when a link is clicked
      const navMenu = document.querySelector('.hub-nav-menu');
      const mobileBtnIcon = document.querySelector('.mobile-menu-btn i');
      if (navMenu && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        if (mobileBtnIcon) {
          mobileBtnIcon.className = 'fas fa-bars';
        }
      }
    });
  });
}

function setupMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.querySelector('.hub-nav-menu');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        const icon = mobileBtn.querySelector('i');
        if (icon) {
          icon.className = 'fas fa-bars';
        }
      }
    });
  }
}

function setupSpecToggle() {
  const toggleBtn = document.getElementById('toggle-specs-btn');
  const specContent = document.getElementById('spec-comparison-content');
  if (toggleBtn && specContent) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = specContent.classList.toggle('expanded');
      const icon = toggleBtn.querySelector('i');
      const label = toggleBtn.querySelector('.toggle-label');
      
      if (icon) {
        icon.className = isExpanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
      }
      if (label) {
        label.textContent = isExpanded ? 'Hide Detailed Specification' : 'Expand Detailed Specification';
      }
    });
  }
}

function setupAccessoriesTabs() {
  const dmBtn = document.getElementById('tab-btn-dm');
  const rsBtn = document.getElementById('tab-btn-rs');
  const dmGrid = document.getElementById('dm-accessories-grid');
  const rsPlaceholder = document.getElementById('rs-empty-placeholder');

  if (dmBtn && rsBtn && dmGrid && rsPlaceholder) {
    dmBtn.addEventListener('click', () => {
      dmBtn.classList.add('active');
      rsBtn.classList.remove('active');
      dmGrid.style.display = 'grid';
      rsPlaceholder.style.display = 'none';
    });

    rsBtn.addEventListener('click', () => {
      rsBtn.classList.add('active');
      dmBtn.classList.remove('active');
      dmGrid.style.display = 'none';
      rsPlaceholder.style.display = 'block';
    });
  }
}

/**
 * Developer Hub Silky Accordion Toggle Handler with Dynamic Height Calculation
 */
function toggleHubAccordion(itemId) {
  const targetItem = document.getElementById(itemId);
  if (!targetItem) return;

  const content = targetItem.querySelector('.hub-accordion-content');
  if (!content) return;

  const isActive = targetItem.classList.contains('active');

  if (isActive) {
    // Closing: Set explicit height first, then animate smoothly to 0
    const currentHeight = content.scrollHeight;
    content.style.maxHeight = currentHeight + 'px';
    content.offsetHeight; // Force reflow
    requestAnimationFrame(() => {
      content.style.maxHeight = '0px';
      targetItem.classList.remove('active');
    });
  } else {
    // Opening: Calculate exact scrollHeight and animate smoothly
    targetItem.classList.add('active');
    const targetHeight = content.scrollHeight;
    content.style.maxHeight = targetHeight + 30 + 'px';

    const handleTransitionEnd = (e) => {
      if (e.propertyName === 'max-height' && targetItem.classList.contains('active')) {
        content.style.maxHeight = 'none';
      }
      content.removeEventListener('transitionend', handleTransitionEnd);
    };
    content.addEventListener('transitionend', handleTransitionEnd);
  }
}

/**
 * 3D Tilt & Cursor Spotlight Glow Tracking Handler for Product & Showcase Cards
 */
function setup3DCardSpotlight() {
  const cards = document.querySelectorAll('.product-summary-card, .accessory-card, .dev-project-card, .gs-info-card, .cocreate-card');

  cards.forEach(card => {
    // Add spotlight overlay element if not present
    if (!card.querySelector('.card-spotlight-glow')) {
      const spotlight = document.createElement('div');
      spotlight.className = 'card-spotlight-glow';
      card.appendChild(spotlight);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within card
      const y = e.clientY - rect.top;  // y position within card
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate subtle 3D rotate degrees (-5deg to +5deg)
      const rotateX = -((y - centerY) / centerY) * 5;
      const rotateY = ((x - centerX) / centerX) * 5;

      // Calculate mouse position percentage for CSS gradient
      const mouseXPercent = (x / rect.width) * 100;
      const mouseYPercent = (y / rect.height) * 100;

      card.style.setProperty('--mouse-x', `${mouseXPercent}%`);
      card.style.setProperty('--mouse-y', `${mouseYPercent}%`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
      card.style.boxShadow = `0 14px 32px rgba(0, 0, 0, 0.45), ${-rotateY}px ${rotateX}px 24px rgba(141, 195, 31, 0.08)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.boxShadow = '';
      card.style.setProperty('--mouse-x', `50%`);
      card.style.setProperty('--mouse-y', `50%`);
    });
  });
}

/**
 * AI Neural Network & Robotic Nodes Interactive Background Canvas Animation
 */
function setupNeuralParticleCanvas() {
  const canvas = document.createElement('canvas');
  canvas.id = 'neural-bg-canvas';
  canvas.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 0; opacity: 0.65; transition: opacity 0.5s ease;';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  let mouse = { x: null, y: null, radius: 190 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  });

  let particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 18000), 65);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2.2 + 1.5;
      this.color = '141, 195, 31';
      this.baseAlpha = Math.random() * 0.4 + 0.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactive push/attract physics
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 1.6;
          this.y -= Math.sin(angle) * force * 1.6;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.baseAlpha})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(${this.color}, 0.7)`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function connectParticles() {
    const maxDist = 155;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.42;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(141, 195, 31, ${opacity})`;
          ctx.lineWidth = 1.0;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    connectParticles();
    requestAnimationFrame(animate);
  }

  initParticles();
  animate();
}

/**
 * Entrance & Scroll-Driven Reveal Animations via IntersectionObserver & ScrollSpy
 */
function setupScrollAndEntranceAnimations() {
  // 1. Hero Staggered Entrance
  setTimeout(() => {
    document.querySelectorAll('.hero-main-title, .hero-sub-text').forEach((el, idx) => {
      el.style.transitionDelay = `${idx * 0.15}s`;
      el.classList.add('is-visible');
    });
  }, 80);

  // 2. IntersectionObserver for Reveal-on-Scroll Elements
  const revealElements = document.querySelectorAll(
    '.section-title-group, .video-card, .product-summary-card, .accessory-card, .hub-accordion-item, .cocreate-card, .community-channels-section'
  );

  revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // 3. Navbar ScrollSpy Auto-Highlighting
  setupScrollSpy();
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.hub-nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 220;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

