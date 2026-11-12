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
  // 7. TERMINAL CHATBOT (Spring AI Cloud + Instant Local Deterministic NLP)
  // ==========================================================================
  const BACKEND_URL = 'https://portfolio-api-mt7w.onrender.com';

  const LOCAL_KNOWLEDGE = [
    {
      keywords: ['who', 'about', 'nitheesh', 'developer', 'profile', 'introduce'],
      answer: "I am **Nitheesh Kumar VSM** — a Java Software Developer, Systems Engineer, and Software Analyst. I specialize in Modern Java (JDK 17/21/25), Spring Boot 3.3 microservices, offline-first desktop ERP architecture (JavaFX/SQLite), and software analysis (BMC, RGD, SAD)."
    },
    {
      keywords: ['aim', 'fitness', 'gym', 'erp', 'desktop', 'javafx', 'wix', 'jpackage'],
      answer: "AIM Fitness Park is an **enterprise offline desktop ERP** built with Zulu OpenJDK 25, JavaFX, FXML, JDBC, and SQLite. It currently manages **1,200+ members** on-site with zero recurring SaaS fees, features non-blocking multi-threaded database updates (`Platform.runLater`), and delivers a **+35% renewal turnaround** via Meta WhatsApp Cloud API webhooks."
    },
    {
      keywords: ['shasha', 'enterprise', 'b2b', 'inventory', 'sku', 'spring boot'],
      answer: "Shasha Enterprises is a live commercial B2B platform managing **2,624+ live SKUs**. Backed by **Spring Boot 3.3** and **PostgreSQL** with Spring Security (RBAC) and AOP audit logging. The front-end features a zero-dependency debounced search engine and an automated Python/Pillow WebP pipeline that slashed image payloads by **-70%**."
    },
    {
      keywords: ['skill', 'stack', 'tech', 'technologies', 'tools', 'languages'],
      answer: "My technical matrix spans 5 core engineering domains:\n1. **Core Java**: JDK 17/21/25, Concurrency, Memory Model, Streams, Clean Architecture.\n2. **Backend**: Spring Boot 3.3, Spring Data JPA, Spring Security (RBAC), Spring AOP, RESTful APIs.\n3. **Desktop & Systems**: JavaFX 25, FXML, JDBC, jpackage, WiX Toolset (.exe), Inno Setup.\n4. **Databases**: PostgreSQL, SQLite (WAL mode), MySQL, Relational Schema & Index Optimization.\n5. **Software Analysis**: BMC, RGD, SAD, Design Patterns, Figma Systems Prototyping."
    },
    {
      keywords: ['contact', 'email', 'phone', 'hire', 'reach', 'message'],
      answer: "You can reach me directly at **nitheesh.exe@gmail.com**, phone/WhatsApp at **+91 93455 07516**, or connect via LinkedIn at [linkedin.com/in/nitheeshkumar2003](https://linkedin.com/in/nitheeshkumar2003)."
    },
    {
      keywords: ['github', 'repo', 'source', 'code'],
      answer: "Explore my source code repositories:\n• **AIM Fitness Park ERP**: [github.com/Nitheesh-exe/Aim-Fitness-System-App.git](https://github.com/Nitheesh-exe/Aim-Fitness-System-App.git)\n• **Portfolio & Backend**: [github.com/Nitheesh-exe/portfolio-backend](https://github.com/Nitheesh-exe/portfolio-backend)\n• **GitHub Profile**: [github.com/Nitheesh-exe](https://github.com/Nitheesh-exe)"
    }
  ];

  function findLocalAnswer(query) {
    const clean = query.toLowerCase().trim();
    const tokens = new Set(clean.split(/[^a-z0-9+#_]+/));

    for (let item of LOCAL_KNOWLEDGE) {
      for (let kw of item.keywords) {
        if (kw.includes(' ')) {
          if (clean.includes(kw)) return item.answer;
        } else if (tokens.has(kw)) {
          return item.answer;
        }
      }
    }
    return null;
  }

  function initTerminalChat() {
    const input = document.getElementById('terminal-input');
    const sendBtn = document.getElementById('terminal-send-btn');
    const body = document.getElementById('terminal-chat-body');
    const chips = document.querySelectorAll('.chat-chip');

    if (!input || !sendBtn || !body) return;

    async function sendMessage(text) {
      const q = text.trim();
      if (!q) return;

      appendMessage(q, 'user');
      input.value = '';

      // Check local answer first for instant latency
      const localAns = findLocalAnswer(q);
      if (localAns) {
        appendMessage(localAns, 'bot');
        return;
      }

      // Show typing indicator
      const typingId = appendTyping();

      try {
        const res = await fetch(`${BACKEND_URL}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: q })
        });

        removeTyping(typingId);

        if (res.ok) {
          const data = await res.json();
          appendMessage(data.reply || data.response || "Message processed.", 'bot');
        } else {
          fallbackResponse(q);
        }
      } catch (err) {
        removeTyping(typingId);
        fallbackResponse(q);
      }
    }

    function fallbackResponse(q) {
      appendMessage("I am Nitheesh's systems assistant. I specialize in Java 25, Spring Boot 3.3, and offline-first desktop ERP architecture. Feel free to ask about AIM Fitness Park, Shasha Enterprises, or my technical skills matrix!", 'bot');
    }

    function appendMessage(text, sender) {
      const row = document.createElement('div');
      row.className = `chat-msg chat-${sender}`;

      const bubble = document.createElement('div');
      bubble.className = 'msg-bubble';
      bubble.innerHTML = text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      row.appendChild(bubble);
      body.appendChild(row);
      body.scrollTop = body.scrollHeight;
    }

    function appendTyping() {
      const id = 'typing-' + Date.now();
      const row = document.createElement('div');
      row.className = 'chat-msg chat-bot';
      row.id = id;

      const bubble = document.createElement('div');
      bubble.className = 'msg-bubble';
      bubble.textContent = 'Analyzing query...';

      row.appendChild(bubble);
      body.appendChild(row);
      body.scrollTop = body.scrollHeight;
      return id;
    }

    function removeTyping(id) {
      const el = document.getElementById(id);
      if (el) el.remove();
    }

    sendBtn.addEventListener('click', () => sendMessage(input.value));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendMessage(input.value);
    });

    chips.forEach(chip => {
      chip.addEventListener('click', function () {
        sendMessage(this.textContent);
      });
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
    initTerminalChat();
  });

})();
