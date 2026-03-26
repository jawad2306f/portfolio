// Typing Animation (Word Changer)
const words = document.querySelectorAll(".word");
let index = 0;

function rotateWords() {
    words.forEach(w => w.style.display = "none");
    words[index].style.display = "inline-block";
    index = (index + 1) % words.length;
}
setInterval(rotateWords, 2000);
rotateWords(); // Start immediately

// Sticky Header
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Mobile Menu Toggle
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

// Simple Scroll Animation Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));