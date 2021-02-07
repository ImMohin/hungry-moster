
const search = document.getElementById('search');
search.addEventListener('keyup', (event) => {
    let searchOn = event.target.value;
    console.log(searchOn);
    
  
});

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
            <div onclick="displayDetails('${meal.idMeal}')">
            <img id="thumbImg" src="${meal.strMealThumb}">
            <h3 class="meal-name">${meal.strMeal}</h3>
            </div>
        `;

        mealDiv.innerHTML = mealInfo;
        //meals div under meal div
        mealsDiv.appendChild(mealDiv);
        
     }
}

const displayDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
    fetch(url)
    .then(response => response.json())
    .then(data => renderMealInfo(data.meals[0]))
}

const renderMealInfo = meal => {
    const mealDiv = document.getElementById('mealDetail');
    mealDiv.innerHTML = `
        <img id="thumbImg" src="${meal.strMealThumb}">
        <h3 class="meal-name">${meal.strMeal}</h3>
        <h4>Ingredients</h4>
        <ul>
            <li>${meal.strIngredient1}</li>
            <li>${meal.strIngredient2}</li>
            <li>${meal.strIngredient3}</li>
            <li>${meal.strIngredient4}</li>
            <li>${meal.strIngredient5}</li>
        </ul>


        

    `;
}