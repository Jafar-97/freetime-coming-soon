// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    // Add dark mode toggle functionality
    const darkModeToggle = document.createElement("div");
    darkModeToggle.id = "darkModeToggle";
    darkModeToggle.innerHTML = "&#9790;"; // Moon icon
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.top = "10px";
    darkModeToggle.style.right = "20px";
    darkModeToggle.style.cursor = "pointer";
    darkModeToggle.style.fontSize = "1.5rem";
    darkModeToggle.style.zIndex = "1001";
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Apply styles for dark mode
    const darkModeStyles = document.createElement("style");
    darkModeStyles.innerHTML = `
        .dark-mode {
            background: #121212 !important;
            color: #ffffff !important;
        }
        .dark-mode header {
            background-color: #1f1f1f !important;
            box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
        }
        .dark-mode .linkedin-button {
            background-color: #005983 !important;
        }
        .dark-mode footer {
            background-color: #1f1f1f !important;
        }
    `;
    document.head.appendChild(darkModeStyles);

    // Add smooth scroll for navigation links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
