function toggleDarkMode() {
  const theme = document.body.getAttribute('data-theme');
  document.body.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
}

function showModal() {
  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}
