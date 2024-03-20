
const navItems = document.querySelectorAll('.vertical-nav li');

navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('.sub-menu').style.display = 'block'; // Show sub-menu immediately on hover
  });

  item.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!item.querySelector('.sub-menu:hover')) { // Check if sub-menu itself is still hovered
        item.querySelector('.sub-menu').style.display = 'none'; // Hide only if sub-menu is not being hovered
      }
    }, 500); // Delay in milliseconds
  });

  item.addEventListener('click', () => {
    item.querySelector('.sub-menu').classList.toggle('show'); // Toggle sub-menu visibility on click as well
  });
});
