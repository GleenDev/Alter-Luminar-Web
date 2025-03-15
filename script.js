function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".feature-card");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9;

        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Jalankan saat halaman dimuat
});
// Fungsi untuk membuka halaman dengan suara klik
function openPage(page) {
    playClickSound();
    setTimeout(() => {
        window.location.href = page;
    }, 300); // Tunggu efek suara
}

// Fungsi untuk memainkan suara klik
function playClickSound() {
    let clickSound = new Audio("click.mp3");
    clickSound.play();
}

// Mode Gelap/Terang
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    toggleButton.textContent = body.classList.contains("light-mode") ? "☀️ Mode Terang" : "🌙 Mode Gelap";
});
