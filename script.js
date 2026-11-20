/**
 * Nitheesh Kumar VSM — Portfolio Frontend Script
 * Strictly sourced from Portfolio copy & ChatController.java
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. NAVIGATION (Scroll Elevation, Mobile Toggle, Active Spy)
  // ==========================================================================
  const navbarWrapper = document.querySelector('.navbar-wrapper');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section, footer');

  // Sticky Navbar Shadow
  window.addEventListener('scroll', () => {
    if (navbarWrapper) {
      if (window.scrollY > 25) {
        navbarWrapper.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
      } else {
        navbarWrapper.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.15)';
      }
    }

    // Scrollspy for active nav link
    let current = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Mobile Hamburger Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================================================
  // 2. HERO IMAGE CAROUSEL (3 Slides from Portfolio copy)
  // ==========================================================================
  const heroTrack = document.getElementById('hero-track');
  const heroDots = document.querySelectorAll('#hero-dots .dot');
  const heroPrev = document.getElementById('hero-prev');
  const heroNext = document.getElementById('hero-next');
  let currentHeroIndex = 0;
  const totalHeroSlides = 3;
  let heroInterval = null;

  function setHeroSlide(idx) {
    if (!heroTrack) return;
    currentHeroIndex = (idx + totalHeroSlides) % totalHeroSlides;
    heroTrack.style.transform = `translateX(-${currentHeroIndex * 100}%)`;

    heroDots.forEach((dot, dIdx) => {
      dot.classList.toggle('active', dIdx === currentHeroIndex);
    });
  }

  function startHeroAutoPlay() {
    stopHeroAutoPlay();
    heroInterval = setInterval(() => {
      setHeroSlide(currentHeroIndex + 1);
    }, 4500);
  }

  function stopHeroAutoPlay() {
    if (heroInterval) clearInterval(heroInterval);
  }

  if (heroTrack) {
    heroDots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
        setHeroSlide(targetIdx);
        startHeroAutoPlay();
      });
    });

    if (heroPrev) {
      heroPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        setHeroSlide(currentHeroIndex - 1);
        startHeroAutoPlay();
      });
    }

    if (heroNext) {
      heroNext.addEventListener('click', (e) => {
        e.stopPropagation();
        setHeroSlide(currentHeroIndex + 1);
        startHeroAutoPlay();
      });
    }

    const heroContainer = document.querySelector('.slider-container');
    if (heroContainer) {
      heroContainer.addEventListener('mouseenter', stopHeroAutoPlay);
      heroContainer.addEventListener('mouseleave', startHeroAutoPlay);

      // Touch / Swipe support for Hero
      let heroTouchStartX = 0;
      let heroTouchEndX = 0;
      heroContainer.addEventListener('touchstart', (e) => {
        heroTouchStartX = e.touches[0].clientX;
        stopHeroAutoPlay();
      }, { passive: true });

      heroContainer.addEventListener('touchend', (e) => {
        heroTouchEndX = e.changedTouches[0].clientX;
        const diff = heroTouchStartX - heroTouchEndX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) setHeroSlide(currentHeroIndex + 1);
          else setHeroSlide(currentHeroIndex - 1);
        }
        startHeroAutoPlay();
      }, { passive: true });
    }

    startHeroAutoPlay();
  }

  // ==========================================================================
  // 3. PROJECT SLIDER CAROUSELS (Offline Gym System & ShaSha Enterprises)
  // ==========================================================================
  function initCarousel(containerId, slideClass, dotsId, prevId, nextId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const track = container.querySelector('.project-slider-track');
    const slides = container.querySelectorAll(slideClass);
    const dots = document.querySelectorAll(`#${dotsId} .p-dot`);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);
    let currentIndex = 0;
    const total = slides.length;
    let timer = null;

    if (!total) return;

    function showSlide(idx) {
      currentIndex = (idx + total) % total;
      if (track) {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
      slides.forEach((slide, sIdx) => {
        slide.classList.toggle('active', sIdx === currentIndex);
      });
      dots.forEach((dot, dIdx) => {
        dot.classList.toggle('active', dIdx === currentIndex);
      });
    }

    function startAuto() {
      stopAuto();
      timer = setInterval(() => showSlide(currentIndex + 1), 4200);
    }

    function stopAuto() {
      if (timer) clearInterval(timer);
    }

    if (prev) {
      prev.addEventListener('click', (e) => {
        e.stopPropagation();
        showSlide(currentIndex - 1);
        startAuto();
      });
    }

    if (next) {
      next.addEventListener('click', (e) => {
        e.stopPropagation();
        showSlide(currentIndex + 1);
        startAuto();
      });
    }

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
        showSlide(targetIdx);
        startAuto();
      });
    });

    // Touch / Swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    container.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      stopAuto();
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) showSlide(currentIndex + 1);
        else showSlide(currentIndex - 1);
      }
      startAuto();
    }, { passive: true });

    container.addEventListener('mouseenter', stopAuto);
    container.addEventListener('mouseleave', startAuto);
    showSlide(0);
    startAuto();
  }

  initCarousel('project-slider-container', '.proj-slide-wrap', 'proj-dots', 'proj-prev', 'proj-next');
  initCarousel('shasha-slider-container', '.shasha-slide-wrap', 'shasha-dots', 'shasha-prev', 'shasha-next');

  // ==========================================================================
  // 4. FULL-SIZE LIGHTBOX GALLERY (All Assets from Portfolio copy)
  // ==========================================================================
  const GALLERY_ITEMS = [
    {
      src: './source/DP.jpeg',
      badge: 'ENGINEER BADGE',
      caption: 'Nitheesh Kumar VSM — Profile Avatar & Official Developer Portrait'
    },
    {
      src: './source/image-1.jpg',
      badge: 'SYSTEMS WORKSPACE',
      caption: 'Enterprise Systems Architecture & Engineering Workbench (Hero Slide 1)'
    },
    {
      src: './source/image-2.webp',
      badge: 'APPLICATION ARCHITECTURE',
      caption: 'Desktop Application Engineering & UI Architecture (Hero Slide 2)'
    },
    {
      src: './source/image-4.jpg',
      badge: 'ENGINEERING LAB',
      caption: 'Desktop Application Engineering & Prototyping (Hero Slide 3)'
    },
    {
      src: './source/roadmap.PNG',
      badge: 'ACADEMIC & CAREER ROADMAP',
      caption: 'Academic & Career Trajectory Roadmap — Anna University B.E. (CGPA: 7.2)'
    },
    {
      src: './source/road.png',
      badge: 'TECHNICAL SKILLS WORKFLOW',
      caption: 'Technical Skills Workflow & Full Stack Architecture Diagram'
    },
    {
      src: './source/ui-image-1.png',
      badge: 'OFFLINE GYM ERP',
      caption: 'Offline Gym Management System — Operations Dashboard Analytics UI'
    },
    {
      src: './source/ui-image-2.png',
      badge: 'OFFLINE GYM ERP',
      caption: 'Offline Gym Management System — Membership & Subscription Billing UI'
    },
    {
      src: './source/image-3.jpg',
      badge: 'OFFLINE GYM ERP',
      caption: 'Offline Gym Management System — Member & Trainer Operations UI'
    },
    {
      src: './source/shasha-storefront.jpg',
      badge: 'COMMERCIAL SHOWROOM',
      caption: 'ShaSha Enterprises — Complete Industrial Hardware, Electrical & Paints Storefront'
    },
    {
      src: './source/shasha-catalog-ui.webp',
      badge: 'E-COMMERCE PLATFORM UI',
      caption: 'ShaSha Enterprises — Full-Stack Product Catalog & Online Ordering Platform'
    },
    {
      src: './source/shasha-inventory.jpg',
      badge: 'INVENTORY OPERATIONS',
      caption: 'ShaSha Enterprises — Commercial Showroom & Wholesale Inventory Operations'
    }
  ];

  let currentLightboxIdx = 0;
  const modal = document.getElementById('image-lightbox');
  const backdrop = document.getElementById('lightbox-backdrop');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const imgEl = document.getElementById('lightbox-img');
  const viewport = document.getElementById('lightbox-viewport');
  const captionEl = document.getElementById('lightbox-caption');
  const badgeEl = document.getElementById('lightbox-badge');
  const counterEl = document.getElementById('lightbox-counter');
  const linkEl = document.getElementById('lightbox-original-link');

  function renderLightbox(idx) {
    if (idx < 0) idx = GALLERY_ITEMS.length - 1;
    if (idx >= GALLERY_ITEMS.length) idx = 0;
    currentLightboxIdx = idx;

    const item = GALLERY_ITEMS[currentLightboxIdx];
    if (!imgEl) return;

    imgEl.classList.remove('zoomed');
    imgEl.src = item.src;
    imgEl.alt = item.caption;

    if (captionEl) captionEl.textContent = item.caption;
    if (badgeEl) badgeEl.textContent = item.badge;
    if (counterEl) counterEl.textContent = `${currentLightboxIdx + 1} / ${GALLERY_ITEMS.length}`;
    if (linkEl) linkEl.href = item.src;
  }

  function openLightbox(targetSrc) {
    if (!modal) return;
    let targetIdx = 0;

    if (typeof targetSrc === 'string') {
      const cleanTarget = targetSrc.split('?')[0].replace('./', '');
      const found = GALLERY_ITEMS.findIndex(item => {
        const itemClean = item.src.replace('./', '');
        return itemClean.includes(cleanTarget) || cleanTarget.includes(itemClean);
      });
      if (found !== -1) targetIdx = found;
    } else if (typeof targetSrc === 'number') {
      targetIdx = targetSrc;
    }

    renderLightbox(targetIdx);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (imgEl) imgEl.classList.remove('zoomed');
  }

  // Attach Lightbox triggers to all elements with data-lightbox="true"
  document.querySelectorAll('[data-lightbox="true"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const src = el.getAttribute('data-src') || el.querySelector('img')?.src;
      if (src) openLightbox(src);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      renderLightbox(currentLightboxIdx - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      renderLightbox(currentLightboxIdx + 1);
    });
  }

  // Toggle 1:1 Zoom
  if (viewport) {
    viewport.addEventListener('click', (e) => {
      if (e.target === imgEl) {
        imgEl.classList.toggle('zoomed');
      }
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') renderLightbox(currentLightboxIdx - 1);
    else if (e.key === 'ArrowRight') renderLightbox(currentLightboxIdx + 1);
  });

  // ==========================================================================
  // 5. AI CHATBOT ENGINE (Unified with ChatController.java Context)
  // ==========================================================================
  const chatToggle = document.getElementById('chat-toggle');
  const chatClose = document.getElementById('chat-close');
  const chatWindow = document.getElementById('chat-window');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  const chatSend = document.getElementById('chat-send');
  const chatChips = document.querySelectorAll('.chat-chip');

  // Backend Endpoints
  const PRIMARY_BACKEND = 'https://portfolio-api-mt7w.onrender.com/api/chat';
  const LOCAL_BACKEND = 'http://localhost:8080/api/chat';

  // Strict Knowledge Base (From Portfolio copy/chatbot/src/main/java/com/nitheesh/chatbot/ChatController.java)
  const LOCAL_KNOWLEDGE = [
    {
      keywords: ['project', 'gym', 'offline', 'management', 'wix', 'sqlite', 'attendance'],
      answer: "Nitheesh engineered the **Offline Gym Management System** using **Java, JavaFX, JDBC, SQL, SQLite, and WiX Toolset** with a custom Figma UI. It handles member and trainer management, attendance tracking, secure authentication, and dashboard analytics completely offline with zero SaaS dependencies.\n\nSource code: [github.com/Nitheesh-exe/Aim-Fitness-System-App.git](https://github.com/Nitheesh-exe/Aim-Fitness-System-App.git)"
    },
    {
      keywords: ['shasha', 'ecommerce', 'e-commerce', 'hardware', 'store', 'shop', 'order', 'boq'],
      answer: "Nitheesh architected and deployed **ShaSha Enterprises** (www.shashaenterprise.in), a full-stack B2B/B2C e-commerce platform for an industrial hardware and electrical supplies business using **Java 21, Spring Boot 3.3, Spring Security, Spring Data JPA, PostgreSQL, HTML5, CSS3, and Vanilla JavaScript** with direct WhatsApp BOQ inquiry ordering.\n\nSource code: [github.com/Nitheesh-exe/Shasha-backend.git](https://github.com/Nitheesh-exe/Shasha-backend.git)\nLive Platform: [shashaenterprise.in](https://www.shashaenterprise.in)"
    },
    {
      keywords: ['education', 'degree', 'college', 'anna', 'university', 'cgpa', 'school', 'marks', 'academic'],
      answer: "Nitheesh graduated with a **B.E. in Electrical and Electronics Engineering** from **Anna University** with a **CGPA of 7.2** (Class of 2025)."
    },
    {
      keywords: ['experience', 'work', 'background', 'profile', 'career'],
      answer: "Nitheesh is a **Full Stack Java Developer** who has engineered and deployed robust full-stack and desktop systems, including the **Offline Gym Management System** (JavaFX, SQLite, WiX) and **ShaSha Enterprises** (Spring Boot 3.3, PostgreSQL, WhatsApp API)."
    },
    {
      keywords: ['skill', 'skills', 'stack', 'tech', 'technology', 'java', 'spring', 'postgres', 'sql', 'figma'],
      answer: "Nitheesh's core technical stack includes:\n• **Languages & Backend:** Java (Core & OOP), Spring Boot & MVC, PostgreSQL, SQL, SQLite, JDBC\n• **Desktop & Architecture:** JavaFX, WiX Toolset\n• **Web & Frontend:** HTML5, CSS3, JavaScript\n• **Tools & Workflow:** Git, GitHub, Figma"
    },
    {
      keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'call', 'mail', 'message', 'number'],
      answer: "You can reach Nitheesh directly at:\n• **Email:** [nitheesh.exe@gmail.com](mailto:nitheesh.exe@gmail.com)\n• **Phone:** [+91 9345507516](tel:+919345507516)\n• **LinkedIn:** [linkedin.com/in/nitheeshkumar2003](https://linkedin.com/in/nitheeshkumar2003)\n• **GitHub:** [github.com/Nitheesh-exe](https://github.com/Nitheesh-exe)\n• **WhatsApp:** [+91 9345507516](https://wa.me/919345507516)"
    },
    {
      keywords: ['who', 'about', 'nitheesh', 'role', 'developer', 'intro', 'name'],
      answer: "Hi! I'm **Nitheesh Kumar VSM**, a **Full Stack Java Developer** passionate about building high-quality desktop and web applications with Java, Spring Boot, PostgreSQL, and JavaFX."
    }
  ];

  function getLocalFallbackAnswer(query) {
    const q = query.toLowerCase().trim();

    // Check specific knowledge categories
    for (const item of LOCAL_KNOWLEDGE) {
      if (item.keywords.some(kw => q.includes(kw))) {
        return item.answer;
      }
    }

    // Default polite redirection according to ChatController.java rules
    return "I am Nitheesh's portfolio AI assistant. I can only answer questions related to Nitheesh Kumar's education (Anna University, CGPA 7.2), skills (Java, Spring Boot, JavaFX, PostgreSQL), and his featured projects (Offline Gym System and ShaSha Enterprises). How can I help you regarding his work?";
  }

  // Append Chat Message
  function appendChatMessage(text, sender) {
    if (!chatMessages) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${sender}-msg`;

    if (sender === 'bot') {
      const icon = document.createElement('i');
      icon.className = 'fa-solid fa-robot bot-icon';
      msgDiv.appendChild(icon);
    }

    const contentDiv = document.createElement('div');
    contentDiv.className = 'msg-content';
    
    // Parse basic markdown links and bold formatting
    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\n/g, '<br>');

    contentDiv.innerHTML = formattedText;
    msgDiv.appendChild(contentDiv);
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Handle Chat Input
  async function handleChat(queryText) {
    const text = (queryText || (chatInput ? chatInput.value : '')).trim();
    if (!text) return;

    appendChatMessage(text, 'user');
    if (chatInput) chatInput.value = '';

    // Typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'msg bot-msg typing-indicator-msg';
    typingDiv.innerHTML = '<i class="fa-solid fa-robot bot-icon"></i><div class="msg-content">Thinking...</div>';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    let responseReceived = false;

    // Try Primary Render Backend with timeout
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const response = await fetch(PRIMARY_BACKEND, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: text,
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const reply = await response.text();
        if (reply && reply.trim()) {
          typingDiv.remove();
          appendChatMessage(reply.trim(), 'bot');
          responseReceived = true;
        }
      }
    } catch (err) {
      // Primary backend asleep or network error; try localhost
    }

    if (!responseReceived) {
      try {
        const localController = new AbortController();
        const localTimeout = setTimeout(() => localController.abort(), 2000);

        const localRes = await fetch(LOCAL_BACKEND, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: text,
          signal: localController.signal
        });
        clearTimeout(localTimeout);

        if (localRes.ok) {
          const localReply = await localRes.text();
          if (localReply && localReply.trim()) {
            typingDiv.remove();
            appendChatMessage(localReply.trim(), 'bot');
            responseReceived = true;
          }
        }
      } catch (e) {
        // Fallback to local deterministic rules
      }
    }

    if (!responseReceived) {
      typingDiv.remove();
      const fallbackReply = getLocalFallbackAnswer(text);
      appendChatMessage(fallbackReply, 'bot');
    }
  }

  // Chat window open/close
  if (chatToggle && chatWindow) {
    chatToggle.addEventListener('click', () => {
      const isHidden = chatWindow.classList.toggle('chat-hidden');
      chatToggle.setAttribute('aria-expanded', !isHidden);
      if (!isHidden && chatInput) {
        setTimeout(() => chatInput.focus(), 250);
      }
    });
  }

  if (chatClose && chatWindow) {
    chatClose.addEventListener('click', () => {
      chatWindow.classList.add('chat-hidden');
      if (chatToggle) chatToggle.setAttribute('aria-expanded', 'false');
    });
  }

  if (chatSend && chatInput) {
    chatSend.addEventListener('click', () => handleChat());
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleChat();
    });
  }

  // Quick Chips
  chatChips.forEach(chip => {
    chip.addEventListener('click', () => {
      handleChat(chip.textContent.trim());
    });
  });

  // ==========================================================================
  // 6. CLIPBOARD TOAST (Email Copy)
  // ==========================================================================
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('copy-toast');
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    const msgEl = document.getElementById('toast-message');
    if (msgEl) msgEl.textContent = msg;

    toast.classList.add('visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 2800);
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = 'nitheesh.exe@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        showToast('Email copied: nitheesh.exe@gmail.com');
      } catch (err) {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast('Email copied: nitheesh.exe@gmail.com');
      }
    });
  }

});
