document.addEventListener('DOMContentLoaded', function () {
    const parentItems = document.querySelectorAll('.chapter-item.expanded');

    parentItems.forEach((item) => {
        item.addEventListener('click', () => {
            const subMenu = item.querySelector('.chapter-item.expanded');
            subMenu.classList.toggle('active');
            const deployIcon = item.querySelector('.deploy');
            deployIcon.textContent = subMenu.classList.contains('active') ? '▾' : '▸';
        });
    });
});
