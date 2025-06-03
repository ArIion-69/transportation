document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      faqItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll('.footer-nav__li');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Удалить .active у всех списков
      document.querySelectorAll('.footer-nav__li-list').forEach(list => {
        list.classList.remove('active');
      });

      // Найти вложенный список в текущем пункте
      const subList = item.querySelector('.footer-nav__li-list');

      // Добавить актив только если список найден
      if (subList) {
        subList.classList.add('active');
      }
    });
  });
});