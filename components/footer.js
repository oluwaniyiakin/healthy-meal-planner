const createFooter = () => {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>Healthy Meal Planner &copy; 2025</p>
    `;
    document.body.appendChild(footer);
};

export { createFooter };
