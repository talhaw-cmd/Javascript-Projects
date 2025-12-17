const searchInput = document.querySelector('#search-input');
        const recipesContainer = document.querySelector('#recipes-container');
        const searchButton = document.querySelector('#search-button');
        const body = document.querySelector('body');

        searchButton.addEventListener('click', function () {
            recipesContainer.innerHTML = '';
            fetchRecipes();
        });

        async function fetchRecipes() {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`);
            const data = await response.json();

            if (!data.meals) return;

            data.meals.forEach(meal => {
                const card = document.createElement('div');
                card.classList.add('recipe-card');

                card.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <div class="recipe-details">
                        <div class="recipe-title">${meal.strMeal}</div>
                        <div class="recipe-meta">Area: ${meal.strArea}</div>
                        <div class="recipe-category">Category: ${meal.strCategory}</div>
                    </div>
                `;

                const button = document.createElement('button');
                button.textContent = 'Recipe';
                button.classList.add('recipe-button');
                card.appendChild(button);

                button.addEventListener('click', () => {
                    const modal = document.createElement('div');
                    modal.classList.add('modal');
                    body.appendChild(modal);

                    modal.innerHTML = `
                        <div class="modal-title">${meal.strMeal}</div>
                        <div class="modal-content">${meal.strInstructions}</div>
                        <div class="modal-buttons">
                            <a href="${meal.strYoutube}" target="_blank"><button class="link-button">YouTube Recipe</button></a>
                            <a href="${meal.strSource}" target="_blank"><button class="link-button">Detail Recipe</button></a>
                        </div>
                    `;

                    const closeIcon = document.createElement('i');
                    closeIcon.className = "bi bi-x-square-fill close-icon";
                    modal.appendChild(closeIcon);

                    closeIcon.addEventListener('click', () => {
                        body.removeChild(modal);
                    });
                });

                recipesContainer.appendChild(card);
            });
        }

        // Load initial recipes (optional)
        fetchRecipes();