// Typewriter Effect
const typewriterText = document.querySelector(".typewriter-text");
const words = ["a Web Developer", "a Programmer", "a Designer"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[wordIndex];
    if (isDeleting) {
        typewriterText.textContent = currentWord.substring(0, letterIndex--);
    } else {
        typewriterText.textContent = currentWord.substring(0, letterIndex++);
    }

    if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}

document.addEventListener("DOMContentLoaded", () => type());

// Navigation Toggle Functions
function hamburg() {
    document.querySelector(".dropdown").classList.add('show');
}

function cancel() {
    document.querySelector(".dropdown").classList.remove('show');
}

// Contact Form Validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    document.getElementById('formResponse').innerText = "Message sent successfully!";
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Smooth Scrolling
document.querySelectorAll('nav .links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelectorAll('nav .links a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
    
});

