var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("button");


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", function() {
	var randomColor1 = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	var randomColor2 = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
	color1.value = randomColor1;
	color2.value = randomColor2;
	css.textContent = body.style.background + ";";
});