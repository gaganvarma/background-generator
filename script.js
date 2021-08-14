var tagline = document.querySelector("h3");
var color1 = document.querySelector(".color-1");
var color2 = document.querySelector(".color-2");
var body = document.querySelector("body");

//function to set gradient
function setGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value +")";
    tagline.textContent = body.style.background;
}

setGradient(); //Calling function to set initial gradient

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);