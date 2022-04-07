//Slider
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) =>{
    const imgLength = movieLists[i].querySelectorAll("img").length;
    let counter = 0;
    arrow.addEventListener("click", () =>{
        //window.innerwidth gets the widt of the screen and the screen is dived by the width of the image 
        //to make the slider responsive
        const ratio = Math.floor(window.innerWidth / 270 );
        counter++;
        if (imgLength - ( 4 + counter) + (5 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(
             ${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            counter = 0;
        }
    });
});


//Toggle
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");


ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})