// Fetch recipe ID from URL
const params = new URLSearchParams(window.location.search);
const recipeId = params.get('id');

// Placeholder for recipe data (can be replaced with a real database)
const recipes = [
    {
        id: "1",
        title: "Chocolate Cake",
        category: "Dessert",
        image: "images/chocolate-cake.jpg",
        ingredients: [
            "2 cups of flour",
            "1 cup of sugar",
            "1/2 cup of cocoa powder",
            "1 tsp baking soda",
            "1/2 tsp salt",
            "1 cup of water",
            "1/2 cup of vegetable oil",
            "1 tsp vanilla extract"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C).",
            "Mix dry ingredients in a bowl.",
            "Add wet ingredients and stir until smooth.",
            "Pour into a greased pan and bake for 30 minutes."
        ]
    },
    {
        id: "2",
        title: "Grilled Salmon",
        category: "Dinner",
        image: "images/grilled-salmon.jpg",
        ingredients: [
            "2 salmon fillets",
            "1 lemon (sliced)",
            "2 tbsp olive oil",
            "1 tsp garlic powder",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat grill to medium heat.",
            "Brush salmon with olive oil and season with garlic powder, salt, and pepper.",
            "Place lemon slices on top and grill for 6-8 minutes per side."
        ]
    }
];

// Find the recipe with the matching ID
const recipe = recipes.find(r => r.id === recipeId);

// Render the recipe on the page
if (recipe) {
    const recipeDetails = document.getElementById('recipe-details');
    recipeDetails.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}">
        <p><strong>Category:</strong> ${recipe.category}</p>
        <h3>Ingredients:</h3>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h3>Instructions:</h3>
        <ol>
            ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;
} else {
    // Handle invalid recipe ID
    document.getElementById('recipe-details').innerHTML = `
        <h2>Recipe not found</h2>
        <p>Sorry, we couldn't find the recipe you're looking for.</p>
    `;
}
