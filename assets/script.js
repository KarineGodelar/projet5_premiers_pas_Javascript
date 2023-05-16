const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => alert("ceci est la flèche gauche"));



const bulletNumber = slides.length;
console.log("bulletNumber:", bulletNumber);

const dotSection = document.querySelector(".dots");
const bulletArray = [];

for (let i = 0; i < bulletNumber; i++) {

	bulletArray[i] = document.createElement("div");
	bulletArray[i].classList.add("dot");
	dotSection.appendChild(bulletArray[i]);

}

bulletArray[0].classList.add("dot_selected");

const slideNumber = 1 ;


const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {

}
);

console.log (number);