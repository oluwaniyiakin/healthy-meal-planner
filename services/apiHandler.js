// Example of API handler module structure
const apiKey = 'c4203a13daf3424886c5349745ea5d8c'; //  API key

const fetchMealPlans = async () => {
    const response = await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}`);
    const data = await response.json();
    console.log(data);
    return data;
};

const fetchRecipes = async (ingredient) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${apiKey}`);
    const data = await response.json();
    console.log(data);
    return data;
};

export { fetchMealPlans, fetchRecipes };
