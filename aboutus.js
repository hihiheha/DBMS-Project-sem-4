// Smooth scrolling to the "Get Involved" section when clicking the "Join the Movement" button
document.querySelector('.intro-section .btn').addEventListener('click', () => {
    const getInvolvedSection = document.querySelector('#get-involved');
    getInvolvedSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Add interactive elements or animations as needed, e.g.:
  /*
  // Create a slideshow of impact stories
  const impactStories = document.querySelector('.impact-section');
  // ... (Add logic to cycle through stories)
  
  // Add a hover effect to team member profiles
  const teamMembers = document.querySelectorAll('.team-member');
  teamMembers.forEach(member => {
    member.addEventListener('mouseover', () => {
      // ... (Add hover effect)
    });
  });
  */
  