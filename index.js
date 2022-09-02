const searchBtn=document.getElementById('search-btn');
const mealList=document.getElementById('meal');
const mealDetailsContent = document.querySelector('meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

//adding event listner
searchBtn.addEventListener('click',getMealList);

//getting meal list matching the ingridients
function getMealList(){
    let searchInputTxt=document.getElementById
    ('search-input').value.trim();
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=egg')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}