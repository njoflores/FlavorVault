const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const mainContent = document.getElementById('main-content');

// Toggle sidebar visibility
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('shifted'); // Shift main content when sidebar opens
});

// Close sidebar when the close button is clicked
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    mainContent.classList.remove('shifted'); // Shift back main content
});

// Close sidebar if clicked outside of it
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('open');
        mainContent.classList.remove('shifted');
    }
});


// Get filter and recipe elements
const cuisineFilter = document.getElementById('cuisine');
const mealTypeFilter = document.getElementById('meal-type');
const cookingMethodFilter = document.getElementById('cooking-method');
const seasonFilter = document.getElementById('season');
const searchInput = document.getElementById('search');
const recipeCards = document.querySelectorAll('.recipe-card');
const resetButton = document.getElementById('reset-filters');


// Function to display filtered recipes
function filterRecipes() {
    const searchQuery = searchInput.value.toLowerCase();
    const selectedCuisine = cuisineFilter.value.toLowerCase();
    const selectedMealType = mealTypeFilter.value.toLowerCase();
    const selectedCookingMethod = cookingMethodFilter.value.toLowerCase();
    const selectedSeason = seasonFilter.value.toLowerCase();

    let filteredRecipes = Array.from(recipeCards).filter(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const cuisine = card.dataset.cuisine.toLowerCase();
        const mealType = card.dataset.mealType.toLowerCase();
        const cookingMethod = card.dataset.cookingMethod.toLowerCase();
        const season = card.dataset.season.toLowerCase();

        // Check if recipe matches the filters (including empty "None" filters)
        return (title.includes(searchQuery) &&
                (selectedCuisine === "" || cuisine.includes(selectedCuisine)) &&
                (selectedMealType === "" || mealType.includes(selectedMealType)) &&
                (selectedCookingMethod === "" || cookingMethod.includes(selectedCookingMethod)) &&
                (selectedSeason === "" || season.includes(selectedSeason)));
    });

    // If no filters are selected, all recipes should be displayed
    if (selectedCuisine === "" && selectedMealType === "" && selectedCookingMethod === "" && selectedSeason === "" && searchQuery === "") {
        filteredRecipes = Array.from(recipeCards); // Show all recipes
    }

    // Display all filtered recipes
    displayFilteredRecipes(filteredRecipes);
}

// Display filtered recipes
function displayFilteredRecipes(filteredRecipes) {
    // Hide all recipes initially
    recipeCards.forEach(card => card.style.display = 'none');

    // Display the filtered recipes
    filteredRecipes.forEach(card => card.style.display = 'block');
}

// Reset filters to default ("None")
resetButton.addEventListener("click", () => {
    cuisineFilter.value = "";
    mealTypeFilter.value = "";
    cookingMethodFilter.value = "";
    seasonFilter.value = "";
    searchInput.value = "";
    filterRecipes(); // Reapply the filters after resetting
});