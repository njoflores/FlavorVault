// Form validation for Contact Us page
function validateForm() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;

    // Check if any fields are empty
    if (firstName === "" || lastName === "" || email === "" || comment === "") {
        alert("All fields must be filled out.");
        return false;
    }

    // Simple email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Redirect to home page upon successful submission
    alert("Thank you for your message!");
    window.location.href = "About.html";  // Change this to the path of your personal home page
    return false; // Prevent form submission to stay on the page
}

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
