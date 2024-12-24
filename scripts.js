function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const navbar = document.querySelector('.navbar');
  const footer = document.querySelector('footer');
  navbar.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
}
