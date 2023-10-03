const categories = document.getElementById('categories');
const difficulty = document.getElementById('difficulty');
let value = parseInt(categories.value);

localStorage.setItem("categoryId",value);

function getCatId() {
    let value = parseInt(categories.value);

    localStorage.setItem("categoryId",parseInt(categories.value));
    localStorage.setItem("difficultyLevel",difficulty.value);
    return window.location.assign("/game.html");
}
