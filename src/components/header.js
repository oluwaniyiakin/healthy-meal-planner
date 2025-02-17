const createHeader = () => {
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>Healthy Meal Planner</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Meal Plans</a></li>
                <li><a href="#">Recipes</a></li>
                <li><a href="#">Shopping List</a></li>
            </ul>
        </nav>
    `;
    document.body.prepend(header);
};

export { createHeader };
