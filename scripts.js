// Toggle Dark Mode
function toggleDarkMode() {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
}

// Set Default Theme
document.body.setAttribute('data-theme', 'light');
