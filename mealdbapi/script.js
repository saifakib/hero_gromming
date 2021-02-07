
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(res => res.json())
    .then(data => category(data.meals))
    .catch(err => console.log(err))


let mealsDiv = document.querySelector("#meals");
let mealDetailsDiv = document.querySelector("#mealDetailsDiv")


const category = (meals) => {
    meals.forEach(meal => {
        let mealItem = mealDiv(meal)
        mealsDiv.appendChild(mealItem)
    })
}

const mealDiv = (meal) => {

    const div = document.createElement('div')
    div.className = 'col-md-3 p-4 m-5 size'
    const mealInfo = `
    <img onclick={sigleMeal(${meal.idMeal})} class="img-size" src=${meal.strMealThumb}
        <p>${meal.strMeal}</p>`
    div.innerHTML = mealInfo

    return div;
}

const sigleMeal = (mealId) => {
    const singleMealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(singleMealUrl)
    .then(res => res.json())
    .then(data => mealDetails(data.meals[0]))
    .catch(err => console.log(err))
} 

const mealDetails = (meal) => {
    console.log(meal)
    const div = document.createElement('div')
        div.className = "divItem"
        const mealdetailsInfo = `
        <img src=${meal.strMealThumb} />
        <h2>Title: ${meal.strMeal}</h2>
        <h3>Category: ${meal.strCategory}</h3>
        <h3>Area: ${meal.strArea}</h3>
        <p>${meal.strInstructions}</p>
        <a href=${meal.strSource}>Source</a>`
    
    div.innerHTML = mealdetailsInfo;
    
    mealDetailsDiv.append(div);
}