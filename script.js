/* const containerSlider = document.querySelector(".container-slider");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");
const slidesLength = slideRight.querySelectorAll("div").length;

let numberActiveSlide = 0;

slideLeft.style.top = `-${(slidesLength-1) * 100}vh`;

arrowUp.addEventListener("click", function() {
    changeSlide("up")
});

arrowDown.addEventListener("click", function() {
    changeSlide("down")
})

function changeSlide(direction) {
    const sliderHeight = containerSlider.clientHeight;

    if(direction === "up") {
        numberActiveSlide++;
        if(numberActiveSlide >= slidesLength) {
            numberActiveSlide = 0;
        }
    } else {
        numberActiveSlide--;
        if(numberActiveSlide < 0) {
            numberActiveSlide = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${numberActiveSlide * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${numberActiveSlide * sliderHeight}px)`;
} */

const containerSlider = document.querySelector(".container-slider");
const leftSlide = document.querySelector(".slide-left");
const rightSlide = document.querySelector(".slide-right");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");
const slidesLength = rightSlide.querySelectorAll("div").length;

let numberActiveSlide = 0;

// Srovnání oranžové barvy podle barvy snímku napravo
// minus před zavorkou nám posunuje vrstvy nahoru, jinak by šli dolu o celou vh
leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

// Eventa na šipku nahoru
arrowUp.addEventListener("click", function() {
    changeSlide("up");
})

// Eventa na šipku dolu
arrowDown.addEventListener("click", function() {
    changeSlide("down");
})

// Funkce na hýbání slidem
function changeSlide(direction) {
    // zjistíme si výšku zařízení a uložíme jí do proměnné sliderHeight
    const sliderHeight = containerSlider.clientHeight;

    if(direction === "up") {
        // Proměnná se inkrementuje
        numberActiveSlide++;
        // Pokud je počet aktivních snímků větší nebo roven počtu slidů, zase se to vynuluje
        if(numberActiveSlide >= slidesLength) {
            numberActiveSlide = 0;
        }
    } else {
        // Proměnná se dekrementuje
        numberActiveSlide--;
        // Pokud je počet aktivních snímků menší než 0, numberActiveSlide se přesune na poslední snímek
        if(numberActiveSlide < 0) {
            numberActiveSlide = slidesLength - 1
        }
    }
    // Tento kód umožnuje hýbání(transformování os Y na obou stranách)
    rightSlide.style.transform = `translateY(-${numberActiveSlide * sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${numberActiveSlide * sliderHeight}px)`;
}

