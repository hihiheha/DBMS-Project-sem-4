const blocks = document.querySelectorAll(".block");

blocks.forEach(block => {
  block.addEventListener("mouseover", () => {
    // Add additional effects on hover, such as:
    // - Increasing font size or opacity
    // - Animating other properties
  });

  block.addEventListener("mouseout", () => {
    // Reset any hover effects
  });
});
