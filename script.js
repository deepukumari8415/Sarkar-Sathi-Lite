const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(message, type) {
    const div = document.createElement("div");
    div.className = type;
    div.innerHTML = message;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getAnswer(question) {
    question = question.toLowerCase().trim();

    for (let i = 0; i < knowledge.length; i++) {
        const item = knowledge[i];

        for (let j = 0; j < item.keywords.length; j++) {
            if (question.includes(item.keywords[j].toLowerCase())) {
                return item.answer;
            }
        }
    }

    return "❌ Sorry! I don't have an answer for that question. Please ask about Aadhaar, PAN Card, Passport, PM Kisan, Scholarship, Government Jobs or Emergency Services.";
}

function sendMessage() {

    const question = userInput.value.trim();

    if (question === "") return;

    addMessage("👤 " + question, "user");

    const answer = getAnswer(question);

    setTimeout(() => {
        addMessage("🤖 " + answer, "bot");
    }, 300);

    userInput.value = "";
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
