document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Optionally, you can change the icon for dark/light mode
        const crescentIcon = document.querySelector('.crescent-icon');
        if (body.classList.contains('dark-mode')) {
            crescentIcon.src = 'moon-icon.png'; // Replace with dark mode icon if available
        } else {
            crescentIcon.src = 'crescent-icon.png'; // Revert to light mode icon
        }
    });
});
// Smooth Section Appearance on Scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% is visible
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});
