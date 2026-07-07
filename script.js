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
