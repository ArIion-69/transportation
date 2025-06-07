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

  document.getElementById('burger-toggle').addEventListener('click', function () {
    document.getElementById('main-menu').classList.toggle('active');
  });

  document.querySelectorAll('.nav-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
      const parent = this.closest('.nav-item');
      parent.classList.toggle('open');
    });
  });

document.querySelectorAll('.nav-item.has-sub > a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    const parent = link.closest('.nav-item')
    parent.classList.toggle('open')

    // Закрыть другие, если нужно
    document.querySelectorAll('.nav-item.has-sub').forEach(item => {
      if (item !== parent) item.classList.remove('open')
    })
  })
})

document.querySelectorAll('.sub-menu li.has-sub > a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    const parent = link.closest('li.has-sub')
    parent.classList.toggle('open')
  })
})