const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 20 ? '0 4px 12px rgba(0,0,0,0.3)' : 'none';
}, { passive: true });

const chatToggle = document.getElementById('chat-toggle');
const chatClose = document.getElementById('chat-close'); 
const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const chatSend = document.getElementById('chat-send');

// Toggle chat open
if (chatToggle && chatWindow) {
    chatToggle.addEventListener('click', () => {
        chatWindow.classList.toggle('chat-hidden');
    });
}

// Click the "X" to close
if (chatClose && chatWindow) {
    chatClose.addEventListener('click', () => {
        chatWindow.classList.add('chat-hidden');
    });
}

// Append messages
function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${sender}-msg`;
    
    if (sender === 'bot') {
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-robot bot-icon';
        msgDiv.appendChild(icon);
    }

    const contentDiv = document.createElement('div');
    contentDiv.className = 'msg-content';
    contentDiv.textContent = text;
    
    msgDiv.appendChild(contentDiv);
    chatMessages.appendChild(msgDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle chat backend
async function handleChat() {
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    chatInput.value = '';

    try {
        const response = await fetch('http://localhost:8080/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: text
        });

        const reply = response.ok 
            ? await response.text() 
            : "Sorry, I had trouble processing that request.";
        appendMessage(reply, 'bot');
    } catch {
        appendMessage("Cannot connect to backend server. Make sure Spring Boot is running.", 'bot');
    }
}

if (chatSend && chatInput) {
    chatSend.addEventListener('click', handleChat);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleChat();
    });
}