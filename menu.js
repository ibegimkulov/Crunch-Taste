const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-btn.active')?.classList.remove('active');
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');
    menuItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        // Показываем с задержкой, чтобы сработал transition
        item.classList.remove('hidden');
      } else {
        // Скрываем с анимацией
        item.classList.add('hidden');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".menu-item");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      items.forEach((item) => {
        const category = item.getAttribute("data-category");

        if (filter === "all" || filter === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});