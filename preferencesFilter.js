// preferencesFilter.js
const filterOptions = {
    vegan: false,
    lowCarb: false
};

// Toggle filter preferences
const togglePreference = (preference) => {
    filterOptions[preference] = !filterOptions[preference];
    updateMealPlans();
};

// Update meal plans based on selected filters
const updateMealPlans = () => {
    // Fetch meal plans and apply filters
    const meals = JSON.parse(localStorage.getItem("mealPlans")) || [];
    const filteredMeals = meals.filter(meal => {
        if (filterOptions.vegan && !meal.vegan) return false;
        if (filterOptions.lowCarb && !meal.lowCarb) return false;
        return true;
    });
    displayMeals(filteredMeals);
};

// Expose functions
export { togglePreference, updateMealPlans };
