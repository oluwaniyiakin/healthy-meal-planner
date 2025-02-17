// shoppingList.js
const shoppingListContainer = document.getElementById("shopping-list");

// Load shopping list from localStorage
const loadShoppingList = () => {
    const shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];
    displayShoppingList(shoppingList);
};

// Display shopping list in the UI
const displayShoppingList = (list) => {
    shoppingListContainer.innerHTML = ""; // Clear current list
    list.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        shoppingListContainer.appendChild(listItem);
    });
};

// Add ingredient to shopping list
const addToShoppingList = (ingredient) => {
    const shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];
    shoppingList.push(ingredient);
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
    displayShoppingList(shoppingList);
};

// Remove all items from shopping list
const clearShoppingList = () => {
    localStorage.removeItem("shoppingList");
    displayShoppingList([]);
};

// Expose methods
export { loadShoppingList, addToShoppingList, clearShoppingList };
