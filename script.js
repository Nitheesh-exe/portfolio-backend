/**
 * NITHEESH KUMAR VSM — SYSTEMS ARCHITECT & JAVA DEVELOPER
 * Vanilla JavaScript Engine:
 * 1. Ambient Op-Art Canvas (Electric Cyan & Sapphire Orbs)
 * 2. Interactive 7-Layer Desktop ERP Architecture Explorer
 * 3. Flagship Media Switcher
 * 4. Systems Matrix Bento Filter
 * 5. One-Click Clipboard Telemetry & Toast
 * 6. High-Performance Terminal Chatbot (Online Render + Deterministic Local NLP)
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. AIM FITNESS PARK 7-LAYER ARCHITECTURAL STACK DATA
  // ==========================================================================
  const LAYER_DATA = {
    1: {
      badge: 'LAYER 01 // RUNTIME ENGINE',
      title: 'Native Zulu OpenJDK 25 Standalone Runtime',
      desc: 'Zero runtime dependencies on client machines. Standalone native packaging bundling the 64-bit Zulu OpenJDK 25 Server VM directly via jpackage, delivering deterministic low-latency execution and advanced generational memory management.',
      tags: ['Zulu OpenJDK 25', 'Zero-SaaS Standalone', 'jpackage Native Image']
    },
    2: {
      badge: 'LAYER 02 // PERSISTENCE LAYER',
      title: 'SQLite 3.45 WAL Engine & JDBC Connection Pool',
      desc: 'High-reliability local database operating with Write-Ahead Logging (WAL) and memory-mapped I/O (PRAGMA mmap_size). Engineered with explicit Data Access Object (DAO) patterns to guarantee zero data loss on unexpected power cuts.',
      tags: ['SQLite 3.45 WAL', 'JDBC DAO Architecture', 'ACID Transactions']
    },
    3: {
      badge: 'LAYER 03 // PRESENTATION ENGINE',
      title: 'JavaFX 25 Hardware-Accelerated FXML UI',
      desc: 'Modular 11-screen declarative FXML view architecture rendered via GPU graphics pipeline. Custom CSS styling engineered for high-throughput gym reception operations, instant barcode member lookups, and zero visual stutter.',
      tags: ['JavaFX 25 FXML', 'Hardware Acceleration', '11-Screen Figma Spec']
    },
    4: {
      badge: 'LAYER 04 // CONCURRENCY LOOP',
      title: 'Non-Blocking Background Concurrency (Platform.runLater)',
      desc: 'Decoupled UI thread orchestration. Database writes, heavy reporting queries, and background external synchronization run on dedicated worker pools, dispatching safe delta updates to the JavaFX application thread within a strict 16ms frame budget.',
      tags: ['Sub-16ms Frame Budget', 'Platform.runLater()', 'Worker Pool Decoupling']
    },
    5: {
      badge: 'LAYER 05 // TELEMETRY BRIDGE',
      title: 'Meta WhatsApp Cloud API Automated Renewal Dispatcher',
      desc: 'Automated event-driven notification bridge monitoring membership expiration thresholds. Dispatches personalized renewal reminders via official Meta Cloud webhooks, driving a +35% turnaround in member renewals without manual receptionist intervention.',
      tags: ['Meta Cloud API Webhooks', '+35% Renewal Turnaround', 'Event Trigger Engine']
    },
    6: {
      badge: 'LAYER 06 // AUDIT & SECURITY',
      title: 'Role-Based Access Control (RBAC) & Invoicing Ledger',
      desc: 'Cryptographically hashed credentials (BCrypt), role-gated administrative modules, tamper-evident audit logging of member fee collections, and automated GST/cash receipts generator eliminating revenue slippage.',
      tags: ['BCrypt Auth', 'RBAC Security Governance', 'Tamper-Evident Ledger']
    },
    7: {
      badge: 'LAYER 07 // DEPLOYMENT RUNTIME',
      title: 'WiX Toolset & Native OS Bundler',
      desc: 'Completely self-contained MSI/EXE deployment artifact compiling Java bytecode, native OS libraries, and SQLite storage into signed standalone installers. Zero manual JRE/JDK setup required on client gym hardware.',
      tags: ['WiX Toolset v3/v4', 'Native .exe Installer', 'Zero-Install JRE']
    }
  };

  // ==========================================================================
  // 2. AMBIENT OP-ART CANVAS (Electric Cyan & Sapphire Atmospheric Orbs)
  // ==========================================================================
  function initAuroraCanvas() {
    const canvas = document.getElementById('aurora-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let animationFrameId = null;
    let mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };

    const orbs = [
      { x: 0.25, y: 0.35, radius: 0.48, vx: 0.0003, vy: 0.0002, color: 'rgba(56, 189, 248, 0.14)' },  // Electric Cyan
      { x: 0.75, y: 0.45, radius: 0.42, vx: -0.0002, vy: 0.0003, color: 'rgba(37, 99, 235, 0.12)' },  // Royal Sapphire
      { x: 0.50, y: 0.80, radius: 0.50, vx: 0.0002, vy: -0.0002, color: 'rgba(16, 185, 129, 0.06)' }, // Emerald
      { x: 0.85, y: 0.20, radius: 0.35, vx: -0.0003, vy: -0.0002, color: 'rgba(255, 255, 255, 0.02)' }
    ];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();

    window.addEventListener('mousemove', function (e) {
      mouse.targetX = e.clientX / width;
      mouse.targetY = e.clientY / height;
    }, { passive: true });

    function render() {
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const maxDim = Math.max(width, height);

      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 0.1 || orb.x > 0.9) orb.vx = -orb.vx;
        if (orb.y < 0.1 || orb.y > 0.9) orb.vy = -orb.vy;

        const posX = (orb.x + (mouse.x - 0.5) * 0.08) * width;
        const posY = (orb.y + (mouse.y - 0.5) * 0.08) * height;
        const r = orb.radius * maxDim;

        const grad = ctx.createRadialGradient(posX, posY, 0, posX, posY, r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(posX, posY, r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();
  }

  // ==========================================================================
  // 3. 7-LAYER ARCHITECTURE EXPLORER
  // ==========================================================================
  function initLayerExplorer() {
    const tabs = document.querySelectorAll('.layer-tab');
    const badgeEl = document.getElementById('layer-inspect-id');
    const titleEl = document.getElementById('layer-inspect-title');
    const descEl = document.getElementById('layer-inspect-desc');
    const tagsEl = document.getElementById('layer-inspect-tags');

    if (!tabs.length || !badgeEl || !titleEl || !descEl || !tagsEl) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });

        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');

        const layerId = this.dataset.layer;
        const data = LAYER_DATA[layerId];
        if (!data) return;

        badgeEl.textContent = data.badge;
        titleEl.textContent = data.title;
        descEl.textContent = data.desc;

        tagsEl.innerHTML = '';
        data.tags.forEach(tag => {
          const span = document.createElement('span');
          span.className = 'inspect-tag';
          span.textContent = tag;
          tagsEl.appendChild(span);
        });
      });
    });
  }

  // ==========================================================================
  // 4. FLAGSHIP MEDIA SWITCHER
  // ==========================================================================
  function initMediaSwitcher() {
    const tabs = document.querySelectorAll('.media-tab');
    const imgEl = document.getElementById('flagship-media-img');
    const captionEl = document.getElementById('flagship-media-caption');

    if (!tabs.length || !imgEl || !captionEl) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const src = this.dataset.src;
        const caption = this.dataset.caption;

        if (src) imgEl.src = src;
        if (caption) captionEl.textContent = caption;
      });
    });
  }

  // ==========================================================================
  // 5. BENTO GRID SYSTEMS MATRIX FILTER
  // ==========================================================================
  function initBentoFilter() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.bento-card');

    if (!btns.length || !cards.length) return;

    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        btns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.filter;

        cards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // ==========================================================================
  // 6. ONE-CLICK EMAIL COPY & TOAST
  // ==========================================================================
  function initEmailCopy() {
    const copyBtns = document.querySelectorAll('.copy-btn');
    const toast = document.getElementById('toast');
    let toastTimeout = null;

    copyBtns.forEach(btn => {
      btn.addEventListener('click', async function () {
        const text = this.dataset.copy || 'nitheesh.exe@gmail.com';
        try {
          await navigator.clipboard.writeText(text);
          showToast(`Copied to clipboard: ${text}`);
        } catch (err) {
          // Fallback
          const ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          showToast(`Copied to clipboard: ${text}`);
        }
      });
    });

    function showToast(msg) {
      if (!toast) return;
      const textEl = document.getElementById('toast-message');
      if (textEl) textEl.textContent = msg;

      toast.classList.add('toast-visible');
      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('toast-visible');
      }, 3000);
    }
  }

  // ==========================================================================
  // 7. UNIFIED CHATBOT ENGINE (Floating Widget + Inline Terminal Console)
  // ==========================================================================
  const BACKEND_URL = 'https://portfolio-api-mt7w.onrender.com';
  let isBackendWarmed = false;

  const LOCAL_KNOWLEDGE = [
    {
      keywords: ['aim', 'fitness', 'gym', 'erp', 'desktop', 'javafx', 'fxml', 'wix', 'jpackage', 'whatsapp'],
      answer: "AIM Fitness Park is an **enterprise offline desktop ERP** built with Zulu OpenJDK 25, JavaFX, FXML, JDBC, and SQLite. It manages **1,200+ active members** on-site with zero recurring SaaS fees, uses non-blocking multi-threaded sync (`Platform.runLater()`), bundles native `.exe`/`.dmg` installers via WiX & jpackage, and delivers a **+35% renewal turnaround** via Meta WhatsApp Cloud API webhooks."
    },
    {
      keywords: ['shasha', 'enterprise', 'b2b', 'inventory', 'sku', 'skus', 'showroom', 'boq'],
      answer: "Shasha Enterprises is a live commercial B2B platform ([shashaenterprise.in](https://shashaenterprise.in)) managing **2,624+ live SKUs**. Backed by **Spring Boot 3.3**, Spring Security (RBAC), Spring AOP audit logging, and **PostgreSQL**, with a zero-dependency debounced search engine and an automated Python/Pillow WebP pipeline that cut payload size by **-70%**."
    },
    {
      keywords: ['analysis', 'sad', 'rgd', 'bmc', 'requirements', 'workflow', 'figma'],
      answer: "Rigorous 3-tier Software Analysis methodology:\n1. **Business Model Canvas (BMC):** Aligns value propositions, cost structure, and operational workflows.\n2. **Requirement Gathering Document (RGD):** Defines functional/non-functional specs, actors, and validation constraints.\n3. **System Architecture Document (SAD):** Maps ERDs, UML diagrams, and 11-screen interactive Figma prototypes before implementation."
    },
    {
      keywords: ['education', 'college', 'degree', 'anna university', 'cgpa', 'school', 'university', 'certs', 'certification', 'certifications', 'certificate', 'credentials'],
      answer: "Academic & Certification credentials:\n• **B.E. Electrical & Electronics Engineering:** Anna University, Dindigul — **CGPA: 7.2** (Class of 2025)\n• **Enterprise Java & Systems Engineering Certification:** Magizhchi Software, Madurai (2026)\n• **Electric & Hybrid Vehicles Architecture:** L&T EduTech (2024–2025)\n• **Microsoft Office & Technical Documentation:** Microsoft (2022–2023)"
    },
    {
      keywords: ['contact', 'email', 'phone', 'call', 'hire', 'reach', 'message', 'resume', 'cv', 'location', 'madurai'],
      answer: "Reach Nitheesh Kumar VSM directly:\n• **Email:** nitheesh.exe@gmail.com\n• **Phone / WhatsApp:** +91 93455 07516\n• **Location:** Madurai, Tamil Nadu, India\n• **LinkedIn:** [linkedin.com/in/nitheeshkumar2003](https://linkedin.com/in/nitheeshkumar2003)\n• **GitHub:** [github.com/Nitheesh-exe](https://github.com/Nitheesh-exe)"
    },
    {
      keywords: ['github', 'repo', 'repos', 'source', 'code'],
      answer: "Source repositories:\n• **AIM Fitness Park ERP:** [github.com/Nitheesh-exe/Aim-Fitness-System-App.git](https://github.com/Nitheesh-exe/Aim-Fitness-System-App.git)\n• **Portfolio & Spring AI Backend:** [github.com/Nitheesh-exe/portfolio-backend](https://github.com/Nitheesh-exe/portfolio-backend)"
    },
    {
      keywords: ['skill', 'skills', 'stack', 'tech', 'technologies', 'languages', 'spring', 'spring boot', 'java', 'database', 'databases', 'sql', 'postgresql', 'sqlite'],
      answer: "Core engineering matrix across 5 domains:\n1. **Core Java:** JDK 17/21/25, Multithreading, Memory Model, Streams API, Clean Architecture.\n2. **Backend:** Spring Boot 3.3, Spring Data JPA, Hibernate, Spring Security (RBAC), Spring AOP, REST APIs.\n3. **Desktop & Systems:** JavaFX 25, FXML, JDBC, jpackage, WiX Toolset (.exe), Inno Setup.\n4. **Databases:** PostgreSQL, SQLite (WAL mode), MySQL, Schema & Index Optimization.\n5. **Software Analysis:** BMC, RGD, SAD, Design Patterns, 11-Screen Figma Prototyping."
    },
    {
      keywords: ['tools', 'tooling', 'maven', 'postman', 'jira', 'ant'],
      answer: "Daily engineering toolchain:\n• **Build & Native Packaging:** Maven, Apache Ant, jpackage, WiX Toolset, Inno Setup\n• **VCS & API Testing:** Git, GitHub, Postman, cURL\n• **Design & Docs:** Figma, JavaFX Scene Builder, Jira, BMC/RGD/SAD"
    },
    {
      keywords: ['who is nitheesh', 'who are you', 'about nitheesh', 'tell me about yourself', 'introduce', 'bio', 'summary', 'overview', 'profile'],
      answer: "I am **Nitheesh Kumar VSM** — a Java Software Developer, Systems Engineer, and Software Analyst based in Madurai, India. I hold a **B.E. in Electrical & Electronics Engineering from Anna University (CGPA: 7.2, 2025)** and specialize in JDK 17/21/25, Spring Boot 3.3 microservices, offline-first JavaFX/SQLite desktop ERP architecture, and software analysis (BMC, RGD, SAD)."
    },
    {
      keywords: ['hi', 'hello', 'hey', 'greetings', 'namaste', 'hola', 'start', 'help'],
      answer: "Hello! I am Nitheesh Kumar VSM's AI Assistant. Ask me about his **Core Java & Systems Skills** (JDK 25, Spring Boot 3.3, JavaFX), **Flagship Systems** (AIM Fitness Park ERP & Shasha Enterprises), **Education & Certifications**, or **Software Analysis (BMC, RGD, SAD)**!"
    }
  ];

  function findLocalAnswer(query) {
    if (!query) return null;
    const clean = query.toLowerCase().replace(/[^\w\s+#-]/g, ' ').replace(/\s+/g, ' ').trim();
    const tokens = new Set(clean.split(' '));

    for (const item of LOCAL_KNOWLEDGE) {
      for (const kw of item.keywords) {
        if (kw.includes(' ')) {
          if (clean.includes(kw)) return item.answer;
        } else if (tokens.has(kw)) {
          return item.answer;
        }
      }
    }
    return null;
  }

  function preWarmBackend() {
    if (isBackendWarmed) return;
    try {
      fetch(`${BACKEND_URL}/api/ping`, { method: 'GET', mode: 'cors' })
        .then(res => {
          if (res.ok) isBackendWarmed = true;
        })
        .catch(() => {
          fetch(`${BACKEND_URL}/api/chat`, { method: 'OPTIONS' }).catch(() => {});
        });
    } catch (_) {}
  }

  function formatBotHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\n/g, '<br>');
  }

  async function queryAssistant(text) {
    const instant = findLocalAnswer(text);
    if (instant) return instant;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: text,
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        isBackendWarmed = true;
        const reply = (await res.text()).trim();
        if (reply) return reply;
      }
    } catch (_) {}

    return "I'm operating in fast offline mode. Nitheesh Kumar VSM specializes in Java (JDK 17/21/25), Spring Boot 3.3, PostgreSQL, and offline JavaFX ERP architecture. Ask about AIM Fitness Park, Shasha Enterprises, skills, or contact details (nitheesh.exe@gmail.com)!";
  }

  function bindChatSurface({ inputEl, sendEl, bodyEl, chipSelector }) {
    if (!inputEl || !sendEl || !bodyEl) return;
    let isBusy = false;

    function appendMessage(text, sender) {
      const row = document.createElement('div');
      row.className = `chat-msg chat-${sender}`;

      const bubble = document.createElement('div');
      bubble.className = 'msg-bubble';
      if (sender === 'bot') {
        bubble.innerHTML = formatBotHtml(text);
      } else {
        bubble.textContent = text;
      }

      row.appendChild(bubble);
      bodyEl.appendChild(row);
      bodyEl.scrollTop = bodyEl.scrollHeight;
    }

    function appendTyping() {
      const id = 'typing-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);
      const row = document.createElement('div');
      row.className = 'chat-msg chat-bot';
      row.id = id;

      const bubble = document.createElement('div');
      bubble.className = 'msg-bubble';
      bubble.textContent = 'Analyzing query...';

      row.appendChild(bubble);
      bodyEl.appendChild(row);
      bodyEl.scrollTop = bodyEl.scrollHeight;
      return id;
    }

    async function handleSend(customText) {
      if (isBusy) return;
      const q = (customText != null ? customText : inputEl.value).trim();
      if (!q) return;

      appendMessage(q, 'user');
      if (customText == null) inputEl.value = '';

      isBusy = true;
      sendEl.disabled = true;
      const typingId = appendTyping();

      const reply = await queryAssistant(q);
      const typingEl = document.getElementById(typingId);
      if (typingEl) typingEl.remove();

      appendMessage(reply, 'bot');
      isBusy = false;
      sendEl.disabled = false;
      inputEl.focus();
    }

    sendEl.addEventListener('click', () => handleSend());
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSend();
      }
    });

    if (chipSelector) {
      document.querySelectorAll(chipSelector).forEach(chip => {
        chip.addEventListener('click', function () {
          const prompt = this.dataset.prompt || this.textContent;
          handleSend(prompt);
        });
      });
    }
  }

  function initChatSystems() {
    preWarmBackend();
    setInterval(() => {
      if (!document.hidden) preWarmBackend();
    }, 9 * 60 * 1000);

    // 1. Inline Systems Terminal
    bindChatSurface({
      inputEl: document.getElementById('terminal-input'),
      sendEl: document.getElementById('terminal-send-btn'),
      bodyEl: document.getElementById('terminal-chat-body'),
      chipSelector: '.chat-chip'
    });

    // 2. Floating Cyberpunk Chatbot Popup
    const chatToggle = document.getElementById('chat-toggle');
    const chatClose = document.getElementById('chat-close');
    const chatWindow = document.getElementById('chat-window');
    const chatInput = document.getElementById('chat-input');

    bindChatSurface({
      inputEl: chatInput,
      sendEl: document.getElementById('chat-send'),
      bodyEl: document.getElementById('chat-messages'),
      chipSelector: '#chat-chips .chip'
    });

    function openChat() {
      if (!chatWindow) return;
      chatWindow.classList.remove('chat-hidden');
      if (chatToggle) chatToggle.setAttribute('aria-expanded', 'true');
      preWarmBackend();
      setTimeout(() => chatInput && chatInput.focus(), 140);
    }

    function closeChat() {
      if (!chatWindow) return;
      chatWindow.classList.add('chat-hidden');
      if (chatToggle) chatToggle.setAttribute('aria-expanded', 'false');
    }

    window.__openChatbot = openChat;

    if (chatToggle) {
      chatToggle.addEventListener('mouseenter', preWarmBackend, { once: true });
      chatToggle.addEventListener('click', () => {
        if (chatWindow && chatWindow.classList.contains('chat-hidden')) {
          openChat();
        } else {
          closeChat();
        }
      });
    }

    if (chatClose) {
      chatClose.addEventListener('click', closeChat);
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && chatWindow && !chatWindow.classList.contains('chat-hidden')) {
        closeChat();
      }
    });
  }

  // ==========================================================================
  // 8. SWARM REBUILD TRIGGER HOOK
  // ==========================================================================
  window.__triggerSwarm = function () {
    try {
      if (window.__swarmRebuild && window.__swarmRebuild.toggle) {
        window.__swarmRebuild.toggle();
      } else {
        sessionStorage.removeItem("swarm:done");
        window.location.search = "?swarm=1";
      }
    } catch (e) {
      console.warn("Swarm trigger:", e);
    }
  };

  // ==========================================================================
  // DOM READY INITIALIZATION
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', function () {
    initAuroraCanvas();
    initLayerExplorer();
    initMediaSwitcher();
    initBentoFilter();
    initEmailCopy();
    initChatSystems();
  });

})();
