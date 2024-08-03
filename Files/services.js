//humbarger menu open and close
const menuOpen = document.getElementById('open-menu');
        const navBar = document.getElementById('main-nav');

        menuOpen.addEventListener('click', () => {
            menuOpen.classList.toggle('openmenu');
            navBar.classList.toggle('active');
        });

//theme mode - light and dark theme
let lightMode = localStorage.getItem('lightMode');
const themeIcon = document.getElementById('theme-icon');
const header = document.getElementById('header');

const enableLightTheme = () => {
  document.body.classList.add('light-theme');
  themeIcon.src = 'Assets/moon.png';
  header.style.backgroundColor = 'rgba(255, 255, 255, 0.507)';
  localStorage.setItem('lightMode', 'enable');
}

const disableLightTheme = () => {
  document.body.classList.remove('light-theme');
  themeIcon.src = 'Assets/sun.png';
  header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  localStorage.setItem('lightMode', 'disable');
}

if (lightMode === 'enable') {
  enableLightTheme();
}

themeIcon.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode');
  if (lightMode !== 'enable') {
    enableLightTheme();
  } else {
    disableLightTheme();
  }

})        