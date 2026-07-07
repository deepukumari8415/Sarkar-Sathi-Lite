const knowledge = [
    { keywords: ["hello", "hi", "namaste"], answer: "Hello! I am Sarkar Sathi AI. How can I help you with Aadhaar, PAN, PM Kisan, Passport, Scholarship, or Government Jobs?" },
    { keywords: ["aadhaar", "adhar"], answer: "For Aadhaar services like download, update, or check status, visit: uidai.gov.in" },
    { keywords: ["pan", "pan card"], answer: "For PAN Card application and status, visit: tin.tin.nsdl.com" },
    { keywords: ["pm kisan", "kisan"], answer: "For PM Kisan Samman Nidhi status, visit: pmkisan.gov.in" },
    { keywords: ["passport"], answer: "For Passport application, visit: passportindia.gov.in" },
    { keywords: ["scholarship"], answer: "For National Scholarship, visit: scholarships.gov.in" },
    { keywords: ["job", "sarkari naukri", "government job"], answer: "For latest Government Jobs, visit: ncs.gov.in" }
];

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, type) {
    const message = document.createElement("div");
    message.className = type;
    message.innerText = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getAnswer(question) {
    question = question.toLowerCase().trim();
    for (let i = 0; i < knowledge.length; i++) {
        for (let j = 0; j < knowledge[i].keywords.length; j++) {
            if (question.includes(knowledge[i].keywords[j])) {
                return knowledge[i].answer;
            }
        }
    }
    return "❌ Sorry! I don't have an answer for that. Please ask about Aadhaar, PAN Card, Passport, PM Kisan, Scholarship, Government Jobs.";
}

function sendMessage() {
    const question = userInput.value.trim();
    if (question === "") return;
    addMessage("👤 " + question, "user");
    setTimeout(() => {
        addMessage("🤖 " + getAnswer(question), "bot");
    }, 300);
    userInput.value = "";
}

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, type) {
    const message = document.createElement("div");
    message.className = type;
    message.innerText = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getAnswer(question) {
    question = question.toLowerCase();

    for (const item of knowledge) {
        for (const key of item.keywords) {
            if (question.includes(key.toLowerCase())) {
                return item.answer;
            }
        }
    }

    return "Sorry, I don't have information about this. Please ask about Aadhaar, PAN Card, Passport, PM Kisan, Scholarship or Government Jobs.";
}

function sendMessage() {
    const question = userInput.value.trim();

    if (question === "") return;

    addMessage("You: " + question, "user");

    const reply = getAnswer(question);

    setTimeout(() => {
        addMessage("Sarkar Sathi: " + reply, "bot");
    }, 300);

    userInput.value = "";
}

sendBtn.onclick = sendMessage;

userInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
