document.getElementById("donationForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your donation!");
});

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Modals

// Open modal when card is clicked
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const modalId = card.dataset.modal;
        document.getElementById(modalId).classList.add("show");
    });
});

// Close modal (X button)
document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".modal").classList.remove("show");
    });
});

// Close when clicking outside
document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
});