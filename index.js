const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

//adding event listner
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);


//getting meal list matching the ingridients
function getMealList(){
    let searchInputTxt = document.getElementById
    ('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response =>response.json())
    .then(data => {
       let html = "";
       if(data.meals){
        data.meals.forEach(meal => {
            html +=`
                <div class="meal-item" data-id ="${meal.idmeal}">
                    <div class="meal-image">
                         <img src= "${meal.strMealThumb}" width="50%" height="auto" alt="food">
                </div>
                <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">Get Recipe</a>
                    </div>
                </div> 
            `;
        });
        mealList.classList.remove('notFound');
       } else{
        html = "sorry, no such meal found!";
        mealList.classList.add('notFound');
       }
       mealList.innerHTML = html;
    });
}

//getting the meal recipe
function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874`)
        .then(response =>response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}

//modal Creation
function mealRecipeModal(meal){
    
}