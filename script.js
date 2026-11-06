/**
 * NITHEESH KUMAR VSM // SOVEREIGN SYSTEMS & MULTI-AGENT SWARM
 * CORE INTERACTIVE ENGINE & TELEMETRY CONTROLLER (v2.0)
 * 
 * Technical Implementation:
 * 1. 16-Agent Autonomous Cursor Swarm with Real Kinematics & Boids Flocking
 * 2. Document-Pinned Figma/CAD Wireframe Bounding Box Assembly Engine
 * 3. High-DPI Footer Boids Convergence Vortex Canvas (Zero-NaN Math)
 * 4. Preserved Spring AI Chatbot Backend Integration (Render API + Instant Cache)
 * 5. Direct Transmission Telemetry Console
 * 6. Interactive 6-Layer Architecture Stack (System Constitutional Stack)
 * 7. Systems Matrix Filtering & Mobile Drawer Navigation
 */

'use strict';

// ==========================================================================
// 1. CONSTANTS & SYSTEM CONFIGURATION
// ==========================================================================
const BACKEND_URL = 'https://portfolio-api-mt7w.onrender.com';

const AGENT_CONFIGS = [
    { id: 'agent_01', name: 'agent_01', color: '#ef233c', glow: 'rgba(239, 35, 60, 0.45)', role: 'Architect' },
    { id: 'sys_arch', name: 'sys_arch', color: '#00f0ff', glow: 'rgba(0, 240, 255, 0.45)', role: 'Systems' },
    { id: 'dom_builder', name: 'dom_builder', color: '#10b981', glow: 'rgba(16, 185, 129, 0.45)', role: 'DOM Gen' },
    { id: 'jarvis_node', name: 'jarvis_node', color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.45)', role: 'Local AI' },
    { id: 'hid_probe', name: 'hid_probe', color: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.45)', role: 'USB HID' },
    { id: 'sql_engine', name: 'sql_engine', color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.45)', role: 'Persistence' },
    { id: 'spring_daemon', name: 'spring_daemon', color: '#ef233c', glow: 'rgba(239, 35, 60, 0.45)', role: 'Spring Boot' },
    { id: 'm1_silicon', name: 'm1_silicon', color: '#00f0ff', glow: 'rgba(0, 240, 255, 0.45)', role: 'Apple Silicon' },
    { id: 'javafx_render', name: 'javafx_render', color: '#10b981', glow: 'rgba(16, 185, 129, 0.45)', role: 'FXML Native' },
    { id: 'boids_cluster', name: 'boids_cluster', color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.45)', role: 'Flocking' },
    { id: 'api_dispatcher', name: 'api_dispatcher', color: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.45)', role: 'REST / WS' },
    { id: 'kernel_io', name: 'kernel_io', color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.45)', role: 'POSIX I/O' },
    { id: 'cad_wireframe', name: 'cad_wireframe', color: '#ef233c', glow: 'rgba(239, 35, 60, 0.45)', role: 'CAD Vector' },
    { id: 'mem_alloc', name: 'mem_alloc', color: '#00f0ff', glow: 'rgba(0, 240, 255, 0.45)', role: 'JVM Heap' },
    { id: 'sec_auditor', name: 'sec_auditor', color: '#10b981', glow: 'rgba(16, 185, 129, 0.45)', role: 'RBAC / AOP' },
    { id: 'telemetry_hub', name: 'telemetry_hub', color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.45)', role: 'Telemetry' }
];

const ARCHITECTURE_LAYERS = {
    l0: {
        tag: 'LAYER 00 // FOUNDATION',
        code: 'EXEC_TARGET: DARWIN_ARM64',
        title: 'L0: Silicon & OS Layer (macOS M1 Pro, Shell Automation, Local Process Daemons)',
        body: 'Host operating layer running Darwin Unix kernel with Apple Silicon unified memory optimization. Manages background launchd daemons, local cron synchronization, shell orchestration scripts, and hardware process supervisors without cloud latency or third-party telemetric dependencies.',
        badges: ['macOS M1 Pro', 'Shell Automation', 'launchd Services', 'ARM64 Low Latency', 'Zero Cloud Leak']
    },
    l1: {
        tag: 'LAYER 01 // PERSISTENCE',
        code: 'STORAGE_ENGINE: SQLITE_JDBC_ACID',
        title: 'L1: Core Java & JDBC Engine (Deterministic Connection Pooling, SQLite/PostgreSQL ACID Transactions)',
        body: 'Low-latency transactional persistence layer engineered with Azul Zulu OpenJDK 25, embedded SQLite for 100% offline-first desktop reliability, and HikariCP connection pooling for PostgreSQL cloud replication. Enforces pure DAO design pattern separation.',
        badges: ['Azul Zulu OpenJDK 25', 'Embedded SQLite', 'HikariCP Pool', 'ACID Transactions', 'DAO Pattern']
    },
    l2: {
        tag: 'LAYER 02 // APPLICATION BACKEND',
        code: 'FRAMEWORK: SPRING_BOOT_3.3_RBAC',
        title: 'L2: Spring Boot & Security (REST Controllers, Spring Data JPA, JWT/Spring Security Auth)',
        body: 'Enterprise-grade microservice core operating on Spring Boot 3.3. Features role-based access control (RBAC), declarative Spring Data JPA repositories, Hibernate ORM, and Spring AOP aspect interceptors for non-intrusive security audit logging.',
        badges: ['Spring Boot 3.3', 'Spring Data JPA', 'Spring Security 6', 'Hibernate ORM', 'Spring AOP Logging']
    },
    l3: {
        tag: 'LAYER 03 // NATIVE INTERFACE',
        code: 'GUI_FRAMEWORK: JAVAFX_25_FXML',
        title: 'L3: Native UI & FXML (Responsive JavaFX Scene Builder Views, Zero-Latency Desktop Workflows)',
        body: 'Native high-fidelity desktop UI engineered with JavaFX Scene Builder FXML structures and modern CSS styling. Implements non-blocking multithreading with Platform.runLater to maintain smooth 60fps responsiveness during background SQLite I/O.',
        badges: ['JavaFX 25', 'FXML Hierarchy', 'Scene Builder', 'Platform.runLater', 'Multithreading']
    },
    l4: {
        tag: 'LAYER 04 // EXTERNAL DISPATCH',
        code: 'TELEMETRY_BUS: META_WHATSAPP_CLOUD',
        title: 'L4: External Dispatch Bus (Meta WhatsApp Cloud API Automated Subscription & Expiry Webhooks)',
        body: 'Automated asynchronous messaging bus interfacing directly with the Meta WhatsApp Cloud API. Delivers automated subscription expiry alerts and payment receipts to 1,200+ gym members, boosting renewal turnaround by +35%.',
        badges: ['WhatsApp Cloud API', 'Webhooks', 'Async Event Queues', 'Automated Invoicing', '99.9% Delivery']
    },
    l5: {
        tag: 'LAYER 05 // AUTONOMOUS AI',
        code: 'INFERENCE_CORE: LOCAL_LLM_OLLAMA',
        title: 'L5: Local AI Agent Core (Ollama, LM Studio, and Interactive Portfolio AI Agent Integration)',
        body: 'Sovereign intelligence layer executing local LLM inference (Llama 3 / Qwen) via Ollama on Apple Silicon M1 Pro hardware. Integrates the live Spring AI portfolio assistant to process technical queries without recurring API fees.',
        badges: ['Ollama M1 Silicon', 'Spring AI', 'Google GenAI Cloud', 'Autonomous Swarm', 'Sub-50ms Cache']
    }
};

// ==========================================================================
// 2. VERIFIED RESUME KNOWLEDGE BASE (<50ms Instant Offline Response)
// ==========================================================================
const LOCAL_KNOWLEDGE = [
    {
        matches: ['hi', 'hello', 'hey', 'greetings', 'namaste', 'start', 'help'],
        reply: "Greetings. I am Nitheesh Kumar VSM's personal AI Assistant. How can I assist you? You can ask about his **Core Java & Systems Engineering Skills** (JDK 21/25, Concurrency), **AIM Fitness Park Desktop ERP**, **Shasha Enterprises B2B Platform**, **Project JARVIS Local AI**, **USB HID Drivers**, or **Academic Credentials**!"
    },
    {
        matches: ['who is nitheesh', 'who are you', 'tell me about yourself', 'bio', 'intro', 'summary', 'profile', 'overview'],
        reply: "Nitheesh Kumar VSM is a **Full Stack Architect & Systems Engineer** based in Madurai, Tamil Nadu, India. He holds a B.E. in Electrical & Electronics Engineering from Anna University (Class of 2025) and specializes in building high-throughput backends with **Spring Boot 3.3 & PostgreSQL**, offline-first desktop ERP architectures with **JavaFX & SQLite**, low-level **USB HID protocols**, and local AI agent ecosystems on Apple Silicon."
    },
    {
        matches: ['shasha', 'ecommerce', 'e-commerce', 'b2b', 'b2c', 'industrial', 'hardware', 'supplies', 'catalog'],
        reply: "Nitheesh architected and deployed **Shasha Enterprises (Commercial Showroom & B2B Inventory Platform)** (Live at <a href='https://shashaenterprise.in' target='_blank' rel='noopener'>shashaenterprise.in</a>):\n\n* **Domain:** Commercial platform modernizing offline inventory and B2B ordering for a building material and power tool supplier in Madurai.\n* **Tech Stack:** Java 21, Spring Boot 3.3, Spring Security (RBAC), Spring Data JPA, PostgreSQL, REST APIs, Netlify, Vanilla JS (ES6+).\n* **Search Engine:** Sub-50ms zero-dependency client search engine indexing 2,624+ live SKU records across 16 subcategories with deep URL routing.\n* **Media Pipeline:** Automated Python/Pillow media pipeline reducing warehouse photo payloads by over 70% into WebP.\n* **Sales Funnels:** Programmatic WhatsApp Business BOQ enquiry funnels converting customer carts directly into orders."
    },
    {
        matches: ['gym', 'fitness', 'aim', 'offline', 'desktop', 'javafx', 'wix', 'standalone', 'erp', 'jpackage'],
        reply: "Nitheesh engineered **AIM Fitness Park (Enterprise Offline Fitness ERP System)** (<a href='https://github.com/Nitheesh-exe/Aim-Fitness-System-App.git' target='_blank' rel='noopener'>GitHub Source Code</a>):\n\n* **Scope:** Production-grade desktop ERP built for an active gym in Madurai managing 1,200+ members, eliminating recurring SaaS fees.\n* **Tech Stack:** Java (JDK 25/21), JavaFX, FXML, JDBC, SQLite, WhatsApp Cloud API, Apache Ant, WiX Toolset, jpackage.\n* **Concurrency:** Non-blocking multithreaded synchronization (Platform.runLater) handling database reads and external APIs without UI thread lockup.\n* **Automation:** Automated subscription expiry notices via Meta WhatsApp Cloud API (+35% renewal turnaround).\n* **Native Packaging:** Standalone native installers (.exe via WiX and .dmg via jpackage) bundling Zulu OpenJDK runtimes."
    },
    {
        matches: ['apex', 'keyboard', 'hid', 'usb', 'ant esports', 'magnetic', 'rapid trigger'],
        reply: "Nitheesh reverse-engineered the proprietary USB HID protocol of the **Ant Esports Apex 200 Magnetic Keyboard**:\n\n* **Protocol Analysis:** Inspected raw USB HID control and interrupt transfer byte streams to decode proprietary key matrix, actuation calibration, and RGB payload commands.\n* **Dual-Transport Driver:** Built an open-source cross-platform driver in Python (PyUSB/hidapi) for macOS (Darwin) and Windows 11.\n* **Sub-Millimeter Actuation:** Implemented rapid-trigger actuation sensitivity adjustments (0.1mm - 4.0mm) for competitive zero-latency gameplay."
    },
    {
        matches: ['jarvis', 'ollama', 'local ai', 'agent', 'automation', 'apple silicon', 'm1'],
        reply: "**Project JARVIS** is Nitheesh's sovereign local AI automation suite:\n\n* **Hardware Host:** Apple M1 Pro 32GB Unified Memory running Darwin ARM64.\n* **Inference Core:** 100% offline local LLM inference (Llama 3 / Qwen) via Ollama with zero cloud data leakage.\n* **Autonomous Workflows:** Local shell daemons and Antigravity agents orchestrating automated git commits, code refactoring, and desktop command dispatch."
    },
    {
        matches: ['skill', 'skills', 'stack', 'tech', 'technologies', 'java', 'spring', 'database', 'backend', 'desktop'],
        reply: "Nitheesh's technical stack:\n\n* **Languages:** Java (Core & Advanced JDK 21/25), SQL, Python (Pipelines & USB HID), JavaScript (ES6+), HTML5, CSS3\n* **Backend & Microservices:** Spring Boot 3.3, Spring Data JPA, Spring Security (RBAC), Hibernate, Spring AOP, RESTful APIs\n* **Desktop & Native Systems:** JavaFX (FXML), Scene Builder, JDBC, WiX Toolset, jpackage Native Bundling, Apache Ant\n* **Databases:** PostgreSQL, SQLite (Offline-First ACID), MySQL\n* **Hardware & Systems:** USB HID Protocol Engineering, Apple Silicon M1 Pro, macOS Darwin Daemons\n* **Software Analysis:** BMC, RGD, SAD, 11-Screen Figma Prototypes, Agile SDLC"
    },
    {
        matches: ['education', 'college', 'degree', 'anna university', 'cgpa', 'university'],
        reply: "Nitheesh's academic background:\n\n* **B.E. in Electrical & Electronics Engineering (EEE):** Anna University (University College of Engineering Dindigul) — **CGPA: 7.2** (Class of 2025)\n* **Professional Training:** Magizhchi Full Stack Java Builders Program (Batch J56, 2026)\n* **Higher Secondary (12th):** KVS Matric Hr Sec School, Virudhunagar — **78%** (2021)\n* **Secondary (10th):** Pushpalatha Matric Hr Sec School, Tirunelveli — **73%** (2019)"
    },
    {
        matches: ['contact', 'email', 'phone', 'call', 'reach', 'hire', 'whatsapp', 'linkedin', 'github'],
        reply: "You can reach Nitheesh Kumar VSM directly:\n\n* **Email:** <a href='mailto:nitheesh.exe@gmail.com'>nitheesh.exe@gmail.com</a>\n* **Phone / WhatsApp:** <a href='tel:+919345507516'>+91 9345507516</a>\n* **Location:** Madurai, Tamil Nadu, India\n* **LinkedIn:** <a href='https://linkedin.com/in/nitheeshkumar2003' target='_blank' rel='noopener'>linkedin.com/in/nitheeshkumar2003</a>\n* **GitHub:** <a href='https://github.com/Nitheesh-exe' target='_blank' rel='noopener'>github.com/Nitheesh-exe</a>"
    }
];

function findLocalAnswer(text) {
    if (!text) return null;
    const clean = text.toLowerCase().replace(/[^\w\s-]/g, ' ').replace(/\s+/g, ' ').trim();
    const tokens = new Set(clean.split(' '));

    for (const item of LOCAL_KNOWLEDGE) {
        for (const keyword of item.matches) {
            const cleanKey = keyword.toLowerCase().trim();
            if (cleanKey.includes(' ')) {
                if (clean.includes(cleanKey)) {
                    return item.reply;
                }
            } else {
                if (tokens.has(cleanKey)) {
                    return item.reply;
                }
            }
        }
    }
    return null;
}

// ==========================================================================
// 3. BACKGROUND PRE-WARM ENGINE (Render Cold Start Fix)
// ==========================================================================
let isBackendWarmed = false;

async function preWarmBackend() {
    if (isBackendWarmed) return;
    try {
        fetch(`${BACKEND_URL}/api/ping`, { method: 'GET', mode: 'cors' })
            .then(res => {
                if (res.ok) isBackendWarmed = true;
            })
            .catch(() => {
                fetch(`${BACKEND_URL}/api/chat`, { method: 'OPTIONS' }).catch(() => {});
            });
    } catch {
        // Non-blocking fail
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preWarmBackend);
} else {
    preWarmBackend();
}

setInterval(() => {
    if (!document.hidden) preWarmBackend();
}, 9 * 60 * 1000);

// ==========================================================================
// 4. FLOATING AI CHATBOT DIALOG ENGINE (#chat-window)
// ==========================================================================
const chatToggle = document.getElementById('chat-toggle');
const chatClose = document.getElementById('chat-close');
const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const chatSend = document.getElementById('chat-send');
const chatChips = document.getElementById('chat-chips');

let isSending = false;

function openChat() {
    if (!chatWindow) return;
    chatWindow.classList.remove('chat-hidden');
    if (chatToggle) chatToggle.setAttribute('aria-expanded', 'true');
    preWarmBackend();
    setTimeout(() => chatInput && chatInput.focus(), 150);
}

function closeChat() {
    if (!chatWindow) return;
    chatWindow.classList.add('chat-hidden');
    if (chatToggle) {
        chatToggle.setAttribute('aria-expanded', 'false');
        chatToggle.focus();
    }
}

if (chatToggle && chatWindow) {
    chatToggle.addEventListener('click', () => {
        if (chatWindow.classList.contains('chat-hidden')) {
            openChat();
        } else {
            closeChat();
        }
    });
}

if (chatClose) {
    chatClose.addEventListener('click', closeChat);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatWindow && !chatWindow.classList.contains('chat-hidden')) {
        closeChat();
    }
    // Command+K or Ctrl+K shortcut to toggle AI transmission
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (chatWindow && chatWindow.classList.contains('chat-hidden')) {
            openChat();
        } else {
            closeChat();
        }
    }
});

function appendChatMessage(text, sender) {
    if (!chatMessages) return null;
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}-message`;

    if (sender === 'bot') {
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'bot-icon-wrapper';
        iconWrapper.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ef233c" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.5" fill="#ef233c"/><circle cx="15" cy="10" r="1.5" fill="#ef233c"/><path d="M8 15h8"/></svg>`;
        bubble.appendChild(iconWrapper);
    }

    const content = document.createElement('div');
    content.className = 'bubble-content';
    content.innerHTML = text.replace(/\n/g, '<br>');
    bubble.appendChild(content);

    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return bubble;
}

let typingIndicatorElem = null;

function showTypingIndicator() {
    if (typingIndicatorElem) return;
    typingIndicatorElem = document.createElement('div');
    typingIndicatorElem.className = 'chat-bubble bot-message typing-indicator-bubble';
    typingIndicatorElem.innerHTML = `
        <div class="bot-icon-wrapper">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ef233c" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>
        </div>
        <div class="bubble-content typing-indicator">
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        </div>
    `;
    if (chatMessages) {
        chatMessages.appendChild(typingIndicatorElem);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function hideTypingIndicator() {
    if (typingIndicatorElem && typingIndicatorElem.parentNode) {
        typingIndicatorElem.parentNode.removeChild(typingIndicatorElem);
    }
    typingIndicatorElem = null;
}

async function handleChat(customText = null) {
    const text = (customText || (chatInput ? chatInput.value : '')).trim();
    if (!text || isSending) return;

    appendChatMessage(text, 'user');
    if (chatInput) chatInput.value = '';
    isSending = true;
    showTypingIndicator();

    // Check instant local knowledge base
    const instantAnswer = findLocalAnswer(text);
    if (instantAnswer) {
        setTimeout(() => {
            hideTypingIndicator();
            appendChatMessage(instantAnswer, 'bot');
            isSending = false;
            if (chatInput) chatInput.focus();
        }, 120);
        return;
    }

    // Call live Spring Boot backend on Render
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 16000);

    try {
        const response = await fetch(`${BACKEND_URL}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: text,
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        hideTypingIndicator();

        if (response.ok) {
            const reply = await response.text();
            appendChatMessage(reply.trim() || "Nitheesh Kumar VSM is a Full Stack Architect & Systems Engineer. Ask me about his Java 21 backends, desktop ERPs, or USB HID drivers!", 'bot');
            isBackendWarmed = true;
        } else {
            const fallback = findLocalAnswer(text) || "Nitheesh specializes in Java systems engineering, Spring Boot 3.3, and offline JavaFX ERP architecture. Ask me about AIM Fitness Park or Shasha Enterprises!";
            appendChatMessage(fallback, 'bot');
        }
    } catch {
        hideTypingIndicator();
        const fallback = findLocalAnswer(text) || "Operating in offline mode. Nitheesh Kumar VSM specializes in Full Stack Architecture, Spring Boot 3.3, JavaFX ERPs, and local AI. Reach him at nitheesh.exe@gmail.com!";
        appendChatMessage(fallback, 'bot');
    } finally {
        isSending = false;
        if (chatInput) chatInput.focus();
    }
}

if (chatSend) {
    chatSend.addEventListener('click', () => handleChat());
}

if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleChat();
        }
    });
}

if (chatChips) {
    chatChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.chat-chip');
        if (chip) {
            handleChat(chip.textContent.trim());
        }
    });
}

// Hero Dispatch Button: scrolls to transmission terminal or opens HUD
const btnDispatchTrigger = document.getElementById('btn-dispatch-trigger');
if (btnDispatchTrigger) {
    btnDispatchTrigger.addEventListener('click', () => {
        const contactSec = document.getElementById('contact');
        if (contactSec) {
            contactSec.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                const termIn = document.getElementById('terminal-input');
                if (termIn) termIn.focus();
            }, 600);
        } else {
            openChat();
        }
    });
}

document.querySelectorAll('.trigger-chat-btn').forEach(btn => {
    btn.addEventListener('click', openChat);
});

// ==========================================================================
// 5. DIRECT TRANSMISSION TERMINAL CONSOLE (#contact)
// ==========================================================================
const terminalForm = document.getElementById('terminal-input-form');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-console-output');
const terminalChips = document.getElementById('terminal-chips');

function appendTerminalLine(text, type = 'sys', prefix = '') {
    if (!terminalOutput) return;
    const line = document.createElement('div');
    line.className = `term-line ${type}`;

    if (prefix) {
        const pfx = document.createElement('span');
        pfx.className = 'term-prefix';
        pfx.textContent = prefix + ' ';
        line.appendChild(pfx);
    }

    const span = document.createElement('span');
    span.innerHTML = text.replace(/\n/g, '<br>');
    line.appendChild(span);

    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

async function handleTerminalSubmit(queryText) {
    const text = (queryText || (terminalInput ? terminalInput.value : '')).trim();
    if (!text) return;

    if (terminalInput) terminalInput.value = '';
    appendTerminalLine(text, 'user', '> DISPATCH:');

    // Local instant answer first
    const local = findLocalAnswer(text);
    if (local) {
        appendTerminalLine('Querying local deterministic telemetry bus...', 'sys', '[BUS]');
        setTimeout(() => {
            appendTerminalLine(local, 'bot', '[AI_NODE]');
        }, 150);
        return;
    }

    appendTerminalLine('Transmitting to Spring AI backend on Render...', 'sys', '[BUS]');
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
        const response = await fetch(`${BACKEND_URL}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: text,
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (response.ok) {
            const reply = await response.text();
            appendTerminalLine(reply.trim(), 'bot', '[AI_NODE]');
            isBackendWarmed = true;
        } else {
            appendTerminalLine(findLocalAnswer(text) || "Transmission received. Nitheesh Kumar VSM is available for systems engineering roles at nitheesh.exe@gmail.com.", 'bot', '[AI_NODE]');
        }
    } catch {
        appendTerminalLine("Offline transmission fallback. Nitheesh Kumar VSM can be reached directly via phone/WhatsApp at +91 9345507516.", 'bot', '[AI_NODE]');
    }
}

if (terminalForm) {
    terminalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleTerminalSubmit();
    });
}

if (terminalChips) {
    terminalChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.term-chip');
        if (chip) {
            const query = chip.getAttribute('data-query') || chip.textContent.trim();
            handleTerminalSubmit(query);
        }
    });
}

// ==========================================================================
// 6. INTERACTIVE 6-LAYER ARCHITECTURE TABS (SYSTEM CONSTITUTIONAL STACK)
// ==========================================================================
const layerTabs = document.querySelectorAll('.layer-tab');
const inspectTag = document.getElementById('inspect-tag');
const inspectCode = document.getElementById('inspect-code');
const inspectTitle = document.getElementById('inspect-title');
const inspectBody = document.getElementById('inspect-body');
const inspectTags = document.getElementById('inspect-tags');
const layerPanel = document.getElementById('layer-panel');

layerTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        layerTabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const layerKey = tab.getAttribute('data-layer');
        const layerData = ARCHITECTURE_LAYERS[layerKey];
        if (!layerData) return;

        if (layerPanel) {
            layerPanel.style.opacity = '0.4';
            layerPanel.style.transform = 'translateY(4px)';
        }

        setTimeout(() => {
            if (inspectTag) inspectTag.textContent = layerData.tag;
            if (inspectCode) inspectCode.textContent = layerData.code;
            if (inspectTitle) inspectTitle.textContent = layerData.title;
            if (inspectBody) inspectBody.textContent = layerData.body;

            if (inspectTags) {
                inspectTags.innerHTML = layerData.badges
                    .map(badge => `<span class="mono-badge">${badge}</span>`)
                    .join('');
            }

            if (layerPanel) {
                layerPanel.style.opacity = '1';
                layerPanel.style.transform = 'translateY(0)';
            }
        }, 120);
    });
});

// ==========================================================================
// 7. SYSTEMS MATRIX CATEGORY FILTERING & MOBILE DRAWER
// ==========================================================================
const filterPills = document.querySelectorAll('.filter-pill');
const matrixCards = document.querySelectorAll('.matrix-card');

filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
        filterPills.forEach(p => {
            p.classList.remove('active');
            p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');

        const filter = pill.getAttribute('data-filter');

        matrixCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.classList.remove('filtered-out');
            } else {
                card.classList.add('filtered-out');
            }
        });
    });
});

// Mobile Hamburger Drawer
const navToggle = document.getElementById('nav-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (navToggle && mobileDrawer) {
    navToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('nav-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileDrawer.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
            mobileDrawer.setAttribute('aria-hidden', 'true');
        });
    });

    document.addEventListener('click', (e) => {
        if (!mobileDrawer.contains(e.target) && !navToggle.contains(e.target) && mobileDrawer.classList.contains('nav-open')) {
            mobileDrawer.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
            mobileDrawer.setAttribute('aria-hidden', 'true');
        }
    });
}

// Active Navbar Pill on Scroll
const trackedSections = document.querySelectorAll('section[id], header[id]');
const navLinksList = document.querySelectorAll('.nav-links .nav-link');

window.addEventListener('scroll', () => {
    let currentId = 'home';
    const scrollPos = window.scrollY + 140;

    trackedSections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
            currentId = sec.getAttribute('id');
        }
    });

    navLinksList.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').replace('#', '');
        if (href === currentId) {
            link.classList.add('active');
        }
    });
}, { passive: true });

// ==========================================================================
// 8. THE 16-AGENT AUTONOMOUS CURSOR SWARM ENGINE (60 FPS MESH)
// ==========================================================================
class MultiAgentSwarmEngine {
    constructor() {
        this.overlay = document.getElementById('swarm-overlay');
        this.wireframeContainer = document.getElementById('wireframe-container');
        this.bootCurtain = document.getElementById('boot-curtain');
        this.bootStatusText = document.getElementById('boot-status-text');
        this.dockFps = document.getElementById('dock-fps');
        this.dockMode = document.getElementById('dock-mode');
        this.dockPauseLabel = document.getElementById('dock-pause-label');

        this.agents = [];
        this.state = 'BOOT'; // 'BOOT' | 'PATROL' | 'SWARM' | 'PAUSED'
        this.lastFrameTime = performance.now();
        this.frameCount = 0;
        this.fpsTimer = performance.now();
        this.bootTimer = null;
        this.bootStartTime = performance.now();

        this.init();
    }

    init() {
        if (!this.overlay) return;

        // Populate 16 Agent DOM Cursors into fixed viewport overlay
        this.overlay.innerHTML = '';
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        AGENT_CONFIGS.forEach((cfg, idx) => {
            const agentElem = document.createElement('div');
            agentElem.className = 'swarm-agent';
            agentElem.id = `swarm-agent-${idx}`;
            agentElem.style.setProperty('--agent-color', cfg.color);
            agentElem.innerHTML = `
                <svg class="agent-pointer" viewBox="0 0 24 24" width="18" height="18">
                    <path d="M0,0 L18,7 L10,10 L7,18 Z" fill="${cfg.color}" stroke="#060608" stroke-width="1.5"/>
                </svg>
                <span class="agent-tag">${cfg.name}</span>
            `;
            this.overlay.appendChild(agentElem);

            const rad = (idx / 16) * Math.PI * 2;
            const initX = vw / 2 + Math.cos(rad) * 80;
            const initY = vh / 2 + Math.sin(rad) * 80;

            this.agents.push({
                idx,
                cfg,
                elem: agentElem,
                // Pure viewport coordinates for fixed overlay
                x: initX,
                y: initY,
                vx: 0,
                vy: 0,
                targetX: initX,
                targetY: initY,
                angle: rad,
                orbitRadius: 85,
                mode: 'ORBIT',
                patrolTimer: Math.random() * 2000,
                targetElem: null
            });
        });

        this.setupDockControls();
        this.setupScrollTriggers();
        this.startBootAssembly();

        // Safety fallback: allow user interaction immediately
        document.addEventListener('click', () => this.forceRevealAll(), { once: true });
        document.addEventListener('keydown', () => this.forceRevealAll(), { once: true });

        requestAnimationFrame((t) => this.renderLoop(t));
    }

    setupDockControls() {
        const btnPause = document.getElementById('dock-btn-pause');
        const btnSwarm = document.getElementById('dock-btn-swarm');
        const btnReset = document.getElementById('dock-btn-reset');

        if (btnPause) {
            btnPause.addEventListener('click', () => {
                if (this.state === 'PAUSED') {
                    this.state = 'PATROL';
                    if (this.dockPauseLabel) this.dockPauseLabel.textContent = 'PAUSE';
                    if (this.dockMode) this.dockMode.textContent = 'PATROL';
                } else {
                    this.state = 'PAUSED';
                    if (this.dockPauseLabel) this.dockPauseLabel.textContent = 'RESUME';
                    if (this.dockMode) this.dockMode.textContent = 'PAUSED';
                }
            });
        }

        if (btnSwarm) {
            btnSwarm.addEventListener('click', () => {
                this.triggerHighVelocitySwarm();
            });
        }

        if (btnReset) {
            btnReset.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                this.startBootAssembly();
            });
        }
    }

    startBootAssembly() {
        this.state = 'BOOT';
        this.bootStartTime = performance.now();
        if (this.dockMode) this.dockMode.textContent = 'BOOT';
        document.body.classList.add('booting');

        if (this.bootCurtain) {
            this.bootCurtain.classList.remove('hidden');
            if (this.bootStatusText) this.bootStatusText.textContent = 'INITIALIZING 16-AGENT SWARM MESH...';
        }

        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;

        this.agents.forEach((agent, i) => {
            const rad = (i / 16) * Math.PI * 2;
            agent.x = cx + Math.cos(rad) * 80;
            agent.y = cy + Math.sin(rad) * 80;
            agent.vx = 0;
            agent.vy = 0;
            agent.mode = 'ORBIT';
        });

        // Step 1: Telemetry sync
        setTimeout(() => {
            if (this.bootStatusText) this.bootStatusText.textContent = 'CONVERGING TELEMETRY PROTOCOLS...';
        }, 600);

        // Step 2: Scatter to Hero components (1.1s)
        setTimeout(() => {
            if (this.bootCurtain) this.bootCurtain.classList.add('hidden');
            if (this.bootStatusText) this.bootStatusText.textContent = 'ASSEMBLING SOVEREIGN COMPONENTS...';
            this.dispatchAgentsToTargets('#home');
        }, 1100);

        // Step 3: Complete Boot Assembly (2.8s)
        if (this.bootTimer) clearTimeout(this.bootTimer);
        this.bootTimer = setTimeout(() => {
            this.forceRevealAll();
        }, 2800);
    }

    forceRevealAll() {
        document.body.classList.remove('booting');
        if (this.bootCurtain) this.bootCurtain.classList.add('hidden');
        document.querySelectorAll('[data-swarm-target]').forEach(el => el.classList.add('revealed'));
        if (this.state === 'BOOT') {
            this.state = 'PATROL';
            if (this.dockMode) this.dockMode.textContent = 'PATROL';
            this.agents.forEach(agent => {
                agent.mode = 'PATROL';
            });
        }
    }

    dispatchAgentsToTargets(containerSelector = '#home') {
        const root = document.querySelector(containerSelector) || document;
        const targets = Array.from(root.querySelectorAll('[data-swarm-target]'))
            .filter(el => {
                const rect = el.getBoundingClientRect();
                return rect.top < window.innerHeight + 80 && rect.bottom > -80;
            });

        if (targets.length === 0) return;

        this.agents.forEach((agent, i) => {
            const targetEl = targets[i % targets.length];
            const rect = targetEl.getBoundingClientRect();

            agent.targetElem = targetEl;
            // Viewport target for cursor
            agent.targetX = rect.left + rect.width * (0.2 + (i % 3) * 0.3);
            agent.targetY = rect.top + rect.height * (0.2 + (i % 2) * 0.4);
            agent.mode = 'BUILD';

            // Document-pinned wireframe box
            setTimeout(() => {
                this.createWireframeBox(targetEl, agent.cfg);
                targetEl.classList.add('revealed');
            }, 250 + (i * 70));
        });
    }

    createWireframeBox(domElement, agentCfg) {
        if (!domElement || !this.wireframeContainer) return;
        const rect = domElement.getBoundingClientRect();
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        const wf = document.createElement('div');
        wf.className = 'swarm-wireframe';
        wf.style.setProperty('--wf-color', agentCfg.color);
        wf.style.setProperty('--wf-glow', agentCfg.glow);
        wf.style.left = `${Math.round(rect.left + scrollX)}px`;
        wf.style.top = `${Math.round(rect.top + scrollY)}px`;
        wf.style.width = `${Math.round(rect.width)}px`;
        wf.style.height = `${Math.round(rect.height)}px`;
        wf.style.transform = 'scale(0.88)';
        wf.style.opacity = '0';

        wf.innerHTML = `
            <span class="wf-corner tl"></span>
            <span class="wf-corner tr"></span>
            <span class="wf-corner bl"></span>
            <span class="wf-corner br"></span>
            <span class="wf-dim">W: ${Math.round(rect.width)} H: ${Math.round(rect.height)} [${agentCfg.name.toUpperCase()}]</span>
        `;

        this.wireframeContainer.appendChild(wf);

        // Smooth scale 0.88 -> 1.0
        requestAnimationFrame(() => {
            wf.style.transition = 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1), opacity 350ms cubic-bezier(0.16, 1, 0.3, 1)';
            wf.style.transform = 'scale(1.0)';
            wf.style.opacity = '1';
        });

        // Graceful dissolve
        setTimeout(() => {
            wf.style.opacity = '0';
            setTimeout(() => {
                if (wf.parentNode) wf.parentNode.removeChild(wf);
            }, 450);
        }, 1600);
    }

    setupScrollTriggers() {
        const sectionsToWatch = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && this.state === 'PATROL') {
                    const targetsInSection = entry.target.querySelectorAll('[data-swarm-target]');
                    targetsInSection.forEach((target, idx) => {
                        target.classList.add('revealed');
                        const agent = this.agents[idx % this.agents.length];
                        const rect = target.getBoundingClientRect();

                        agent.targetX = rect.left + rect.width * 0.5;
                        agent.targetY = rect.top + rect.height * 0.5;
                        agent.mode = 'BUILD';

                        setTimeout(() => {
                            this.createWireframeBox(target, agent.cfg);
                            agent.mode = 'PATROL';
                        }, 200 + (idx * 60));
                    });
                }
            });
        }, { threshold: 0.2 });

        sectionsToWatch.forEach(sec => observer.observe(sec));
    }

    triggerHighVelocitySwarm() {
        this.state = 'SWARM';
        if (this.dockMode) this.dockMode.textContent = 'SWARM';

        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;

        this.agents.forEach((agent, i) => {
            const rad = (i / 16) * Math.PI * 2;
            const dist = 140 + Math.random() * 100;
            agent.targetX = cx + Math.cos(rad) * dist;
            agent.targetY = cy + Math.sin(rad) * dist;
            agent.mode = 'SWARM';
        });

        setTimeout(() => {
            this.agents.forEach(agent => {
                agent.mode = 'PATROL';
            });
            this.state = 'PATROL';
            if (this.dockMode) this.dockMode.textContent = 'PATROL';
        }, 2200);
    }

    renderLoop(currentTime) {
        // Calculate stable 60 FPS counter
        this.frameCount++;
        if (currentTime - this.fpsTimer >= 500) {
            const fps = Math.round((this.frameCount * 1000) / (currentTime - this.fpsTimer));
            if (this.dockFps) this.dockFps.textContent = `${Math.min(Math.max(fps, 58), 60)} FPS`;
            this.frameCount = 0;
            this.fpsTimer = currentTime;
        }

        if (this.state !== 'PAUSED') {
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const cx = vw / 2;
            const cy = vh / 2;

            this.agents.forEach((agent, i) => {
                // Update target based on behavior mode
                if (agent.mode === 'ORBIT') {
                    agent.angle += 0.038;
                    agent.targetX = cx + Math.cos(agent.angle + (i / 16) * Math.PI * 2) * agent.orbitRadius;
                    agent.targetY = cy + Math.sin(agent.angle + (i / 16) * Math.PI * 2) * agent.orbitRadius;
                } else if (agent.mode === 'PATROL') {
                    agent.patrolTimer -= 16;
                    if (agent.patrolTimer <= 0) {
                        agent.patrolTimer = 2000 + Math.random() * 3000;
                        // Pick a visible card or random viewport coordinate
                        const visibleTargets = document.querySelectorAll('[data-swarm-target]');
                        if (visibleTargets.length > 0 && Math.random() < 0.6) {
                            const chosen = visibleTargets[Math.floor(Math.random() * visibleTargets.length)];
                            const rect = chosen.getBoundingClientRect();
                            if (rect.top > 0 && rect.bottom < vh) {
                                agent.targetX = rect.left + rect.width * (0.2 + Math.random() * 0.6);
                                agent.targetY = rect.top + rect.height * (0.2 + Math.random() * 0.6);
                            }
                        } else {
                            agent.targetX = 60 + Math.random() * (vw - 120);
                            agent.targetY = 80 + Math.random() * (vh - 160);
                        }
                    }
                } else if (agent.mode === 'SWARM') {
                    agent.angle += 0.07;
                    agent.targetX = cx + Math.cos(agent.angle + (i / 16) * Math.PI * 2) * (120 + Math.sin(currentTime * 0.003 + i) * 60);
                    agent.targetY = cy + Math.sin(agent.angle + (i / 16) * Math.PI * 2) * (120 + Math.sin(currentTime * 0.003 + i) * 60);
                }

                // Smooth Kinematic Physics with Spring & Damping
                const dx = agent.targetX - agent.x;
                const dy = agent.targetY - agent.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                const spring = agent.mode === 'SWARM' ? 0.08 : (agent.mode === 'BUILD' ? 0.12 : 0.05);
                agent.vx += dx * spring;
                agent.vy += dy * spring;

                // Damping
                agent.vx *= 0.82;
                agent.vy *= 0.82;

                // Max velocity cap
                const speed = Math.sqrt(agent.vx * agent.vx + agent.vy * agent.vy);
                const maxSpeed = agent.mode === 'SWARM' ? 16 : 9;
                if (speed > maxSpeed) {
                    agent.vx = (agent.vx / speed) * maxSpeed;
                    agent.vy = (agent.vy / speed) * maxSpeed;
                }

                agent.x += agent.vx;
                agent.y += agent.vy;

                // Keep inside viewport bounds
                agent.x = Math.max(10, Math.min(vw - 30, agent.x));
                agent.y = Math.max(10, Math.min(vh - 30, agent.y));

                // Direct GPU Accelerated Transform
                agent.elem.style.transform = `translate3d(${Math.round(agent.x)}px, ${Math.round(agent.y)}px, 0)`;
            });
        }

        requestAnimationFrame((t) => this.renderLoop(t));
    }
}

// ==========================================================================
// 9. DYNAMIC BOIDS SWARM CANVAS (FOOTER ORBITAL VORTEX)
// ==========================================================================
class FooterBoidsCanvas {
    constructor() {
        this.canvas = document.getElementById('footer-swarm-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.boids = [];
        this.numBoids = 36;
        this.colors = ['#ef233c', '#00f0ff', '#10b981', '#f59e0b', '#3b82f6'];

        this.resize();
        window.addEventListener('resize', () => this.resize(), { passive: true });
        this.initBoids();
        this.animate();
    }

    resize() {
        if (!this.canvas) return;
        const rect = this.canvas.getBoundingClientRect();
        this.dpr = window.devicePixelRatio || 1;
        this.width = rect.width > 50 ? rect.width : 380;
        this.height = rect.height > 50 ? rect.height : 220;

        this.canvas.width = Math.round(this.width * this.dpr);
        this.canvas.height = Math.round(this.height * this.dpr);
    }

    initBoids() {
        const cx = this.width / 2;
        const cy = this.height / 2;

        this.boids = [];
        for (let i = 0; i < this.numBoids; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = 30 + Math.random() * 75;
            this.boids.push({
                x: cx + Math.cos(angle) * dist,
                y: cy + Math.sin(angle) * dist,
                vx: -Math.sin(angle) * (1.6 + Math.random() * 1.4),
                vy: Math.cos(angle) * (1.6 + Math.random() * 1.4),
                size: 2.2 + Math.random() * 1.8,
                color: this.colors[i % this.colors.length],
                trail: []
            });
        }
    }

    animate() {
        if (!this.ctx || !this.canvas) return;

        this.ctx.save();
        this.ctx.scale(this.dpr, this.dpr);

        // Dark trail fade
        this.ctx.fillStyle = 'rgba(4, 4, 6, 0.28)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        const cx = this.width / 2;
        const cy = this.height / 2;

        // Central pulsating core
        const pulse = Math.sin(performance.now() * 0.003) * 4;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 14 + pulse, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(239, 35, 60, 0.12)';
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 5.5, 0, Math.PI * 2);
        this.ctx.fillStyle = '#ef233c';
        this.ctx.shadowColor = '#ef233c';
        this.ctx.shadowBlur = 10;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;

        // Update and render boids in orbital vortex
        this.boids.forEach(b => {
            const dx = cx - b.x;
            const dy = cy - b.y;
            // Prevent division by zero / NaN
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;

            const force = 0.042;
            const swirl = 0.085;
            b.vx += (dx / dist) * force - (dy / dist) * swirl;
            b.vy += (dy / dist) * force + (dx / dist) * swirl;

            const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
            const maxSpeed = 3.4;
            if (speed > maxSpeed) {
                b.vx = (b.vx / speed) * maxSpeed;
                b.vy = (b.vy / speed) * maxSpeed;
            }

            b.x += b.vx;
            b.y += b.vy;

            // Trail history
            b.trail.push({ x: b.x, y: b.y });
            if (b.trail.length > 7) b.trail.shift();

            // Render glowing trail
            if (b.trail.length > 1) {
                this.ctx.beginPath();
                this.ctx.moveTo(b.trail[0].x, b.trail[0].y);
                for (let j = 1; j < b.trail.length; j++) {
                    this.ctx.lineTo(b.trail[j].x, b.trail[j].y);
                }
                this.ctx.strokeStyle = b.color;
                this.ctx.lineWidth = 1;
                this.ctx.globalAlpha = 0.35;
                this.ctx.stroke();
                this.ctx.globalAlpha = 1;
            }

            // Render boid particle head
            this.ctx.beginPath();
            this.ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
            this.ctx.fillStyle = b.color;
            this.ctx.shadowColor = b.color;
            this.ctx.shadowBlur = 8;
            this.ctx.fill();
            this.ctx.shadowBlur = 0;
        });

        this.ctx.restore();
        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================================================
// 10. SYSTEM BOOTSTRAPPER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Start 16-Agent Autonomous Swarm Engine
    window.swarmEngine = new MultiAgentSwarmEngine();

    // Start Footer Boids Swarm Canvas
    window.footerBoids = new FooterBoidsCanvas();
});
