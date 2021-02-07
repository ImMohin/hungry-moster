fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
//https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
//https://www.themealdb.com/api/json/v1/1/search.php?f=a

.then(response => response.json())
.then(data => displayMeals(data));

// all meals get 
const displayMeals = meals => {
    //console.log(meals.meals[0]);
    
    // Read Id html div 
    const mealsDiv = document.getElementById('meals');
    
    // for loop use by access all meals
    for (let i = 0; i < meals.meals.length; i++) {
        const meal = meals.meals[i];
        // console.log(meal.strMeal);
        const mealDiv = document.createElement('div');
        //add class
        mealDiv.className = 'meal';

        const mealInfo = `
            <div onclick></div>
            <h3 class="meal-name">${meal.strMeal}</h3>
            <button onclick="displayMealDetail('${meal.strMeal}')">Details</button>
        `;

        mealDiv.innerHTML = mealInfo;
        //meals div under meal div
        mealsDiv.appendChild(mealDiv);
        
     }
}