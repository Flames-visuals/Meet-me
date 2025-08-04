document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const htmlTag = document.documentElement;

  if (!toggleBtn) {
    console.log("Toggle button not found!");
    return;
  }

  let currentTheme = localStorage.getItem('theme') || 'dark';
  htmlTag.setAttribute('data-theme', currentTheme);

  toggleBtn.addEventListener('click', () => {
    const newTheme = htmlTag.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    htmlTag.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});