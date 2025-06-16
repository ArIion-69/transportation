document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu_btn');
  const menu = document.querySelector('.menu_ul');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});
// крестик меню
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu_btn');
  btn.addEventListener('click', () => {
    btn.classList.toggle('menu_btn--active');
  });
});
