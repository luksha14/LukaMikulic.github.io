const API_URL = "https://chatbot-backend-pchr.onrender.com";

// Global DOM references
let chatContainer; 
let input;
let body; 
let welcomeMessageShown = false;

// CORE FUNCTIONS (Global Scope)
async function sendMessage(text) {
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    const typingEl = addTyping();

    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
    });

    const data = await res.json();

    typingEl.remove();
    addMessage(data.reply, "bot");
}

function addMessage(text, type) {
    const bubble = document.createElement("div");
    bubble.className = `message ${type}`;
    bubble.textContent = text;

    body.appendChild(bubble);
    body.scrollTop = body.scrollHeight;
}

function addTyping() {
    const bubble = document.createElement("div");
    bubble.className = "message bot typing";
    bubble.textContent = "Luka's bot is typing...";

    body.appendChild(bubble);
    body.scrollTop = body.scrollHeight;

    return bubble;
}


// QUICK REPLY MENU FUNCTIONS
function removeQuickReplyButtons() {
    const buttons = document.querySelectorAll(".quick-reply-button-container");
    buttons.forEach(container => container.remove());
}

function createMenuButton(displayText, queryText) {
    const button = document.createElement("button");
    button.classList.add("quick-reply-button");
    button.textContent = displayText; 
    
    button.onclick = () => {
        addMessage(displayText, 'user'); 
        sendMessage(queryText); 
        removeQuickReplyButtons();
    };
    return button;
}

function displayWelcomeMessage() {
    const welcomeText = "Hello! I am Luka's digital assistant. Would you like to know more about Luka?";
    
    setTimeout(() => {
        addMessage(welcomeText, 'bot'); 
        
        setTimeout(() => {
            const menuContainer = document.createElement("div");
            menuContainer.classList.add("quick-reply-button-container"); 

            menuContainer.appendChild(
                createMenuButton("Hobbies", "what are your hobbies")
            ); 
            menuContainer.appendChild(
                createMenuButton("Motivation", "what motivates you")
            );
            menuContainer.appendChild(
                createMenuButton("Joke", "tell me a joke")
            ); 

            chatContainer.appendChild(menuContainer);
            chatContainer.scrollTop = chatContainer.scrollHeight; 
        }, 800); 

    }, 500); 
}


// DOM INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const toggle = document.getElementById("chatbot-toggle");
    const windowBox = document.getElementById("chatbot-window");
    input = document.getElementById("chatbot-input"); 
    const sendBtn = document.getElementById("chatbot-send");
    body = document.getElementById("chatbot-body"); 
    
    // Assigning body to chatContainer for message display
    chatContainer = body; 

    // Toggle logic
    toggle.addEventListener("click", () => {
        windowBox.style.display =
            windowBox.style.display === "flex" ? "none" : "flex";
  
        if (windowBox.style.display === "flex" && !welcomeMessageShown) {
             displayWelcomeMessage();
             welcomeMessageShown = true; 
        }
    });

    // Send logic
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") sendMessage(input.value.trim());
    });

    sendBtn.addEventListener("click", () => sendMessage(input.value.trim()));
});
