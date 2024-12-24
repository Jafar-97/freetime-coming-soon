document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        darkModeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Animate Sections on Scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});
