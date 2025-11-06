// ====== PRELOADER FUNCTION ======
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.8s ease";
        setTimeout(() => (preloader.style.display = "none"), 800);
    }, 1000);
});

// ====== SHOW ONE-OF-US SECTION ======
const becomeBtn = document.getElementById("becomeBtn");
const oneOfUs = document.getElementById("oneOfUs");
const mainSections = document.querySelectorAll(
    " .hero, #programs, #events, #Partners, #join "
);

becomeBtn.addEventListener("click", () => {
    // Hide all main sections
    mainSections.forEach((sec) => (sec.style.display = "none"));
    // Show one-of-us section
    oneOfUs.classList.add("show");
});

// ====== CARD INTERACTION + FORM NAVIGATION ======
const cards = document.querySelectorAll(".category-card");
const sisterForm = document.getElementById("sisterForm");
const mentorForm = document.getElementById("mentorForm");
const partnerForm = document.getElementById("partnerForm");
const allForms = [sisterForm, mentorForm, partnerForm];

// Hide all forms by default
allForms.forEach((form) => (form.style.display = "none"));

// Card click logic
cards.forEach((card) => {
    card.addEventListener("click", () => {
        // Hide one-of-us grid
        oneOfUs.style.display = "none";

        // Hide all forms first
        allForms.forEach((form) => (form.style.display = "none"));

        // Normalize text for matching
        const cardText = card.textContent.trim().toLowerCase();

        // Match form to card text
        if (cardText.includes("sister")) {
            sisterForm.style.display = "block";
        } else if (cardText.includes("mentor")) {
            mentorForm.style.display = "block";
        } else if (cardText.includes("partner")) {
            partnerForm.style.display = "block";
        }
    });
});

// ====== BACK BUTTON CREATION ======
document.querySelectorAll(".form-page").forEach((page) => {
    const back = document.createElement("button");
    back.textContent = "← Back";
    back.classList.add("btn-outline");
    back.style.marginBottom = "1.5rem";
    back.addEventListener("click", () => {
        page.style.display = "none";
        oneOfUs.style.display = "block";
    });
    page.prepend(back);
});

