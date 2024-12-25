// Get the dark mode toggle button
const darkModeToggle = document.getElementById("darkModeToggle");

// Add click event listener for the toggle button
darkModeToggle.addEventListener("click", () => {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle("dark-mode");

    // Save the dark mode state in local storage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
});

// Apply the dark mode if it was enabled previously
document.addEventListener("DOMContentLoaded", () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
