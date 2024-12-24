function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('dark-mode');
}
