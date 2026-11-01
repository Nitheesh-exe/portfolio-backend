// =============================================================
// NITHEESH KUMAR - PORTFOLIO INTERACTIVITY & CHAT ENGINE
// Ultra-Fast Response Chatbot with Background Pre-Warm & Fallback
// =============================================================

const BACKEND_URL = 'https://portfolio-api-mt7w.onrender.com';

// 1. MOBILE NAVIGATION TOGGLE & LINK HANDLING
const navToggle = document.getElementById('nav-toggle');
const navBot = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-links a');

if (navToggle && navBot) {
    navToggle.addEventListener('click', () => {
        const isOpen = navBot.classList.toggle('nav-open');
        navToggle.classList.toggle('active', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navBot.classList.remove('nav-open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        if (!navBot.contains(e.target) && !navToggle.contains(e.target) && navBot.classList.contains('nav-open')) {
            navBot.classList.remove('nav-open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// 2. THROTTLED NAVBAR SCROLL EFFECT (60 FPS Performance)
const nav = document.querySelector('.navbar');
if (nav) {
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                nav.classList.toggle('navbar-scrolled', window.scrollY > 20);
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }, { passive: true });
}

// 3. ACCESSIBLE PROJECT TABS SWITCHER WITH KEYBOARD ARROWS
const tabBtns = Array.from(document.querySelectorAll('.tab-btn'));
const projectViews = document.querySelectorAll('.project-view');

function activateTab(btn, focus = false) {
    if (!btn) return;
    const targetId = btn.getAttribute('data-target');
    
    tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
        b.setAttribute('tabindex', '-1');
    });
    projectViews.forEach(v => {
        v.classList.remove('active');
    });

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    btn.setAttribute('tabindex', '0');
    if (focus) btn.focus();

    const targetView = document.getElementById(targetId);
    if (targetView) targetView.classList.add('active');
}

tabBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => activateTab(btn));

    btn.addEventListener('keydown', (e) => {
        let newIndex = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            newIndex = (index + 1) % tabBtns.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            newIndex = (index - 1 + tabBtns.length) % tabBtns.length;
        } else if (e.key === 'Home') {
            newIndex = 0;
        } else if (e.key === 'End') {
            newIndex = tabBtns.length - 1;
        }

        if (newIndex !== null) {
            e.preventDefault();
            activateTab(tabBtns[newIndex], true);
        }
    });
});

// 4. DOM ELEMENTS FOR CHATBOT
const chatToggle = document.getElementById('chat-toggle');
const chatClose = document.getElementById('chat-close');
const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const chatSend = document.getElementById('chat-send');
const chatChips = document.getElementById('chat-chips');

// 5. VERIFIED LOCAL RESUME KNOWLEDGE BASE (<50ms Instant Responses)
const LOCAL_KNOWLEDGE = [
    {
        matches: ['hi', 'hello', 'hey', 'greetings', 'namaste', 'hola', 'start', 'help'],
        reply: "Hello! I am Nitheesh Kumar VSM's personal AI Assistant. How can I assist you today? You can ask me about his **Core Java & Systems Engineering Skills** (JDK 17/21/25, Concurrency), **Production Systems** (AIM Fitness Park ERP & Shasha Enterprises B2B), **Certifications**, **Software Analysis** (BMC, RGD, SAD), or **Experience**!"
    },
    {
        matches: ['who is nitheesh', 'who are you', 'tell me about yourself', 'bio', 'intro', 'summary', 'profile', 'overview'],
        reply: "Nitheesh Kumar VSM is a **Java Software Developer & Systems Engineer** based in Madurai, India. He holds a B.E. in Electrical & Electronics Engineering from Anna University (Class of 2025) and specializes in building high-throughput backends with **Spring Boot 3.3 & PostgreSQL**, offline-first desktop ERP architectures with **JavaFX (JDK 25) & SQLite**, and conducting end-to-end software analysis (BMC, RGD, SAD)."
    },
    {
        matches: ['shasha', 'ecommerce', 'e-commerce', 'b2b', 'b2c', 'industrial', 'hardware', 'supplies', 'catalog'],
        reply: "Nitheesh architected and deployed **Shasha Enterprises (Commercial Showroom & B2B Inventory Platform)** (Live at <a href='https://shashaenterprise.in' target='_blank'>shashaenterprise.in</a>):\n\n* **Domain:** Live commercial platform modernizing offline inventory and B2B ordering for a building materials and power tools distributor.\n* **Tech Stack:** Java 21, Spring Boot 3.3, Spring Security (RBAC), Spring Data JPA, Hibernate, PostgreSQL, Spring AOP, REST APIs, Python (Pillow Pipeline), Vanilla JS (ES6+), Netlify.\n* **Backend Architecture:** Robust Spring Boot 3.3 REST API with RBAC security, Spring AOP audit logging, and input validation.\n* **Search Engine:** Sub-50ms zero-dependency client search engine with debouncing and deep URL state synchronization handling 2,624+ live SKU records across 16 subcategories.\n* **Media Pipeline:** Automated Python/Pillow media optimization pipeline reducing warehouse catalog image payloads by over 70%.\n* **Sales Funnels:** Programmatic WhatsApp Business BOQ enquiry funnels converting customer carts directly into sales orders."
    },
    {
        matches: ['gym', 'fitness', 'aim', 'offline', 'desktop', 'javafx', 'wix', 'standalone', 'erp', 'jpackage'],
        reply: "Nitheesh engineered **AIM Fitness Park (Enterprise Offline Fitness ERP System)** (<a href='https://github.com/Nitheesh-exe/Aim-Fitness-System-App.git' target='_blank'>GitHub Source Code</a>):\n\n* **Domain:** Production-grade desktop ERP built for an active facility managing 1,200+ members, completely eliminating recurring SaaS fees.\n* **Tech Stack:** Java (JDK 25), JavaFX, FXML, JDBC, SQLite, PostgreSQL, WhatsApp Cloud API, CSS3, Apache Ant, WiX Toolset, jpackage.\n* **Analysis & UX:** Authored complete Business Model Canvas (BMC), Requirement Gathering Document (RGD), and System Architecture Document (SAD) with an 11-screen Figma prototype.\n* **10 Operational Modules:** Member Directory, Daily Attendance, Subscriptions, Invoicing, BMI Calculator, Financial Reports, and Local Automated Backups.\n* **Concurrency:** Non-blocking multithreaded synchronization (Platform.runLater) handling database reads and external APIs without UI thread lockup.\n* **Automation:** Automated subscription expiry notices via Meta WhatsApp Cloud API (+35% renewal turnaround).\n* **Native Packaging:** Standalone native installers (.exe via WiX / Inno Setup and .dmg via jpackage) bundling Zulu OpenJDK 25 and JavaFX runtimes."
    },
    {
        matches: ['project', 'projects', 'portfolio work', 'featured', 'systems', 'apps'],
        reply: "Nitheesh has engineered two major production systems:\n\n1. **AIM Fitness Park (Enterprise Offline Fitness ERP System):** Production desktop ERP managing 1,200+ active members built with Java (JDK 25), JavaFX, SQLite, WiX/jpackage native bundling, and Meta WhatsApp Cloud API (<a href='https://github.com/Nitheesh-exe/Aim-Fitness-System-App.git' target='_blank'>View Source Code</a>).\n2. **Shasha Enterprises (Commercial Showroom & B2B Inventory Platform):** Live commercial platform managing 2,624+ live SKU records built with Spring Boot 3.3, Java 21, Spring Security (RBAC), PostgreSQL, and Python/Pillow media pipeline (<a href='https://shashaenterprise.in' target='_blank'>Visit Live Platform</a>)."
    },
    {
        matches: ['skill', 'skills', 'stack', 'tech', 'technologies', 'java', 'spring', 'database', 'databases', 'backend', 'desktop', 'concurrency'],
        reply: "Here is Nitheesh's complete technical skill matrix:\n\n* **Core & Advanced Java:** JDK 17/21/25, Java Memory Model, Multithreading & Concurrency, Collections Framework, Streams API, OOP Principles, Exception Architecture, Generics\n* **Backend & Microservices:** Spring Boot 3.3, Spring MVC, Spring Data JPA, Spring Security (RBAC), Hibernate ORM, Spring AOP (Audit Logging), RESTful APIs, Clean Architecture, DAO Pattern\n* **Desktop & Systems Engineering:** JavaFX (FXML), Scene Builder, JDBC Architecture, Non-blocking Platform.runLater Sync, Standalone Installers (.exe via WiX / Inno Setup, .dmg/.pkg via jpackage), Apache Ant\n* **Databases & Persistence:** PostgreSQL, SQLite, MySQL, Relational Schema Design, SQL Query Optimization, Indexing, ACID Transactions, Offline Data Synchronization\n* **Analysis & Workflows:** BMC, RGD, SAD, 11-Screen Figma Prototypes, Git, GitHub, Maven, Postman, Jira, Agile SDLC"
    },
    {
        matches: ['analysis', 'sad', 'rgd', 'bmc', 'architecture', 'requirements', 'workflow'],
        reply: "Nitheesh executes a rigorous 3-tier software analysis methodology:\n\n1. **Business Model Canvas (BMC):** Analyzes key partners, value propositions, cost structure, and revenue streams to align software with operational business needs.\n2. **Requirement Gathering Document (RGD):** Formulates user personas, functional/non-functional requirements, and validation constraints.\n3. **Software Analyst Document (SAD):** Designs architecture diagrams, entity-relationship models (ERD), state transitions, and 11-screen interactive Figma UI/UX prototypes before writing production code."
    },
    {
        matches: ['certification', 'certifications', 'certificate', 'certificates', 'credential', 'credentials', 'license', 'licenses'],
        reply: "Nitheesh holds 4 recognized industry certifications:\n\n1. **Enterprise Java & Systems Engineering Certification:** Magizhchi Software | Madurai (2026)\n2. **Electric and Hybrid Vehicles — Systems Architecture:** L&T EduTech (2024–2025)\n3. **Employability & Professional Presentation Skills:** Focus 4D Career (2023–2024)\n4. **Microsoft Office Fundamentals & Technical Documentation:** Microsoft (2022–2023)"
    },
    {
        matches: ['education', 'college', 'degree', 'anna university', 'cgpa', 'school', 'university'],
        reply: "Nitheesh's academic background:\n\n* **B.E. in Electrical & Electronics Engineering:** Anna University (University College of Engineering Dindigul) — **CGPA: 7.2** (Class of 2025)\n* **Higher Secondary (12th):** KVS Matric Hr Sec School, Virudhunagar — **78%** (2021)\n* **Secondary (10th):** Pushpalatha Matric Hr Sec School, Tirunelveli — **73%** (2019)\n* **Professional Training:** Magizhchi Software Enterprise Java & Systems Engineering Program (2026)"
    },
    {
        matches: ['experience', 'work', 'freelance', 'analyst', 'developer', 'history', 'role', 'roles'],
        reply: "Nitheesh's engineering experience:\n\n* **Java Software Developer & Systems Engineer (Freelance, 2026 – Present):** Architecting AIM Fitness Park (JavaFX ERP managing 1,200+ members) and Shasha Enterprises (Spring Boot 3.3 B2B platform with 2,624+ SKUs), leading requirements analysis (BMC, RGD, SAD), Figma UI/UX, and native runtime bundling.\n* **Enterprise Java & Systems Engineering Training (Magizhchi Software, 2026):** Advanced engineering curriculum in Java (JDK 17/21/25), Spring Boot 3.3, Spring Security (RBAC), PostgreSQL, and RESTful APIs."
    },
    {
        matches: ['contact', 'email', 'phone', 'call', 'reach', 'hire', 'whatsapp', 'linkedin', 'github'],
        reply: "You can reach Nitheesh Kumar VSM directly:\n\n* **Email:** <a href='mailto:nitheesh.exe@gmail.com'>nitheesh.exe@gmail.com</a>\n* **Phone / WhatsApp:** <a href='tel:+919345507516'>+91 9345507516</a>\n* **Location:** Madurai, Tamil Nadu, India\n* **LinkedIn:** <a href='https://linkedin.com/in/nitheeshkumar2003' target='_blank'>linkedin.com/in/nitheeshkumar2003</a>\n* **GitHub:** <a href='https://github.com/Nitheesh-exe' target='_blank'>github.com/Nitheesh-exe</a>"
    },
    {
        matches: ['resume', 'cv', 'download resume', 'pdf'],
        reply: "You can request Nitheesh Kumar VSM's official resume by emailing him at **nitheesh.exe@gmail.com** or clicking the 'Request Resume' button in the Hero section. He is available for immediate Java Software Developer and Systems Engineer opportunities!"
    },
    {
        matches: ['location', 'city', 'madurai', 'tamil nadu', 'india', 'where is he', 'relocate'],
        reply: "Nitheesh Kumar VSM is based in **Madurai, Tamil Nadu, India**, and is open to on-site, hybrid, or remote Java Software Developer and Systems Engineer opportunities."
    },
    {
        matches: ['tools', 'tooling', 'maven', 'postman', 'jira', 'figma'],
        reply: "Nitheesh's daily engineering workflow tools include:\n\n* **VCS & Build:** Git, GitHub, Apache Maven, Apache Ant, jpackage\n* **API & Testing:** Postman, REST Client, cURL\n* **UI/UX & GUI:** Figma, JavaFX Scene Builder, WiX Toolset (.msi/.exe packaging), Inno Setup\n* **Management & Analysis:** Jira, Requirement Gathering (RGD), System Architecture Documents (SAD)"
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

// 6. BACKGROUND PRE-WARM ENGINE (Render Free Tier Cold Start Fix)
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

// Trigger pre-warm on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preWarmBackend);
} else {
    preWarmBackend();
}

// Secondary pre-warm triggers
if (chatToggle) {
    chatToggle.addEventListener('mouseenter', preWarmBackend, { once: true });
    chatToggle.addEventListener('focus', preWarmBackend, { once: true });
}

// Keep-alive timer every 9 minutes while tab is active
setInterval(() => {
    if (!document.hidden) preWarmBackend();
}, 9 * 60 * 1000);

// 7. CHAT TOGGLE & OPEN/CLOSE
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
});

// 8. MESSAGE FORMATTING & RENDERING
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatMarkdown(text) {
    if (text.includes('<a href=')) {
        return text.replace(/\n\n/g, '<br><br>').replace(/\n\* /g, '<br>&bull; ');
    }

    let formatted = escapeHtml(text);
    
    // Bold: **text**
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Lists: * item or - item
    formatted = formatted.replace(/^\s*[\*\-]\s+(.*)$/gm, '<li>$1</li>');
    if (formatted.includes('<li>')) {
        formatted = formatted.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    }
    
    // Line breaks
    formatted = formatted.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
    
    return formatted;
}

function createBotIcon() {
    const wrapper = document.createElement('div');
    wrapper.className = 'bot-icon-wrapper';
    wrapper.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2zM7.5 13A1.5 1.5 0 1 0 9 14.5 1.5 1.5 0 0 0 7.5 13zm9 0a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z"/></svg>`;
    return wrapper;
}

function appendMessage(text, sender) {
    if (!chatMessages) return null;

    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${sender}-msg`;

    if (sender === 'bot') {
        msgDiv.appendChild(createBotIcon());
    }

    const contentDiv = document.createElement('div');
    contentDiv.className = 'msg-content';
    
    if (sender === 'bot') {
        contentDiv.innerHTML = formatMarkdown(text);
    } else {
        contentDiv.textContent = text;
    }

    msgDiv.appendChild(contentDiv);
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    return msgDiv;
}

// Typing Indicator
let typingIndicatorElem = null;

function showTypingIndicator() {
    if (typingIndicatorElem) return;

    typingIndicatorElem = document.createElement('div');
    typingIndicatorElem.className = 'msg bot-msg typing-wrapper';

    typingIndicatorElem.appendChild(createBotIcon());

    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.innerHTML = `
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-hint" id="typing-hint"></span>
    `;

    typingIndicatorElem.appendChild(indicator);
    chatMessages.appendChild(typingIndicatorElem);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function updateTypingHint(text) {
    const hint = document.getElementById('typing-hint');
    if (hint) hint.textContent = text;
}

function hideTypingIndicator() {
    if (typingIndicatorElem && typingIndicatorElem.parentNode) {
        typingIndicatorElem.parentNode.removeChild(typingIndicatorElem);
    }
    typingIndicatorElem = null;
}

// 9. CHAT SUBMISSION HANDLER
let isSending = false;

async function handleChat(customText = null) {
    if (isSending) return;

    const text = (customText || (chatInput ? chatInput.value : '')).trim();
    if (!text) return;

    appendMessage(text, 'user');
    if (chatInput) chatInput.value = '';

    isSending = true;
    if (chatSend) chatSend.disabled = true;
    if (chatInput) chatInput.disabled = true;

    showTypingIndicator();

    // Check instant local knowledge base (<50ms perceived response)
    const instantAnswer = findLocalAnswer(text);
    if (instantAnswer) {
        setTimeout(() => {
            hideTypingIndicator();
            appendMessage(instantAnswer, 'bot');
            isSending = false;
            if (chatSend) chatSend.disabled = false;
            if (chatInput) {
                chatInput.disabled = false;
                chatInput.focus();
            }
        }, 80);
        return;
    }

    const hintTimer = setTimeout(() => {
        updateTypingHint("Connecting to AI...");
    }, 2000);

    const longWaitTimer = setTimeout(() => {
        updateTypingHint("Waking up server...");
    }, 4500);

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);

        const response = await fetch(`${BACKEND_URL}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: text,
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        clearTimeout(hintTimer);
        clearTimeout(longWaitTimer);
        hideTypingIndicator();

        if (response.ok) {
            const reply = await response.text();
            appendMessage(reply.trim() || "Nitheesh Kumar VSM is a Java Software Developer & Systems Engineer skilled in JDK 17/21/25, Spring Boot 3.3, PostgreSQL, JavaFX ERP architecture, and Software Analysis. What would you like to know?", 'bot');
            isBackendWarmed = true;
        } else {
            const fallback = findLocalAnswer(text) || 
                "Nitheesh specializes in Java systems engineering, Spring Boot 3.3, and offline JavaFX ERP architecture. Ask me about AIM Fitness Park or Shasha Enterprises!";
            appendMessage(fallback, 'bot');
        }
    } catch {
        clearTimeout(hintTimer);
        clearTimeout(longWaitTimer);
        hideTypingIndicator();

        const fallback = findLocalAnswer(text) || 
            "I'm operating in offline mode. Nitheesh Kumar VSM specializes in Java Software Development, Spring Boot 3.3, PostgreSQL, and JavaFX ERP systems. You can also reach him directly at nitheesh.exe@gmail.com!";
        appendMessage(fallback, 'bot');
    } finally {
        isSending = false;
        if (chatSend) chatSend.disabled = false;
        if (chatInput) {
            chatInput.disabled = false;
            chatInput.focus();
        }
    }
}

// 10. EVENT LISTENERS
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

// Quick Starter Chips
if (chatChips) {
    chatChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (chip) {
            const prompt = chip.getAttribute('data-prompt');
            if (prompt) handleChat(prompt);
        }
    });
}
