
let backToUp = document.getElementById('slide-to-up');
console.log(backToUp);

window.addEventListener("scroll", function() {
	let count = scrollY;
	if (count > 1500) {
		backToUp.classList.add("Lowhigh");
	}
})
