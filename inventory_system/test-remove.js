let currentItems = [];
let itemId = 0;

function CreateItem() {
	let item = document.createElement('p'); //text inside container
	item.innerText = 'asdnfjasnfasdnfjsan';
	let container = document.createElement('div'); //text container
	container.className = 'item-container';
	container.id = ''+itemId; //set id to the container
	container.appendChild(CreateCloseButton()); //add close button to the container
	container.appendChild(item); //add item to the container
	document.querySelector('.main-container').appendChild(container);
	itemId++;
	currentItems.push(container.id);
	console.log("finish");
}

function CreateCloseButton() {
	let button = document.createElement('div');
	button.className = 'close-button';
	button.innerText = 'X';
	button.onclick = function() {
		RemoveItem(GetParentElement());
	};
	return button
}

function GetParentElement() {
	let parent = event.target.parentNode;
	return parent.id;
}

function RemoveItem(id) {
	// remove the container
	let container = document.getElementById(id);
	container.style.display = 'none';

	//remove the id from the currentItems
	for (let i = 0; i < currentItems.length; i++) {
		let index = currentItems.indexOf(id);
		if (index > -1) {
			currentItems.splice(index, 1)
		}
	}

	console.log(currentItems);
}