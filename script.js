// REVEAL ANIMATION
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// TYPING EFFECT
const textArray = [
  "Web Developer. ",
  "Frontend Developer. ",
  "AI Enthusiast. ",
];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typing = document.getElementById("typing");

  if (index >= textArray.length) index = 0;

  currentText = textArray[index];

  if (!isDeleting) {
    typing.textContent = currentText.substring(0, charIndex++);
  } else {
    typing.textContent = currentText.substring(0, charIndex--);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 3000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 200);
}

typeEffect();

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close menu when clicking on a link
navMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navMenu.classList.remove("show");
  }
});

// BACK TO TOP
document.getElementById("foot-btn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// FORM ALERT
document.getElementById("info-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message Sent Successfully 🚀");
});

// CHATBOT
const chatInput = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");

chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let userText = chatInput.value;
    addMessage("You", userText);
    chatInput.value = "";

    let reply = getBotReply(userText);
    setTimeout(() => addMessage("Bot", reply), 500);
  }
});

function addMessage(sender, text) {
  let div = document.createElement("div");
  div.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBody.appendChild(div);
}

function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("skills")) return "I know HTML, CSS, JavaScript, Python.";
  if (msg.includes("projects"))
    return "I built Amazon Clone, Meesho Clone and responsive design webpage.";
  if (msg.includes("contact"))
    return "Email: natarudebsarma17@gmail.com \n Mobole No: 9883955327";
  if (msg.includes("name")) return "I am Nataru Debsarma, a Web Developer.";

  return "Sorry, I am still learning 🤖";
}
