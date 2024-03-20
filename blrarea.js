const cityDropdownBtn = document.querySelector('.city-dropdown');
const cityDropdownContent = document.querySelector('.city-dropdown-content');

// Add event listener for click on the dropdown button
cityDropdownBtn.addEventListener('click', () => {
  // Toggle the visibility of the dropdown content
  cityDropdownContent.classList.toggle('show');
});

// (Optional) Handle closing the dropdown when clicking outside the button
document.addEventListener('click', (event) => {
  if (!event.target.matches('.city-dropdown') && !event.target.matches('.city-dropdown-content')) {
    cityDropdownContent.classList.remove('show');
  }
});


