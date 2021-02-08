
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(res => res.json())
    .then(data => category(data.meals))
    .catch(err => console.log(err))


let mealsDiv = document.querySelector("#meals");
let mealDetailsDiv = document.querySelector("#mealDetailsDiv")
let searchInput = document.querySelector('#search');
let searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener('click', search);

function search() {
    let value = searchInput.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    fetch(url)
        .then(res => res.json())
        .then(data => searchFoods(data.meals))

}

const searchFoods = (meals) => {

    while (mealsDiv.hasChildNodes()) {
        mealsDiv.removeChild(mealsDiv.firstChild);
    }
    // if(mealDetailsDiv.hasChildNodes()) {
    //     mealDetailsDiv.removeChild(mealDetailsDiv.firstChild);
    // }
    if (meals !== null) {
        meals.forEach(meal => {
            let mealItem = mealDiv(meal)
            mealsDiv.appendChild(mealItem)
        })
    } else {
        console.log(meals);
        mealsDiv.innerHTML = `
        <h3 style="background-color: yellow; padding: 10px;">Not Found</h3>
        `
    }

}

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
        <p>${meal.strMeal}</p>
        <button class="btn btn-secondary" onclick="singleMeal('${meal.idMeal}')">Meal Details</button>`
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

    const div = document.createElement('div')
    div.className = "divItem"
    const mealDetailsInfo = `
        <img src=${meal.strMealThumb} />
        <h2>Title: ${meal.strMeal}</h2>
        <h3>Category: ${meal.strCategory}</h3>
        <h3>Ingredients:</h3>
        `
    let ul = document.createElement('ul')
    for (let i = 1; i < 6; i++) {
        let li = document.createElement('li');
        let strIngredient = `strIngredient${i}`;
        let strMeasure = `strMeasure${i}`;
        let listInfo = `
            <bold>${meal[strIngredient]} - ${meal[strMeasure]}</bold>
            `
        li.innerHTML = listInfo;
        ul.appendChild(li)
    }

    div.innerHTML = mealDetailsInfo;
    div.appendChild(ul)
    while (mealDetailsDiv.hasChildNodes()) {
        mealDetailsDiv.removeChild(mealDetailsDiv.firstChild);
    }

    mealDetailsDiv.append(div);
}