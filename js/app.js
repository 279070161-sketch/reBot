/**
 * reBot - DLI Course Top-Level Hub JavaScript
 * Mobile Responsive Menu, Spec Toggle, Accessories Tabs & Navigation Interaction
 */

function initApp() {
  setupNavLinks();
  setupMobileMenu();
  setupSpecToggle();
  setupAccessoriesTabs();
  setup3DCardSpotlight();
  setupNeuralParticleCanvas();
  setupScrollAndEntranceAnimations();
  initDliCardAsciiBg();
  initSmartBuyButton();
  initHeroArmMouseTracker();
  initSimJengaArmAnimation();
  initVideoModalHandler();
  initLazySimIframe();
  initVideoViewportController();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function setupNavLinks() {
  const links = document.querySelectorAll('.hub-nav-link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        links.forEach(l => l.classList.remove('active'));
        e.currentTarget.classList.add('active');
      }

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
 * Open Co-Create / Custom Service Accordion & Scroll Smoothly
 */
function openCocreateAccordion() {
  const targetItem = document.getElementById('cocreate');
  if (!targetItem) return;

  if (!targetItem.classList.contains('active')) {
    toggleHubAccordion('cocreate');
  }

  setTimeout(() => {
    targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

/**
 * 3D Tilt & Cursor Spotlight Glow Tracking Handler for Product & Showcase Cards
 */
function setup3DCardSpotlight() {
  const cards = document.querySelectorAll('.product-summary-card, .accessory-card, .dev-project-card, .gs-info-card');

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

// DLI Course Card ASCII Breathing Field Background Engine
function initDliCardAsciiBg() {
  const canvas = document.getElementById('dli-card-ascii-canvas');
  if (!canvas) return;

  const PALETTE = '   ...:::---+++***◦◦••▢▣';
  const CELL = 16;
  const FONT_SIZE = 13;
  let ctx, w, h;

  function setup() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 4 || rect.height < 4) return false;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    w = rect.width;
    h = rect.height;
    ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = `500 ${FONT_SIZE}px "JetBrains Mono", monospace`;
    ctx.textBaseline = 'top';
    return true;
  }

  function draw(t) {
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    const cols = Math.ceil(w / CELL);
    const rows = Math.ceil(h / CELL);

    for (let r = 0; r < rows; r++) {
      for (let cc = 0; cc < cols; cc++) {
        const n = (
          Math.sin(cc * 0.18 + t) +
          Math.sin(r * 0.24 - t * 0.7) +
          Math.sin((cc + r) * 0.12 + t * 0.45) +
          Math.sin(Math.hypot(cc - cols * 0.5, r - rows * 0.5) * 0.16 - t * 0.55)
        ) / 4;
        const v = (n + 1) / 2;
        if (v < 0.22) continue;
        const idx = Math.min(PALETTE.length - 1, Math.floor(v * PALETTE.length));
        const ch = PALETTE[idx];
        if (ch === ' ') continue;
        
        const alpha = (0.08 + (v - 0.22) * 0.55);
        ctx.fillStyle = `rgba(141, 195, 31, ${alpha.toFixed(3)})`;
        ctx.fillText(ch, cc * CELL, r * CELL);
      }
    }
  }

  let pending = null;
  window.addEventListener('resize', () => {
    if (pending) cancelAnimationFrame(pending);
    pending = requestAnimationFrame(setup);
  }, { passive: true });

  let t0 = performance.now();
  setup();

  function tick(now) {
    const rect = canvas.getBoundingClientRect();
    if (rect.width >= 4 && rect.height >= 4) {
      if (!ctx || Math.abs(w - rect.width) > 2 || Math.abs(h - rect.height) > 2) {
        setup();
      }
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const t = (now - t0) / 1000 * 0.55;
        draw(t);
      }
    }
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/**
 * IP & Location-based Smart Redirect for 'Buy Now' Button
 * Automatically matches domestic Chinese IP (Taobao Tmall Store) vs Global IP (Seeed Bazaar)
 */
function initSmartBuyButton() {
  const buyBtn = document.getElementById('nav-buy-now-btn');
  if (!buyBtn) return;

  const TAOBAO_URL = "https://seeedstudio.world.tmall.com/shop/view_shop.htm?spm=a21xtw.29978516.0.0";
  const BAZAAR_URL = "https://www.seeedstudio.com/";

  // 1. Instant local detection via Timezone & Language Locale
  const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase();
  const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  
  let isChina = tz.includes('shanghai') || tz.includes('chongqing') || tz.includes('urumqi') || tz.includes('harbin') || tz.includes('kashgar') || lang.includes('zh-cn');

  buyBtn.href = isChina ? TAOBAO_URL : BAZAAR_URL;

  // 2. Fetch IP Geo location asynchronously to verify country code
  fetch('https://get.geojs.io/v1/ip/country.json')
    .then(res => res.json())
    .then(data => {
      if (data && data.country) {
        if (data.country === 'CN') {
          buyBtn.href = TAOBAO_URL;
        } else {
          buyBtn.href = BAZAAR_URL;
        }
      }
    })
    .catch(() => {
      // Keep timezone/language result on error/network block
    });

  // 3. Click Handler to ensure target store opens reliably in new tab
  buyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (buyBtn.href) {
      window.open(buyBtn.href, '_blank', 'noopener,noreferrer');
    }
  });
}

/**
 * Video Lightbox Modal Controller
 * Plays banner video on demand when clicking 'Watch Video' button
 */
function initVideoModalHandler() {
  const modal = document.getElementById('hero-video-modal');
  const openBtn = document.getElementById('open-video-modal-btn');
  const closeBtn = document.getElementById('close-video-modal-btn');
  const backdrop = document.getElementById('video-modal-backdrop');
  const video = document.getElementById('modal-banner-video');

  if (!modal || !openBtn) return;

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    if (video) {
      video.pause();
    }
  }

  openBtn.addEventListener('click', openModal);

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Unitree-Style Studio 3D Robotic Arm Interactive Mouse Tracker (Three.js Engine)
 * Renders a sleek 6-DoF silver-grey metallic reBot Arm standing in a clean studio environment.
 */
function initHeroArmMouseTracker() {
  const canvas = document.getElementById('hero-arm-canvas');
  if (!canvas || typeof THREE === 'undefined') {
    if (!window._heroArmRetryCount) window._heroArmRetryCount = 0;
    if (window._heroArmRetryCount < 20) {
      window._heroArmRetryCount++;
      setTimeout(initHeroArmMouseTracker, 100);
    }
    return;
  }

  const container = canvas.parentElement || document.body;
  const scene = new THREE.Scene();

  // 1. Camera Setup with Safe Non-Zero Aspect Ratio Fallbacks
  const getContainerWidth = () => container.clientWidth || Math.min(window.innerWidth * 0.55, 900);
  const getContainerHeight = () => container.clientHeight || Math.min(window.innerHeight, 800);

  const initW = getContainerWidth();
  const initH = getContainerHeight();

  const camera = new THREE.PerspectiveCamera(36, initW / initH, 0.1, 1000);
  camera.position.set(0, 1.5, 6.6);
  camera.lookAt(0, 0.65, 0);

  // 2. WebGL Renderer with Alpha Transparency
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(initW, initH);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  // 3. Ultra-Clean Studio Lighting Setup (Clean Studio Key & Fill)
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const mainStudioLight = new THREE.DirectionalLight(0xffffff, 2.0);
  mainStudioLight.position.set(7, 12, 9);
  scene.add(mainStudioLight);

  const softFillLight = new THREE.DirectionalLight(0xF1F5F9, 0.9);
  softFillLight.position.set(-7, 7, -4);
  scene.add(softFillLight);

  const studioRimLight = new THREE.PointLight(0xFFFFFF, 1.4, 12);
  studioRimLight.position.set(0, 5, 4);
  scene.add(studioRimLight);

  // 4. Official Brand Materials (High-Brightness CNC Silver & Premium Space Black Metal)
  const cncMetalMat = new THREE.MeshStandardMaterial({
    color: 0xE2E8F0,
    roughness: 0.25,
    metalness: 0.72
  });
  const motorMat = new THREE.MeshStandardMaterial({
    color: 0x232323,
    roughness: 0.32,
    metalness: 0.75
  });
  const baseBlackMat = new THREE.MeshStandardMaterial({
    color: 0x232323,
    roughness: 0.32,
    metalness: 0.75
  });
  // Official Brand Seeed Studio Lime Yellow-Green Accent (#99DA00)
  const badgeYellowMat = new THREE.MeshStandardMaterial({
    color: 0x99DA00,
    roughness: 0.35,
    metalness: 0.0,
    emissive: 0x000000,
    emissiveIntensity: 0.0,
    polygonOffset: true,
    polygonOffsetFactor: -10,
    polygonOffsetUnits: -10
  });

  // Studio Ground Soft Radial Contact Shadow (100% Pure Neutral Black/Grey Shadow, Zero Blue Tint)
  function createSoftRadialShadowTexture() {
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 512;
    shadowCanvas.height = 512;
    const ctx = shadowCanvas.getContext('2d');

    const grad = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    grad.addColorStop(0.0, 'rgba(0, 0, 0, 0.85)');      // Pure dark black core directly under base
    grad.addColorStop(0.20, 'rgba(15, 15, 15, 0.58)');   // Pure neutral contact shadow
    grad.addColorStop(0.48, 'rgba(40, 40, 40, 0.22)');   // Pure neutral ambient soft spread
    grad.addColorStop(0.78, 'rgba(80, 80, 80, 0.05)');   // Pure neutral edge blur
    grad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');       // Transparent edge

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    return new THREE.CanvasTexture(shadowCanvas);
  }

  const softShadowTex = createSoftRadialShadowTexture();

  // Primary Soft Ambient Shadow Plane (size 2.4 x 2.4 - clearly visible soft spread around base)
  const shadowGeo = new THREE.PlaneGeometry(2.4, 2.4);
  const shadowMat = new THREE.MeshBasicMaterial({
    map: softShadowTex,
    transparent: true,
    depthWrite: false,
    opacity: 0.9
  });
  const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.set(0, -0.908, 0);
  shadowMesh.renderOrder = -1;
  scene.add(shadowMesh);

  // Secondary Dark Core Contact Shadow (size 1.4 x 1.4 - intense contact right at base edge)
  const coreShadowGeo = new THREE.PlaneGeometry(1.4, 1.4);
  const coreShadowMat = new THREE.MeshBasicMaterial({
    map: softShadowTex,
    transparent: true,
    depthWrite: false,
    opacity: 0.95
  });
  const coreShadowMesh = new THREE.Mesh(coreShadowGeo, coreShadowMat);
  coreShadowMesh.rotation.x = -Math.PI / 2;
  coreShadowMesh.position.set(0, -0.906, 0);
  coreShadowMesh.renderOrder = 0;
  scene.add(coreShadowMesh);

  // 5. High-Precision 3D reBot Arm B601-RS Model Assembly (Official URDF Kinematic Joint Tree)
  const robotArmGroup = new THREE.Group();
  robotArmGroup.position.set(0, -0.9, 0);
  scene.add(robotArmGroup);

  const URDF_SCALE = 5.5; // Scale URDF meters into Three.js studio canvas units

  const armAssemblyGroup = new THREE.Group();
  armAssemblyGroup.scale.set(URDF_SCALE, URDF_SCALE, URDF_SCALE);
  armAssemblyGroup.rotation.x = -Math.PI / 2; // Convert Z-up URDF to Y-up Three.js studio
  robotArmGroup.add(armAssemblyGroup);

  // 10-Node URDF Kinematic Joint Tree Hierarchy based on rs_arm.xml & ReBot_Arm_RS.urdf
  const baseLinkGroup = new THREE.Group();
  armAssemblyGroup.add(baseLinkGroup);

  // Joint 1 (Base Yaw, axis="0 0 -1")
  const j1Node = new THREE.Group();
  j1Node.position.set(-0.0003428, -0.0009868, 0.075);
  baseLinkGroup.add(j1Node);
  const j1AxisGroup = new THREE.Group();
  j1Node.add(j1AxisGroup);
  const link1Group = new THREE.Group();
  j1AxisGroup.add(link1Group);

  // Joint 2 (Shoulder Pitch, quat="0.7071055 -0.7071081 0 0", axis="0 0 1")
  const j2Node = new THREE.Group();
  j2Node.position.set(0.020343, 0.027237, 0.07);
  j2Node.quaternion.set(-0.7071081, 0, 0, 0.7071055);
  link1Group.add(j2Node);
  const j2AxisGroup = new THREE.Group();
  j2Node.add(j2AxisGroup);
  const link2Group = new THREE.Group();
  j2AxisGroup.add(link2Group);

  // Joint 3 (Elbow Pitch, axis="0 0 -1")
  const j3Node = new THREE.Group();
  j3Node.position.set(-0.236, 0, 0);
  link2Group.add(j3Node);
  const j3AxisGroup = new THREE.Group();
  j3Node.add(j3AxisGroup);
  const link3Group = new THREE.Group();
  j3AxisGroup.add(link3Group);

  // Joint 4 (Wrist Pitch, axis="0 0 -1")
  const j4Node = new THREE.Group();
  j4Node.position.set(0.228, -0.072746, 0.0045);
  link3Group.add(j4Node);
  const j4AxisGroup = new THREE.Group();
  j4Node.add(j4AxisGroup);
  const link4Group = new THREE.Group();
  j4AxisGroup.add(link4Group);

  // Joint 5 (Wrist Roll, quat="0.7071055 -0.7071081 0 0", axis="0 0 -1")
  const j5Node = new THREE.Group();
  j5Node.position.set(0.087, -0.048, -0.03075);
  j5Node.quaternion.set(-0.7071081, 0, 0, 0.7071055);
  link4Group.add(j5Node);
  const j5AxisGroup = new THREE.Group();
  j5Node.add(j5AxisGroup);
  const link5Group = new THREE.Group();
  j5AxisGroup.add(link5Group);

  // Joint 6 (Flange Roll, quat="0.7071055 0 0.7071081 0", axis="0 0 -1")
  const j6Node = new THREE.Group();
  j6Node.position.set(0.0365, 0, 0.048);
  j6Node.quaternion.set(0, 0.7071081, 0, 0.7071055);
  link5Group.add(j6Node);
  const j6AxisGroup = new THREE.Group();
  j6Node.add(j6AxisGroup);
  const link6Group = new THREE.Group();
  j6AxisGroup.add(link6Group);

  // Gripper End Joint (quat="-0.0000026 0.7071055 0.0000026 0.7071081")
  const gripperEndNode = new THREE.Group();
  gripperEndNode.position.set(0, 0, 0.16621);
  gripperEndNode.quaternion.set(0.7071055, 0.0000026, 0.7071081, -0.0000026);
  link6Group.add(gripperEndNode);
  const gripperEndGroup = new THREE.Group();
  gripperEndNode.add(gripperEndGroup);

  // Invisible 360-degree Large Hit Target Sphere for 100% Easy Dragging from Any Distance/Angle
  const hitAreaGeo = new THREE.SphereGeometry(0.35, 16, 16);
  const hitAreaMat = new THREE.MeshBasicMaterial({ visible: false });
  const gripperHitSphere = new THREE.Mesh(hitAreaGeo, hitAreaMat);
  gripperHitSphere.position.set(-0.02, 0, 0);
  gripperEndGroup.add(gripperHitSphere);

  // Gripper Left Joint (quat="0.4999982 0.5 -0.5 0.5000018")
  const gripperLeftNode = new THREE.Group();
  gripperLeftNode.position.set(-0.041939, -0.0000734, 0);
  gripperLeftNode.quaternion.set(0.5, -0.5, 0.5000018, 0.4999982);
  gripperEndGroup.add(gripperLeftNode);
  const gripperLeftGroup = new THREE.Group();
  gripperLeftNode.add(gripperLeftGroup);

  // Gripper Right Joint (quat="0.4999982 -0.5 -0.5 -0.5000018")
  const gripperRightNode = new THREE.Group();
  gripperRightNode.position.set(-0.041939, 0.0000734, 0);
  gripperRightNode.quaternion.set(-0.5, -0.5, -0.5000018, 0.4999982);
  gripperEndGroup.add(gripperRightNode);
  const gripperRightGroup = new THREE.Group();
  gripperRightNode.add(gripperRightGroup);

  // Initial Studio Hero Pose Joint Angles
  j1AxisGroup.rotation.z = -0.55;
  j2AxisGroup.rotation.z = 0.5;   // Shoulder pitch
  j3AxisGroup.rotation.z = -0.85; // Elbow pitch
  j4AxisGroup.rotation.z = 0.35;  // Wrist pitch
  j5AxisGroup.rotation.z = 0;
  j6AxisGroup.rotation.z = 0;

  // 0. Procedural Instant Fallback Mesh (Guarantees arm is ALWAYS 100% visible)
  const fallbackGroup = new THREE.Group();
  fallbackGroup.scale.set(0.18, 0.18, 0.18);
  armAssemblyGroup.add(fallbackGroup);

  const fbBase = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.08, 32), baseBlackMat);
  fbBase.rotation.x = Math.PI / 2;
  fallbackGroup.add(fbBase);

  const fbBody = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.45, 32), cncMetalMat);
  fbBody.position.set(0, 0.08, 0.25);
  fallbackGroup.add(fbBody);

  let stlSuccessCount = 0;

  // Load Official Brand reBot B601-RS STL Composite Sub-Meshes into URDF Joint Groups
  if (typeof THREE.STLLoader !== 'undefined') {
    const stlLoader = new THREE.STLLoader();

    function loadSubMesh(path, mat, targetGroup, renderOrder = 0) {
      stlLoader.load(path, (geo) => {
        geo.computeVertexNormals();
        const mesh = new THREE.Mesh(geo, mat);
        if (renderOrder) mesh.renderOrder = renderOrder;
        targetGroup.add(mesh);
        stlSuccessCount++;
        if (stlSuccessCount > 3) {
          fallbackGroup.visible = false;
        }
      }, undefined, (err) => {
        console.warn('STL loading fallback active for path:', path, err);
      });
    }

    // 1. Base Link (Black Anodized Metal Base)
    loadSubMesh('models/meshes_rs/base_link.STL', baseBlackMat, baseLinkGroup);

    // 2. Link 1 (Anodized Silver CNC Base Rotating Hub)
    loadSubMesh('models/meshes_rs/link1.STL', cncMetalMat, link1Group);

    // 3. Link 2 (Shoulder Frame & Motors & Seeed Green Accent)
    loadSubMesh('models/meshes_rs/motor_2_3.STL', motorMat, link2Group);
    loadSubMesh('models/meshes_rs/cnc2.STL', cncMetalMat, link2Group);
    loadSubMesh('models/meshes_rs/pla2_black.STL', motorMat, link2Group);
    loadSubMesh('models/meshes_rs/pla2_green.STL', badgeYellowMat, link2Group, 10);

    // 4. Link 3 (Upper Arm Frame & Motor & Seeed Yellow/Green Badge)
    loadSubMesh('models/meshes_rs/cnc3.STL', cncMetalMat, link3Group);
    loadSubMesh('models/meshes_rs/motor_4.STL', motorMat, link3Group);
    loadSubMesh('models/meshes_rs/pla3_black_without_seeed_badge.STL', motorMat, link3Group);
    loadSubMesh('models/meshes_rs/pla3_seeed_badge_with_counters.STL', badgeYellowMat, link3Group, 10);
    loadSubMesh('models/meshes_rs/pla3_seeed_wordmark_backing.STL', motorMat, link3Group);
    loadSubMesh('models/meshes_rs/pla3_green.STL', badgeYellowMat, link3Group, 10);

    // 5. Link 4 (Forearm CNC Frame & Motor 5)
    loadSubMesh('models/meshes_rs/cnc4.STL', cncMetalMat, link4Group);
    loadSubMesh('models/meshes_rs/motor_5.STL', motorMat, link4Group);

    // 6. Link 5 & 6 (Wrist & Gripper Head Yellow Accent)
    loadSubMesh('models/meshes_rs/cnc5.STL', cncMetalMat, link5Group);
    loadSubMesh('models/meshes_rs/motor_6.STL', motorMat, link5Group);
    loadSubMesh('models/meshes_rs/pla5_green.STL', badgeYellowMat, link5Group, 10);
    loadSubMesh('models/meshes_rs/link6.STL', motorMat, link6Group);

    // 7. Gripper Head & End Effector
    loadSubMesh('models/meshes_rs/pla7_green.STL', badgeYellowMat, gripperEndGroup, 10);
    loadSubMesh('models/meshes_rs/cnc7.STL', cncMetalMat, gripperEndGroup);
    loadSubMesh('models/meshes_rs/motor_7.STL', motorMat, gripperEndGroup);

    // 8. Gripper Parallel Claws
    loadSubMesh('models/meshes_rs/cnc_left.STL', cncMetalMat, gripperLeftGroup);
    loadSubMesh('models/meshes_rs/pla_left.STL', badgeYellowMat, gripperLeftGroup, 10);
    loadSubMesh('models/meshes_rs/cnc_right.STL', cncMetalMat, gripperRightGroup);
    loadSubMesh('models/meshes_rs/pla_right.STL', badgeYellowMat, gripperRightGroup, 10);
  }

  // Sandbox Physics & FK Joint State Variables
  let isClawClosed = false;

  const raycaster = new THREE.Raycaster();
  let mouseX_ndc = 0;
  let mouseY_ndc = 0;

  let isDragging = false;
  let dragStartPointerX = 0;
  let dragStartPointerY = 0;
  let dragStartJ1 = 0;
  let dragStartJ2 = 0;
  let dragStartJ3 = 0;
  let dragStartJ4 = 0;

  let currentTargetJ1 = -0.55;
  let currentTargetJ2 = 0.50;
  let currentTargetJ3 = -0.85;
  let currentTargetJ4 = 0.35;
  let currentTargetJ5 = 0.0;
  let currentTargetJ6 = 0.0;

  function handlePointerDown(e) {
    if (e.button !== 0) return;
    isDragging = true;
    dragStartPointerX = e.clientX;
    dragStartPointerY = e.clientY;
    dragStartJ1 = currentTargetJ1;
    dragStartJ2 = currentTargetJ2;
    dragStartJ3 = currentTargetJ3;
    dragStartJ4 = currentTargetJ4;
    canvas.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';

    if (canvas.setPointerCapture) {
      try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
    }
  }

  function handlePointerMove(e) {
    mouseX_ndc = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY_ndc = -(e.clientY / window.innerHeight) * 2 + 1;

    if (isDragging) {
      canvas.style.cursor = 'grabbing';
      const deltaX = e.clientX - dragStartPointerX;
      const deltaY = e.clientY - dragStartPointerY;

      const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

      currentTargetJ1 = clamp(dragStartJ1 - deltaX * 0.008, -2.8, 2.8);
      currentTargetJ2 = clamp(dragStartJ2 - deltaY * 0.005, -0.2, 1.4);
      currentTargetJ3 = clamp(dragStartJ3 + deltaY * 0.006, -1.95, 0.2);
      currentTargetJ4 = clamp(dragStartJ4 - deltaY * 0.004, -1.2, 1.4);
    } else {
      canvas.style.cursor = 'grab';
      // Interactive Gaze Mouse-Tracking physics when not clicking:
      // Base yaw (J1): turn left/right with mouse X (-1 to +1)
      currentTargetJ1 = -0.55 - mouseX_ndc * 1.25;
      // Arm pitch (J2, J3, J4): reach up/down towards mouse Y
      currentTargetJ2 = 0.50 + mouseY_ndc * 0.35;
      currentTargetJ3 = -0.85 - mouseY_ndc * 0.30;
      currentTargetJ4 = 0.35 + mouseY_ndc * 0.20;
    }
  }

  function handlePointerUp(e) {
    if (isDragging) {
      isDragging = false;
      canvas.style.cursor = 'grab';
      document.body.style.userSelect = '';
      if (canvas.releasePointerCapture) {
        try { canvas.releasePointerCapture(e.pointerId); } catch (_) {}
      }
    }
  }

  function handleDblClick(e) {
    isClawClosed = !isClawClosed;
  }

  canvas.addEventListener('pointerdown', handlePointerDown);
  window.addEventListener('pointermove', handlePointerMove);
  window.addEventListener('pointerup', handlePointerUp);
  window.addEventListener('pointercancel', handlePointerUp);
  canvas.addEventListener('dblclick', handleDblClick);

  // Handle Container Resizing & Dynamic Reflow
  function handleResize() {
    if (!container) return;
    const w = getContainerWidth();
    const h = getContainerHeight();
    if (w <= 0 || h <= 0) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  window.addEventListener('resize', handleResize, { passive: true });

  if (typeof ResizeObserver !== 'undefined' && container) {
    const ro = new ResizeObserver(handleResize);
    ro.observe(container);
  }

  // 7. Smooth Interactive Studio Arm Motion Loop
  let time = 0;
  let isHeroArmVisible = true;

  if ('IntersectionObserver' in window) {
    const heroSection = document.querySelector('.unitree-hero-section') || canvas;
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const wasVisible = isHeroArmVisible;
        isHeroArmVisible = entry.isIntersecting;
        if (!wasVisible && isHeroArmVisible) {
          requestAnimationFrame(animate);
        }
      });
    }, { threshold: 0.05 });
    heroObserver.observe(heroSection);
  }

  function animate() {
    if (!isHeroArmVisible) return;
    requestAnimationFrame(animate);
    time += 0.03;

    const baseX = window.innerWidth > 992 ? 1.35 : 0.0;

    // Direct Forward Kinematics Lerp
    j1AxisGroup.rotation.z += (currentTargetJ1 - j1AxisGroup.rotation.z) * 0.25;
    j2AxisGroup.rotation.z += (currentTargetJ2 - j2AxisGroup.rotation.z) * 0.25;
    j3AxisGroup.rotation.z += (currentTargetJ3 - j3AxisGroup.rotation.z) * 0.25;
    j4AxisGroup.rotation.z += (currentTargetJ4 - j4AxisGroup.rotation.z) * 0.25;
    j5AxisGroup.rotation.z += (currentTargetJ5 - j5AxisGroup.rotation.z) * 0.25;
    j6AxisGroup.rotation.z += (currentTargetJ6 - j6AxisGroup.rotation.z) * 0.25;

    robotArmGroup.position.set(baseX, -0.9, 0);
    shadowMesh.position.set(baseX, -0.908, 0);
    coreShadowMesh.position.set(baseX, -0.906, 0);

    // Parallel Gripper Claws Slide
    const clawSlide = isClawClosed ? 0.003 : 0.026;
    gripperLeftGroup.position.z += (clawSlide - gripperLeftGroup.position.z) * 0.2;
    gripperRightGroup.position.z += (clawSlide - gripperRightGroup.position.z) * 0.2;

    renderer.render(scene, camera);
  }

  handleResize();
  animate();
}

/**
 * Lightweight Three.js + Physics Dynamics Engine for Quick Sim-to-Real Sandbox
 * Instant startup (<30ms), zero WASM download delay, 100% smooth real rigid-body physics pick-and-place Jenga simulation.
 */
function initSimJengaArmAnimation() {
  const canvas = document.getElementById('sim-jenga-canvas');
  if (!canvas || typeof THREE === 'undefined') {
    if (!window._simJengaRetryCount) window._simJengaRetryCount = 0;
    if (window._simJengaRetryCount < 20) {
      window._simJengaRetryCount++;
      setTimeout(initSimJengaArmAnimation, 100);
    }
    return;
  }

  const container = canvas.parentElement || document.body;
  const scene = new THREE.Scene();

  const getW = () => container.clientWidth || 600;
  const getH = () => container.clientHeight || 460;

  const camera = new THREE.PerspectiveCamera(34, getW() / getH(), 0.1, 1000);
  camera.position.set(0, 1.15, 7.2);
  camera.lookAt(0, -0.05, 0);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(getW(), getH());
  renderer.setClearColor(0xF8FAFC, 1.0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  // Studio Lighting Setup
  const ambient = new THREE.AmbientLight(0xffffff, 1.4);
  scene.add(ambient);

  const mainLight = new THREE.DirectionalLight(0xffffff, 2.2);
  mainLight.position.set(6, 9, 7);
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0xF1F5F9, 0.9);
  fillLight.position.set(-6, 6, -3);
  scene.add(fillLight);

  // Materials
  const metalMat = new THREE.MeshStandardMaterial({ color: 0xE2E8F0, roughness: 0.25, metalness: 0.72 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x232323, roughness: 0.32, metalness: 0.75 });
  const brandGreenMat = new THREE.MeshStandardMaterial({ color: 0x99DA00, roughness: 0.35, metalness: 0.0 });

  // Clean Light Studio Table Platform
  const tableGeo = new THREE.BoxGeometry(4.8, 0.08, 3.5);
  const tableMat = new THREE.MeshStandardMaterial({ color: 0xE2E8F0, roughness: 0.4, metalness: 0.15 });
  const tableMesh = new THREE.Mesh(tableGeo, tableMat);
  tableMesh.position.set(0, -0.78, 0);
  scene.add(tableMesh);

  // Soft Radial Floor Shadow
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 256;
  shadowCanvas.height = 256;
  const ctx = shadowCanvas.getContext('2d');
  const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, 'rgba(0,0,0,0.45)');
  grad.addColorStop(0.5, 'rgba(0,0,0,0.12)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);
  const shadowTex = new THREE.CanvasTexture(shadowCanvas);

  const floorShadow = new THREE.Mesh(
    new THREE.PlaneGeometry(2.5, 2.5),
    new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.65 })
  );
  floorShadow.rotation.x = -Math.PI / 2;
  floorShadow.position.set(-0.65, -0.73, 0);
  scene.add(floorShadow);

  // Robotic Arm Assembly Group
  const armGroup = new THREE.Group();
  armGroup.position.set(-0.65, -0.74, 0);
  scene.add(armGroup);

  const armScale = 2.6;
  const armSubGroup = new THREE.Group();
  armSubGroup.scale.set(armScale, armScale, armScale);
  armSubGroup.rotation.x = -Math.PI / 2;
  armGroup.add(armSubGroup);

  // 10-Node URDF Kinematic Joint Tree Hierarchy (Full reBot Arm B601-RS Model)
  const baseLinkGroup = new THREE.Group();
  armSubGroup.add(baseLinkGroup);

  const j1Node = new THREE.Group();
  j1Node.position.set(-0.0003428, -0.0009868, 0.075);
  baseLinkGroup.add(j1Node);
  const j1Axis = new THREE.Group();
  j1Node.add(j1Axis);
  const link1Group = new THREE.Group();
  j1Axis.add(link1Group);

  const j2Node = new THREE.Group();
  j2Node.position.set(0.020343, 0.027237, 0.07);
  j2Node.quaternion.set(-0.7071081, 0, 0, 0.7071055);
  link1Group.add(j2Node);
  const j2Axis = new THREE.Group();
  j2Node.add(j2Axis);
  const link2Group = new THREE.Group();
  j2Axis.add(link2Group);

  const j3Node = new THREE.Group();
  j3Node.position.set(-0.236, 0, 0);
  link2Group.add(j3Node);
  const j3Axis = new THREE.Group();
  j3Node.add(j3Axis);
  const link3Group = new THREE.Group();
  j3Axis.add(link3Group);

  const j4Node = new THREE.Group();
  j4Node.position.set(0.228, -0.072746, 0.0045);
  link3Group.add(j4Node);
  const j4Axis = new THREE.Group();
  j4Node.add(j4Axis);
  const link4Group = new THREE.Group();
  j4Axis.add(link4Group);

  const j5Node = new THREE.Group();
  j5Node.position.set(0.087, -0.048, -0.03075);
  j5Node.quaternion.set(-0.7071081, 0, 0, 0.7071055);
  link4Group.add(j5Node);
  const j5Axis = new THREE.Group();
  j5Node.add(j5Axis);
  const link5Group = new THREE.Group();
  j5Axis.add(link5Group);

  const j6Node = new THREE.Group();
  j6Node.position.set(0.0365, 0, 0.048);
  j6Node.quaternion.set(0, 0.7071081, 0, 0.7071055);
  link5Group.add(j6Node);
  const j6Axis = new THREE.Group();
  j6Node.add(j6Axis);
  const link6Group = new THREE.Group();
  j6Axis.add(link6Group);

  const gripperEndNode = new THREE.Group();
  gripperEndNode.position.set(0, 0, 0.16621);
  gripperEndNode.quaternion.set(0.7071055, 0.0000026, 0.7071081, -0.0000026);
  link6Group.add(gripperEndNode);
  const gripperEndGroup = new THREE.Group();
  gripperEndNode.add(gripperEndGroup);

  const gripperLeftNode = new THREE.Group();
  gripperLeftNode.position.set(-0.041939, -0.0000734, 0);
  gripperLeftNode.quaternion.set(0.5, -0.5, 0.5000018, 0.4999982);
  gripperEndGroup.add(gripperLeftNode);
  const gripperLeftGroup = new THREE.Group();
  gripperLeftNode.add(gripperLeftGroup);

  const gripperRightNode = new THREE.Group();
  gripperRightNode.position.set(-0.041939, 0.0000734, 0);
  gripperRightNode.quaternion.set(-0.5, -0.5, -0.5000018, 0.4999982);
  gripperEndGroup.add(gripperRightNode);
  const gripperRightGroup = new THREE.Group();
  gripperRightNode.add(gripperRightGroup);

  // Load All 19 Official Brand reBot B601-RS STL Composite Sub-Meshes
  if (typeof THREE.STLLoader !== 'undefined') {
    const stlLoader = new THREE.STLLoader();
    const loadSubMesh = (path, mat, targetGroup, renderOrder = 0) => {
      stlLoader.load(path, (geo) => {
        geo.computeVertexNormals();
        const mesh = new THREE.Mesh(geo, mat);
        if (renderOrder) mesh.renderOrder = renderOrder;
        targetGroup.add(mesh);
      });
    };

    loadSubMesh('models/meshes_rs/base_link.STL', darkMat, baseLinkGroup);
    loadSubMesh('models/meshes_rs/link1.STL', metalMat, link1Group);
    loadSubMesh('models/meshes_rs/motor_2_3.STL', darkMat, link2Group);
    loadSubMesh('models/meshes_rs/cnc2.STL', metalMat, link2Group);
    loadSubMesh('models/meshes_rs/pla2_black.STL', darkMat, link2Group);
    loadSubMesh('models/meshes_rs/pla2_green.STL', brandGreenMat, link2Group, 10);
    loadSubMesh('models/meshes_rs/cnc3.STL', metalMat, link3Group);
    loadSubMesh('models/meshes_rs/motor_4.STL', darkMat, link3Group);
    loadSubMesh('models/meshes_rs/pla3_black_without_seeed_badge.STL', darkMat, link3Group);
    loadSubMesh('models/meshes_rs/pla3_seeed_badge_with_counters.STL', brandGreenMat, link3Group, 10);
    loadSubMesh('models/meshes_rs/pla3_seeed_wordmark_backing.STL', darkMat, link3Group);
    loadSubMesh('models/meshes_rs/pla3_green.STL', brandGreenMat, link3Group, 10);
    loadSubMesh('models/meshes_rs/cnc4.STL', metalMat, link4Group);
    loadSubMesh('models/meshes_rs/motor_5.STL', darkMat, link4Group);
    loadSubMesh('models/meshes_rs/cnc5.STL', metalMat, link5Group);
    loadSubMesh('models/meshes_rs/motor_6.STL', darkMat, link5Group);
    loadSubMesh('models/meshes_rs/pla5_green.STL', brandGreenMat, link5Group, 10);
    loadSubMesh('models/meshes_rs/link6.STL', darkMat, link6Group);
    loadSubMesh('models/meshes_rs/pla7_green.STL', brandGreenMat, gripperEndGroup, 10);
    loadSubMesh('models/meshes_rs/cnc7.STL', metalMat, gripperEndGroup);
    loadSubMesh('models/meshes_rs/motor_7.STL', darkMat, gripperEndGroup);
    loadSubMesh('models/meshes_rs/cnc_left.STL', metalMat, gripperLeftGroup);
    loadSubMesh('models/meshes_rs/pla_left.STL', brandGreenMat, gripperLeftGroup, 10);
    loadSubMesh('models/meshes_rs/cnc_right.STL', metalMat, gripperRightGroup);
    loadSubMesh('models/meshes_rs/pla_right.STL', brandGreenMat, gripperRightGroup, 10);
  }

  // 3-Color Physics Rigid-Body Wooden Blocks (Red, Yellow, Blue)
  const blockGeo = new THREE.BoxGeometry(0.36, 0.09, 0.16);

  const redMat = new THREE.MeshStandardMaterial({ color: 0xEF4444, roughness: 0.35, metalness: 0.1 });
  const yellowMat = new THREE.MeshStandardMaterial({ color: 0xF59E0B, roughness: 0.35, metalness: 0.1 });
  const blueMat = new THREE.MeshStandardMaterial({ color: 0x3B82F6, roughness: 0.35, metalness: 0.1 });

  const blockRed = new THREE.Mesh(blockGeo, redMat);
  const blockYellow = new THREE.Mesh(blockGeo, yellowMat);
  const blockBlue = new THREE.Mesh(blockGeo, blueMat);

  scene.add(blockRed);
  scene.add(blockYellow);
  scene.add(blockBlue);

  // Table Positions for 3 Blocks
  const POS_RED_TABLE = new THREE.Vector3(-0.35, -0.735, 0.55);
  const POS_YELLOW_TABLE = new THREE.Vector3(-0.08, -0.735, 0.60);
  const POS_BLUE_TABLE = new THREE.Vector3(0.18, -0.735, 0.55);

  // Target Stacking Positions (Base, Layer 2, Layer 3)
  const POS_STACK_1 = new THREE.Vector3(0.60, -0.735, 0.25);
  const POS_STACK_2 = new THREE.Vector3(0.60, -0.645, 0.25);
  const POS_STACK_3 = new THREE.Vector3(0.60, -0.555, 0.25);

  // Physics Bodies State with Rigid Attachment & Precision Clamp
  class PhysicsBody {
    constructor(mesh, initialPos) {
      this.mesh = mesh;
      this.position = initialPos.clone();
      this.targetPos = initialPos.clone();
      this.velocity = new THREE.Vector3();
      this.quaternion = new THREE.Quaternion();
      this.targetQuaternion = new THREE.Quaternion();
      this.isAttached = false;
      this.attachOffset = new THREE.Vector3(0, -0.06, 0);
    }

    update(dt, gripperMesh) {
      if (this.isAttached && gripperMesh) {
        const worldPos = new THREE.Vector3();
        const worldQuat = new THREE.Quaternion();
        gripperMesh.getWorldPosition(worldPos);
        gripperMesh.getWorldQuaternion(worldQuat);

        // Apply local offset relative to end effector
        const offset = this.attachOffset.clone().applyQuaternion(worldQuat);
        this.position.copy(worldPos).add(offset);
        this.quaternion.copy(worldQuat).multiply(rotHorizontal);

        this.mesh.position.copy(this.position);
        this.mesh.quaternion.copy(this.quaternion);
        this.velocity.set(0, 0, 0);
        return;
      }

      const diffPos = this.targetPos.clone().sub(this.position);
      this.velocity.add(diffPos.multiplyScalar(35 * dt));
      this.velocity.multiplyScalar(Math.pow(0.55, dt * 60));
      this.position.add(this.velocity.clone().multiplyScalar(dt));

      this.mesh.position.copy(this.position);
      this.quaternion.slerp(this.targetQuaternion, Math.min(1.0, 25 * dt));
      this.mesh.quaternion.copy(this.quaternion);
    }

    reset(pos) {
      this.isAttached = false;
      this.position.copy(pos);
      this.targetPos.copy(pos);
      this.velocity.set(0, 0, 0);
      this.quaternion.identity();
      this.targetQuaternion.identity();
      this.mesh.position.copy(pos);
      this.mesh.quaternion.identity();
    }
  }

  const physRed = new PhysicsBody(blockRed, POS_RED_TABLE);
  const physYellow = new PhysicsBody(blockYellow, POS_YELLOW_TABLE);
  const physBlue = new PhysicsBody(blockBlue, POS_BLUE_TABLE);

  const rotHorizontal = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, 0));
  const rotZero = new THREE.Quaternion();

  let isStackingActive = true;
  let animTime = 0;
  const loopDuration = 15.0;

  // Helper for smooth cosine interpolation between keyframes
  function smoothStep(t) {
    return 0.5 - 0.5 * Math.cos(Math.max(0, Math.min(1, t)) * Math.PI);
  }

  function lerp(a, b, t) {
    return a + (b - a) * smoothStep(t);
  }

  // Attach button event listeners for 叠叠乐 & 重置
  const btnJenga = document.getElementById('sim-btn-jenga');
  const btnReset = document.getElementById('sim-btn-reset');

  if (btnJenga) {
    btnJenga.addEventListener('click', () => {
      animTime = 0;
      isStackingActive = true;
      physRed.reset(POS_RED_TABLE);
      physYellow.reset(POS_YELLOW_TABLE);
      physBlue.reset(POS_BLUE_TABLE);
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      isStackingActive = false;
      animTime = 0;
      physRed.reset(POS_RED_TABLE);
      physYellow.reset(POS_YELLOW_TABLE);
      physBlue.reset(POS_BLUE_TABLE);
    });
  }

  function handleResize() {
    if (!container) return;
    const w = getW();
    const h = getH();
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  window.addEventListener('resize', handleResize, { passive: true });

  const gripperWorldPos = new THREE.Vector3();
  let lastTime = performance.now();

  function animatePhysicsSimulation() {
    requestAnimationFrame(animatePhysicsSimulation);

    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    let targetJ1 = 0, targetJ2 = 0, targetJ3 = 0, targetJ4 = 0;
    let clawSlide = 0.026;

    gripperEndGroup.getWorldPosition(gripperWorldPos);

    if (isStackingActive) {
      animTime += dt;
      const cycleTime = animTime % loopDuration;

      if (cycleTime < 0.4) {
        // Initial Home Stance
        targetJ1 = 0; targetJ2 = 0; targetJ3 = 0; targetJ4 = 0;
        clawSlide = 0.026;
        physRed.isAttached = false; physYellow.isAttached = false; physBlue.isAttached = false;
        physRed.targetPos.copy(POS_RED_TABLE); physRed.targetQuaternion.copy(rotZero);
        physYellow.targetPos.copy(POS_YELLOW_TABLE); physYellow.targetQuaternion.copy(rotZero);
        physBlue.targetPos.copy(POS_BLUE_TABLE); physBlue.targetQuaternion.copy(rotZero);
      }
      else if (cycleTime < 4.8) {
        // ==========================================
        // TASK 1: RED BLOCK (Touchdown -> Clamp -> Lift -> Swing -> Dip -> Release -> Retract)
        // ==========================================
        physYellow.targetPos.copy(POS_YELLOW_TABLE); physYellow.targetQuaternion.copy(rotZero);
        physBlue.targetPos.copy(POS_BLUE_TABLE); physBlue.targetQuaternion.copy(rotZero);

        if (cycleTime < 1.2) {
          // Stage 1: Approach Above Red Table
          const t = (cycleTime - 0.4) / 0.8;
          targetJ1 = lerp(0, -0.75, t);
          targetJ2 = lerp(0, 0.55, t);
          targetJ3 = lerp(0, -0.70, t);
          targetJ4 = lerp(0, 0.15, t);
          clawSlide = 0.026;
          physRed.isAttached = false;
          physRed.targetPos.copy(POS_RED_TABLE); physRed.targetQuaternion.copy(rotZero);
        } else if (cycleTime < 1.8) {
          // Stage 2: Touchdown on Table Surface
          const t = (cycleTime - 1.2) / 0.6;
          targetJ1 = -0.75;
          targetJ2 = lerp(0.55, 0.92, t);
          targetJ3 = lerp(-0.70, -1.12, t);
          targetJ4 = lerp(0.15, 0.20, t);
          clawSlide = lerp(0.026, -0.005, t);
          physRed.isAttached = false;
          physRed.targetPos.copy(POS_RED_TABLE); physRed.targetQuaternion.copy(rotZero);
        } else if (cycleTime < 2.1) {
          // Stage 3: Clamp & Lock Attachment
          targetJ1 = -0.75; targetJ2 = 0.92; targetJ3 = -1.12; targetJ4 = 0.20;
          clawSlide = -0.005;
          physRed.isAttached = true; // Locked to jaws on the table
        } else if (cycleTime < 2.7) {
          // Stage 4: Lift Block Up into Air
          const t = (cycleTime - 2.1) / 0.6;
          targetJ1 = -0.75;
          targetJ2 = lerp(0.92, 0.45, t);
          targetJ3 = lerp(-1.12, -0.60, t);
          targetJ4 = lerp(0.20, 0.15, t);
          clawSlide = -0.005;
          physRed.isAttached = true;
        } else if (cycleTime < 3.4) {
          // Stage 5: Swing Arm to Stack Position
          const t = (cycleTime - 2.7) / 0.7;
          targetJ1 = lerp(-0.75, 0.55, t);
          targetJ2 = 0.45; targetJ3 = -0.60; targetJ4 = 0.15;
          clawSlide = -0.005;
          physRed.isAttached = true;
        } else if (cycleTime < 4.0) {
          // Stage 6: Dip Down to Stack 1 Surface
          const t = (cycleTime - 3.4) / 0.6;
          targetJ1 = 0.55;
          targetJ2 = lerp(0.45, 0.88, t);
          targetJ3 = lerp(-0.60, -1.08, t);
          targetJ4 = lerp(0.15, 0.20, t);
          clawSlide = lerp(-0.005, 0.026, t);
          physRed.isAttached = (t < 0.8);
          if (!physRed.isAttached) {
            physRed.position.copy(POS_STACK_1); physRed.targetPos.copy(POS_STACK_1); physRed.targetQuaternion.copy(rotHorizontal);
          }
        } else if (cycleTime < 4.3) {
          // Stage 7: Release & Unattach
          targetJ1 = 0.55; targetJ2 = 0.88; targetJ3 = -1.08; targetJ4 = 0.20;
          clawSlide = 0.026;
          physRed.isAttached = false;
          physRed.position.copy(POS_STACK_1); physRed.targetPos.copy(POS_STACK_1); physRed.targetQuaternion.copy(rotHorizontal);
        } else {
          // Stage 8: Retract Arm Up
          const t = (cycleTime - 4.3) / 0.5;
          targetJ1 = 0.55;
          targetJ2 = lerp(0.88, 0.45, t);
          targetJ3 = lerp(-1.08, -0.60, t);
          targetJ4 = lerp(0.20, 0.15, t);
          clawSlide = 0.026;
          physRed.isAttached = false;
          physRed.targetPos.copy(POS_STACK_1); physRed.targetQuaternion.copy(rotHorizontal);
        }
      }
      else if (cycleTime < 9.2) {
        // ==========================================
        // TASK 2: YELLOW BLOCK
        // ==========================================
        physRed.isAttached = false;
        physRed.targetPos.copy(POS_STACK_1); physRed.targetQuaternion.copy(rotHorizontal);
        physBlue.targetPos.copy(POS_BLUE_TABLE); physBlue.targetQuaternion.copy(rotZero);

        if (cycleTime < 5.6) {
          // Stage 1: Approach Above Yellow Table
          const t = (cycleTime - 4.8) / 0.8;
          targetJ1 = lerp(0.55, -0.52, t);
          targetJ2 = lerp(0.45, 0.55, t);
          targetJ3 = lerp(-0.60, -0.70, t);
          targetJ4 = 0.15;
          clawSlide = 0.026;
          physYellow.isAttached = false;
          physYellow.targetPos.copy(POS_YELLOW_TABLE); physYellow.targetQuaternion.copy(rotZero);
        } else if (cycleTime < 6.2) {
          // Stage 2: Touchdown on Yellow Table
          const t = (cycleTime - 5.6) / 0.6;
          targetJ1 = -0.52;
          targetJ2 = lerp(0.55, 0.94, t);
          targetJ3 = lerp(-0.70, -1.16, t);
          targetJ4 = lerp(0.15, 0.22, t);
          clawSlide = lerp(0.026, -0.005, t);
          physYellow.isAttached = false;
          physYellow.targetPos.copy(POS_YELLOW_TABLE); physYellow.targetQuaternion.copy(rotZero);
        } else if (cycleTime < 6.5) {
          // Stage 3: Clamp & Lock Attachment
          targetJ1 = -0.52; targetJ2 = 0.94; targetJ3 = -1.16; targetJ4 = 0.22;
          clawSlide = -0.005;
          physYellow.isAttached = true;
        } else if (cycleTime < 7.1) {
          // Stage 4: Lift Up
          const t = (cycleTime - 6.5) / 0.6;
          targetJ1 = -0.52;
          targetJ2 = lerp(0.94, 0.45, t);
          targetJ3 = lerp(-1.16, -0.60, t);
          targetJ4 = lerp(0.22, 0.15, t);
          clawSlide = -0.005;
          physYellow.isAttached = true;
        } else if (cycleTime < 7.8) {
          // Stage 5: Swing Arm to Stack
          const t = (cycleTime - 7.1) / 0.7;
          targetJ1 = lerp(-0.52, 0.55, t);
          targetJ2 = 0.45; targetJ3 = -0.60; targetJ4 = 0.15;
          clawSlide = -0.005;
          physYellow.isAttached = true;
        } else if (cycleTime < 8.4) {
          // Stage 6: Dip Down to Stack 2 Surface (Top of Red Block)
          const t = (cycleTime - 7.8) / 0.6;
          targetJ1 = 0.55;
          targetJ2 = lerp(0.45, 0.78, t);
          targetJ3 = lerp(-0.60, -0.98, t);
          targetJ4 = lerp(0.15, 0.20, t);
          clawSlide = lerp(-0.005, 0.026, t);
          physYellow.isAttached = (t < 0.8);
          if (!physYellow.isAttached) {
            physYellow.position.copy(POS_STACK_2); physYellow.targetPos.copy(POS_STACK_2); physYellow.targetQuaternion.copy(rotHorizontal);
          }
        } else if (cycleTime < 8.7) {
          // Stage 7: Release & Unattach
          targetJ1 = 0.55; targetJ2 = 0.78; targetJ3 = -0.98; targetJ4 = 0.20;
          clawSlide = 0.026;
          physYellow.isAttached = false;
          physYellow.position.copy(POS_STACK_2); physYellow.targetPos.copy(POS_STACK_2); physYellow.targetQuaternion.copy(rotHorizontal);
        } else {
          // Stage 8: Retract Arm Up
          const t = (cycleTime - 8.7) / 0.5;
          targetJ1 = 0.55;
          targetJ2 = lerp(0.78, 0.45, t);
          targetJ3 = lerp(-0.98, -0.60, t);
          targetJ4 = lerp(0.20, 0.15, t);
          clawSlide = 0.026;
          physYellow.isAttached = false;
          physYellow.targetPos.copy(POS_STACK_2); physYellow.targetQuaternion.copy(rotHorizontal);
        }
      }
      else if (cycleTime < 13.8) {
        // ==========================================
        // TASK 3: BLUE BLOCK
        // ==========================================
        physRed.isAttached = false; physYellow.isAttached = false;
        physRed.targetPos.copy(POS_STACK_1); physRed.targetQuaternion.copy(rotHorizontal);
        physYellow.targetPos.copy(POS_STACK_2); physYellow.targetQuaternion.copy(rotHorizontal);

        if (cycleTime < 10.0) {
          // Stage 1: Approach Above Blue Table
          const t = (cycleTime - 9.2) / 0.8;
          targetJ1 = lerp(0.55, -0.30, t);
          targetJ2 = lerp(0.45, 0.55, t);
          targetJ3 = lerp(-0.60, -0.70, t);
          targetJ4 = 0.15;
          clawSlide = 0.026;
          physBlue.isAttached = false;
          physBlue.targetPos.copy(POS_BLUE_TABLE); physBlue.targetQuaternion.copy(rotZero);
        } else if (cycleTime < 10.6) {
          // Stage 2: Touchdown on Blue Table
          const t = (cycleTime - 10.0) / 0.6;
          targetJ1 = -0.30;
          targetJ2 = lerp(0.55, 0.92, t);
          targetJ3 = lerp(-0.70, -1.14, t);
          targetJ4 = lerp(0.15, 0.22, t);
          clawSlide = lerp(0.026, -0.005, t);
          physBlue.isAttached = false;
          physBlue.targetPos.copy(POS_BLUE_TABLE); physBlue.targetQuaternion.copy(rotZero);
        } else if (cycleTime < 10.9) {
          // Stage 3: Clamp & Lock Attachment
          targetJ1 = -0.30; targetJ2 = 0.92; targetJ3 = -1.14; targetJ4 = 0.22;
          clawSlide = -0.005;
          physBlue.isAttached = true;
        } else if (cycleTime < 11.5) {
          // Stage 4: Lift Up
          const t = (cycleTime - 10.9) / 0.6;
          targetJ1 = -0.30;
          targetJ2 = lerp(0.92, 0.45, t);
          targetJ3 = lerp(-1.14, -0.60, t);
          targetJ4 = lerp(0.22, 0.15, t);
          clawSlide = -0.005;
          physBlue.isAttached = true;
        } else if (cycleTime < 12.2) {
          // Stage 5: Swing Arm to Stack
          const t = (cycleTime - 11.5) / 0.7;
          targetJ1 = lerp(-0.30, 0.55, t);
          targetJ2 = 0.45; targetJ3 = -0.60; targetJ4 = 0.15;
          clawSlide = -0.005;
          physBlue.isAttached = true;
        } else if (cycleTime < 12.8) {
          // Stage 6: Dip Down to Stack 3 Surface (Top of Yellow Block)
          const t = (cycleTime - 12.2) / 0.6;
          targetJ1 = 0.55;
          targetJ2 = lerp(0.45, 0.68, t);
          targetJ3 = lerp(-0.60, -0.88, t);
          targetJ4 = lerp(0.15, 0.20, t);
          clawSlide = lerp(-0.005, 0.026, t);
          physBlue.isAttached = (t < 0.8);
          if (!physBlue.isAttached) {
            physBlue.position.copy(POS_STACK_3); physBlue.targetPos.copy(POS_STACK_3); physBlue.targetQuaternion.copy(rotHorizontal);
          }
        } else if (cycleTime < 13.1) {
          // Stage 7: Release & Unattach
          targetJ1 = 0.55; targetJ2 = 0.68; targetJ3 = -0.88; targetJ4 = 0.20;
          clawSlide = 0.026;
          physBlue.isAttached = false;
          physBlue.position.copy(POS_STACK_3); physBlue.targetPos.copy(POS_STACK_3); physBlue.targetQuaternion.copy(rotHorizontal);
        } else {
          // Stage 8: Retract Arm Up
          const t = (cycleTime - 13.1) / 0.7;
          targetJ1 = 0.55;
          targetJ2 = lerp(0.68, 0.40, t);
          targetJ3 = lerp(-0.88, -0.55, t);
          targetJ4 = lerp(0.20, 0.15, t);
          clawSlide = 0.026;
          physBlue.isAttached = false;
          physBlue.targetPos.copy(POS_STACK_3); physBlue.targetQuaternion.copy(rotHorizontal);
        }
      }
      else {
        // Showcase Stack & Return Arm to Home Stance
        physRed.isAttached = false; physYellow.isAttached = false; physBlue.isAttached = false;
        physRed.targetPos.copy(POS_STACK_1); physRed.targetQuaternion.copy(rotHorizontal);
        physYellow.targetPos.copy(POS_STACK_2); physYellow.targetQuaternion.copy(rotHorizontal);
        physBlue.targetPos.copy(POS_STACK_3); physBlue.targetQuaternion.copy(rotHorizontal);

        const t = (cycleTime - 13.8) / 1.2;
        targetJ1 = lerp(0.55, 0, t);
        targetJ2 = lerp(0.40, 0, t);
        targetJ3 = lerp(-0.55, 0, t);
        targetJ4 = lerp(0.15, 0, t);
        clawSlide = 0.026;
      }
    } else {
      // RESET STATE: Arm to home stance, Blocks to table
      targetJ1 = 0; targetJ2 = 0; targetJ3 = 0; targetJ4 = 0;
      clawSlide = 0.026;
      physRed.reset(POS_RED_TABLE);
      physYellow.reset(POS_YELLOW_TABLE);
      physBlue.reset(POS_BLUE_TABLE);
    }

    // Update Physics Rigid Bodies
    physRed.update(dt, gripperEndGroup);
    physYellow.update(dt, gripperEndGroup);
    physBlue.update(dt, gripperEndGroup);

    // Parallel Gripper Claws Slide Physics
    gripperLeftGroup.position.z += (clawSlide - gripperLeftGroup.position.z) * 0.25;
    gripperRightGroup.position.z += (clawSlide - gripperRightGroup.position.z) * 0.25;

    // Apply Smooth Mass-Spring Motor Dynamics to Robot Arm Joints
    j1Axis.rotation.z += (targetJ1 - j1Axis.rotation.z) * 0.14;
    j2Axis.rotation.z += (targetJ2 - j2Axis.rotation.z) * 0.14;
    j3Axis.rotation.z += (targetJ3 - j3Axis.rotation.z) * 0.14;
    j4Axis.rotation.z += (targetJ4 - j4Axis.rotation.z) * 0.14;

    renderer.render(scene, camera);
  }

  handleResize();
  animatePhysicsSimulation();
}

/**
 * Lazy load MuJoCo WASM Simulation iframe when scrolled into viewport
 */
function initLazySimIframe() {
  const iframe = document.getElementById('sim-mujoco-iframe');
  if (!iframe || !iframe.dataset.src) return;

  const loadIframe = () => {
    if (iframe.dataset.src) {
      iframe.src = iframe.dataset.src;
      delete iframe.dataset.src;
    }
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadIframe();
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '300px 0px' });

    observer.observe(iframe);
  } else {
    loadIframe();
  }
}

/**
 * Auto play/pause showcase videos based on viewport visibility
 */
function initVideoViewportController() {
  const videos = document.querySelectorAll('.high-performance-section video, .video-card video');
  if (!videos.length || !('IntersectionObserver' in window)) return;

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.15 });

  videos.forEach(v => videoObserver.observe(v));
}
