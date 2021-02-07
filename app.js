fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
//https://www.themealdb.com/api/json/v1/1/search.php?f=a

.then(response => response.json())
.then(data => displayCategories(data));

// all meals get 
const displayCategories = categories => {
    //console.log(meals.meals[0]);
    
    // Read Id html div 
    const categoriesDiv = document.getElementById('categories');
    
    // for loop use by access all meals
    for (let i = 0; i < categories.categories.length; i++) {
        const categorie = categories.categories[i];
        console.log(categorie.strCategory);

        
     }
}