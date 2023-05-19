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

let slideNumber = 1;

function insererContenu(classe, codeHtml) {
	document.querySelector(classe).innerHTML = "";
	document.querySelector(classe).innerHTML = codeHtml;
}

function creerCodeHtml (i) {
	codeHtmlImg= `<div><img class='banner-img' src='./assets/images/slideshow/slide${i}.jpg'></div>`
	codeHtmlTxt= "<p>" + slides[i-1].tagLine+ "</p>"
}


const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {

	if (slideNumber < 4) {
		slideNumber++;

		bulletArray[slideNumber - 1].classList.add("dot_selected");
		bulletArray[slideNumber - 2].classList.remove("dot_selected");

		creerCodeHtml(slideNumber)
		insererContenu(".banner-img", codeHtmlImg)
		insererContenu(".banner-text", codeHtmlTxt)


	} else {
		slideNumber = 1;

		bulletArray[slideNumber - 1].classList.add("dot_selected");
		bulletArray[3].classList.remove("dot_selected");

		creerCodeHtml(1)
		insererContenu(".banner-img", codeHtmlImg)
		insererContenu(".banner-text", codeHtmlTxt)
	}

}
);

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {

	if (slideNumber > 1) {
		slideNumber--;

		bulletArray[slideNumber - 1].classList.add("dot_selected");
		bulletArray[slideNumber].classList.remove("dot_selected");

		creerCodeHtml(slideNumber)
		insererContenu(".banner-img", codeHtmlImg)
		insererContenu(".banner-text", codeHtmlTxt)

	} else {

		slideNumber = 4;

		bulletArray[slideNumber - 1].classList.add("dot_selected");
		bulletArray[0].classList.remove("dot_selected");

		creerCodeHtml(slideNumber)
		insererContenu(".banner-img", codeHtmlImg)
		insererContenu(".banner-text", codeHtmlTxt)

	}


}
);

console.log(slides[slideNumber].tagLine)




// codeHtmlImg = "<div><img class='banner-img' src='./assets/images/slideshow/slide" + `${slideNumber}` + ".jpg'></div>";
// 		codeHtmlTxt = "<p>" + slides[slideNumber - 1].tagLine + "</p>";




