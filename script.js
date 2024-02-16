const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

//prompt taille du pad
btn.addEventListener("click", () => {
	let taille = prompt("quelle taille souhaitez-vous ?");
	//rm les cellules du container
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
	createPad(taille);
});

function createPad(taille) {
	//determine largeur et hauteur de chaque cell
	let cellWidth = 800 / taille;
	let cellWidthProperty = cellWidth + "px";

	for (i = 0; i < taille * taille; i++) {
		let cell = document.createElement("div");
		cell.classList.add("cell");
		cell.style.width = cellWidthProperty;
		cell.style.height = cellWidthProperty;
		container.appendChild(cell);
	}

	let cells = document.querySelectorAll(".cell");

	//event chgmt couleur
	cells.forEach((cell) => {
		cell.addEventListener("mouseover", () => {
			cell.classList.add("black");
		});
	});
}
