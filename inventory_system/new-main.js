let currentItems = [];
let containers = ['item', 'begbal', 'delivery', 'return', 'totbal', 'endbal', 'sale', 'price', 'amount'];
let inputs = ['itemName', 'itemBegbal', 'itemDelivery', 'itemReturn', 'itemTotbal', 'itemEndbal', 'itemSale', 'itemPrice', 'itemAmount'];
let itemCount = 0;
let isRemoving = false;

function PromptAdd() {
	document.querySelector('.promptAdd').style.visibility = "visible";
}

function AddItem() {
	isRemoving = true;
	let totalBalance;
	let Sale;
	for (let i = 0; i < inputs.length; i++) {	
		let element = document.createElement('p');
		element.className = 'item';
		element.id = itemCount;

		if (inputs[i] == inputs[4]) {
			let beginningBalance = document.querySelector('#'+inputs[1]);
			let delivery = document.querySelector('#'+inputs[2]);
			let Return = document.querySelector('#'+inputs[3]);
			totalBalance = parseInt(beginningBalance.value)+parseInt(delivery.value)-parseInt(Return.value);
			element.innerText = totalBalance;
			document.querySelector('#'+containers[4]).appendChild(element);
		} else if (inputs[i] == inputs[6]) {
			Sale = totalBalance - document.querySelector('#'+inputs[5]).value;
			element.innerText = Sale;
			document.querySelector('#'+containers[6]).appendChild(element);
		} else if (inputs[i] == inputs[8]) {
			element.innerText = Sale*parseInt(document.querySelector('#'+inputs[7]).value);
			document.querySelector('#'+containers[8]).appendChild(element);
		} else {
			element.innerText = document.querySelector('#'+inputs[i]).value;
			if (i == 0) {
				element.id = ''+itemCount;
				let itemContainer = document.createElement('div');
				itemContainer.id = itemCount;
				itemContainer.className = 'item-container';
				document.querySelector('#'+containers[i]).appendChild(itemContainer);
				itemContainer.appendChild(CreateCloseButton());
				itemContainer.appendChild(element);
				console.log('Container id: '+itemContainer.id);
			} else {
				let itemContainer = document.createElement('div');
				itemContainer.id = itemCount;
				itemContainer.className = 'item-container';
				document.querySelector('#'+containers[i]).appendChild(itemContainer);
				itemContainer.appendChild(element);
				console.log('Container: '+itemContainer.id);
			}
		}
	}

	itemCount++;
	currentItems.push(document.querySelector('#'+inputs[0]).value);
	document.querySelector('.promptAdd').style.visibility = 'hidden';
	isRemoving = false;
}

function CreateCloseButton() {
	let closeButton = document.createElement('div');
	closeButton.innerText = 'X';
	closeButton.className = 'CloseButton';
	closeButton.onclick = function(event) {
		RemoveItem(GetParentId());
	};
	return closeButton;
}

function RemoveItemPrompt() {
	let closeButtons = document.querySelectorAll('.CloseButton');
	
	if (isRemoving == false) {
		closeButtons.forEach(button=> {
			button.style.display = 'initial';
		});
		isRemoving = true;
	} else {
		closeButtons.forEach(button=> {
			button.style.display = 'none';
		});
		isRemoving = false;
	}
}

function GetParentId() {
	let parent = event.target.parentNode;
	return parent.id;
}

function RemoveItem(parent) {
	let item = document.getElementById(''+parent);
	item.style.display = 'none';

	for (let i = 0; i < currentItems.length; i++) {
		if (inputs[i]==document.querySelector('#'+inputs[i]))
	}
}