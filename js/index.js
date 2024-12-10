document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");
    const mainContent = document.getElementById("main-content");

    menuToggle.addEventListener("click", () => {
        sidebar.classList.add("open");
        mainContent.classList.add("shifted");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("open");
        mainContent.classList.remove("shifted");
    });
});
