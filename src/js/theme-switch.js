const btnSwitcherRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');

bodyRef.classList.add('light-theme');

if (localStorage.getItem('theme') === 'dark-theme') {
  console.log(localStorage.getItem('theme'));
  bodyRef.classList.toggle('dark-theme');
  bodyRef.classList.toggle('light-theme');
  btnSwitcherRef.checked = true;
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const onSwitcherClick = (event) => {
  bodyRef.classList.toggle('dark-theme');
  bodyRef.classList.toggle('light-theme');
  localStorage.setItem('theme', bodyRef.getAttribute('class'));
}

btnSwitcherRef.addEventListener('click', onSwitcherClick);


