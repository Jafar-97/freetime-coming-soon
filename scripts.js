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
