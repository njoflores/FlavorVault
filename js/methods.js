// Grab elements
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const content = document.getElementById('content'); // Correct the selector here

// Toggle the sidebar open/close
menuToggle.addEventListener('click', function() {
  sidebar.classList.toggle('open');
  content.classList.toggle('shifted'); // Shift content when sidebar is open
});

// Close the sidebar when the close button is clicked
closeBtn.addEventListener('click', function() {
  sidebar.classList.remove('open');
  content.classList.remove('shifted'); // Remove the shift when sidebar is closed
});
