// Toggle Sidebar
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('shifted');
});

// Close Button
const closeButton = document.getElementById('close-btn');
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
    mainContent.classList.remove('shifted');
});
