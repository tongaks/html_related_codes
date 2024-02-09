
let isMenuOpen = false;
function ShowMenu() {
	let menu = document.getElementById('change-season-menu');
	if (!isMenuOpen) {
		menu.style.display = 'flex';
		isMenuOpen = true;
	} else {
		menu.style.display = 'none';
		isMenuOpen = false;
	}
}

function RandomEpisodes() {
	let choosenep = [];
	let season1ep = require('./season1.json');
	for (let i = 0; i < 6; i++) {
		let randomep = (season1ep) => {
			let key = Object.keys(season1ep);
			return season1ep[key[key.length * Math.random() << 0]];
		};
		choosenep.push(randomep);
	} 

	return choosenep;
}