document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('formResponse').innerText = 'Thank you for reaching out!';
    document.getElementById('contactForm').reset();
});
