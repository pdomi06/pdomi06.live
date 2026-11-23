const sections = Array.from(document.querySelectorAll(".section"));
const nav = document.querySelector(".nav");
const navLinks = nav.querySelectorAll("a");
const aside = document.querySelector(".aside");
const navToggle = document.querySelector(".nav-toggler");

function showCurrentSection() {
    const target = sections.find(section => "#" + section.id === location.hash) || sections[0];
    const previous = document.querySelector(".section.active");

    for (const section of sections) {
        section.classList.toggle("back-section", section === previous && section !== target);
        section.classList.toggle("active", section === target);
        section.inert = section !== target;
    }
    for (const link of navLinks) {
        const selected = link.hash === "#" + target.id;
        link.classList.toggle("active", selected);
        if (selected) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    }
}

function setMenuOpen(open) {
    aside.classList.toggle("open", open);
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    for (const section of sections) {
        section.classList.toggle("open", open);
    }
}

navToggle.addEventListener("click", () => setMenuOpen(!aside.classList.contains("open")));
nav.addEventListener("click", event => {
    if (event.target.closest("a")) setMenuOpen(false);
});
window.addEventListener("hashchange", showCurrentSection);
showCurrentSection();

const styleSwitcher = document.querySelector(".style-switcher");
const styleToggle = document.querySelector(".style-switcher-toggler");
styleToggle.addEventListener("click", () => styleSwitcher.classList.toggle("open"));
for (const section of sections) {
    section.addEventListener("scroll", () => styleSwitcher.classList.remove("open"));
}

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    for (const style of alternateStyles) {
        style.disabled = style.title !== color;
    }
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    const dark = document.body.classList.toggle("dark");
    const icon = dayNight.querySelector("i");
    icon.classList.toggle("fa-sun", dark);
    icon.classList.toggle("fa-moon", !dark);
});
