// Select the dark mode toggle button
const darkModeToggle = document.getElementById("darkModeToggle");

// Add event listener for dark mode toggle
darkModeToggle.addEventListener("click", () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle("dark-mode");

    // Save the user's preference to localStorage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
});

// Load the user's dark mode preference on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode) {
        document.body.classList.add("dark-mode");
    }
});
