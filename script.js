document.getElementById("donationForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your donation!");
});

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});