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

// const arrowLeft = document.querySelector(".arrow_left");
// arrowLeft.addEventListener("click", () => alert("ceci est la flèche gauche"));



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



// ça fonctionne pour effacer complètement la banner
// document.querySelector("#banner").innerHTML="";
// document.querySelector("#banner").innerHTML="HEllo!!!";
// Fin

// slideNumber sert à incrémenter le bullet, l'image et le texte sélectionné
let slideNumber = 1;


let codeHtml = "";

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {

	slideNumber++

	// codeHtml = "<div><img src='./assets/images/slideshow/slide" + `${slideNumber}` + ".jpg'></div> <img class='arrow arrow_left' src='./ assets / images / arrow_left.png' alt='flèche gauche du carousel'> < img class='arrow arrow_right' src ='./assets/images/arrow_right.png' alt = 'flèche droite du carousel' > ";
	codeHtml = "<div><img class='banner-img' src='./assets/images/slideshow/slide" + `${slideNumber}` + ".jpg'></div>";

	// alert("le number est"+`${slideNumber}`+codeHtml)

	document.querySelector(".banner-img").innerHTML = "";
	document.querySelector(".banner-img").innerHTML = codeHtml;

	bulletArray[slideNumber-1].classList.add("dot_selected");
	bulletArray[slideNumber-2].classList.remove("dot_selected");

}
);

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {

	slideNumber--

	// codeHtml = "<div><img src='./assets/images/slideshow/slide" + `${slideNumber}` + ".jpg'></div> <img class='arrow arrow_left' src='./ assets / images / arrow_left.png' alt='flèche gauche du carousel'> < img class='arrow arrow_right' src ='./assets/images/arrow_right.png' alt = 'flèche droite du carousel' > ";
	codeHtml = "<div><img class='banner-img' src='./assets/images/slideshow/slide" + `${slideNumber}` + ".jpg'></div>";

	// alert("le number est"+`${slideNumber}`+codeHtml)

	document.querySelector(".banner-img").innerHTML = "";
	document.querySelector(".banner-img").innerHTML = codeHtml;

	bulletArray[slideNumber-1].classList.add("dot_selected");
	bulletArray[slideNumber].classList.remove("dot_selected");

}
);

