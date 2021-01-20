let INFO = document.getElementById("INFO");
let WORK = document.getElementById("WORK");
let CONTACT = document.getElementById("CONTACT");


let sec3 = document.querySelector(".section3");

INFO.addEventListener(".click", go_down);
WORK.addEventListener(".click", go_down);
CONTACT.addEventListener(".click", go_down);

function go_down(e){
	let distance = main.offsetTop;
	scrollBy({top: distance, behavior: "smooth"});
}