 // Navbar Toggle
document.getElementById("menu-btn").addEventListener("click", function() {
     document.getElementById("menu").classList.toggle("hidden");
 });
 
// Get all filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

// Add event listener to each button
filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const category = this.getAttribute('data-category');

    // Loop through all projects and filter based on category
    projects.forEach(project => {
      if (category === 'all') {
        project.style.display = 'block'; // Show all projects
      } else if (project.getAttribute('data-category') === category) {
        project.style.display = 'block'; // Show matching category
      } else {
        project.style.display = 'none'; // Hide non-matching category
      }
    });
  });
});



 
 //active link
 // Select all the sections
const sections = document.querySelectorAll('section');

// Select all the links
const links = document.querySelectorAll('nav ul li a');

// Create an observer to detect when a section enters the viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // If the section is in the viewport
    if (entry.isIntersecting) {
      // Remove the active class from all links
      links.forEach(link => link.classList.remove('active-link'));
      
      // Add the active class to the link corresponding to the section
      const targetId = entry.target.id;
      const activeLink = document.querySelector(`a[href="#${targetId}"]`);
      activeLink.classList.add('active-link');
    }
  });
}, { threshold: 0.5 });  // 50% of the section should be in view to trigger the observer

// Observe each section
sections.forEach(section => observer.observe(section));








