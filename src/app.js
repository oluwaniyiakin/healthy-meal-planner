// Import Firebase Authentication methods
import { initializeApp } from "firebase/app";
import { auth } from "./firebase-config.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
} from "firebase/auth";

// Import Meal Plan API and other functionalities
import { fetchMealPlans } from "./services/apiHandler.js";
import { addToShoppingList } from "./shoppingList.js"; 
import { togglePreference } from "./preferencesFilter.js";

// DOM Elements for Firebase Authentication
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

// DOM Elements for Meal Plan and Preferences
const generateMealPlanBtn = document.getElementById("generate-meal-plan");
const mealResults = document.getElementById("meal-results");
const veganFilter = document.getElementById("vegan-filter");
const lowCarbFilter = document.getElementById("low-carb-filter");

// Firebase Authentication Functions
signupBtn.addEventListener("click", async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
        alert(`Welcome, ${userCredential.user.email}`);
    } catch (error) {
        alert(error.message);
    }
});

loginBtn.addEventListener("click", async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
        alert(`Welcome back, ${userCredential.user.email}`);
    } catch (error) {
        alert(error.message);
    }
});

logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    alert("Logged out successfully.");
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(`User logged in: ${user.email}`);
        logoutBtn.style.display = "block";
        signupBtn.style.display = "none";
        loginBtn.style.display = "none";
    } else {
        console.log("No user logged in");
        logoutBtn.style.display = "none";
        signupBtn.style.display = "block";
        loginBtn.style.display = "block";
    }
});

// Meal Plan Generation
generateMealPlanBtn.addEventListener("click", async () => {
    const mealData = await fetchMealPlans();
    localStorage.setItem("mealPlans", JSON.stringify(mealData.meals)); // Store meals in local storage
    displayMeals(mealData.meals);
});

// Display Meals
const displayMeals = (meals) => {
    mealResults.innerHTML = ""; // Clear previous results

    meals.forEach(meal => {
        const mealCard = document.createElement("div");
        mealCard.classList.add("meal-card");

        mealCard.innerHTML = `
            <h3>${meal.title}</h3>
            <img src="${meal.image}" alt="${meal.title}">
            <p>Ready in ${meal.readyInMinutes} minutes</p>
            <button class="save-to-list" data-ingredients="${meal.extendedIngredients.map(i => i.name).join(', ')}">Save Ingredients</button>
        `;

        const saveButton = mealCard.querySelector(".save-to-list");
        saveButton.addEventListener("click", () => {
            const ingredients = saveButton.getAttribute("data-ingredients").split(", ");
            ingredients.forEach(ingredient => addToShoppingList(ingredient));
        });

        mealResults.appendChild(mealCard);
    });
};

// Handle Filter Changes
veganFilter.addEventListener("change", () => {
    togglePreference("vegan");
});

lowCarbFilter.addEventListener("change", () => {
    togglePreference("lowCarb");
});
