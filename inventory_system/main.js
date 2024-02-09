let itemName = "";
let removing = false;
let currentItems = [];
let containers = ['item', 'begbal', 'delivery', 'return', 'totbal', 'endbal', 'sale', 'price', 'amount'];
let inputs = ['itemName', 'itemBegbal', 'itemDelivery', 'itemReturn', 'itemTotbal', 'itemEndbal', 'itemSale', 'itemPrice', 'itemAmount'];
let itemCount = 0;

function PromptAdd() {
	document.querySelector('.promptAdd').style.visibility = "visible";
}

//totbal = begbal+delivery-return
//sale = totbal-endbal
//amount = sales * price

function AddItem() {
	let totalBalance;
	let Sale;

	for (let i = 0; i < inputs.length; i++) {
		let element = document.createElement('p');
		//#### FORMULAS######
		if (inputs[i] == 'itemTotbal') {
			let beginningBalance = document.querySelector('#'+inputs[1]);
			let delivery = document.querySelector('#'+inputs[2]);
			let Return = document.querySelector('#'+inputs[3]);
			totalBalance = parseInt(beginningBalance.value)+parseInt(delivery.value)-parseInt(Return.value);
			element.innerText = totalBalance;
			element.classList.add('item');
			document.querySelector('#'+containers[4]).appendChild(element);		
		} else if (inputs[i] == 'itemSale') {
			Sale = totalBalance - document.querySelector('#'+inputs[5]).value;
			element.innerText = Sale;
			element.classList.add('item');
			document.querySelector('#'+containers[6]).appendChild(element);			
		} else if (inputs[i] == 'itemAmount') {
			element.innerText = Sale*parseInt(document.querySelector('#'+inputs[7]).value);
			element.classList.add('item');
			document.querySelector('#'+containers[8]).appendChild(element);			
		} else {
			element.innerText = document.querySelector('#'+inputs[i]).value;
			//####	PUT CONTAINER TO THE ITEMNAME ####
			//####	ALONG SIDE THE CLOSE BUTTON ####
			if (i == 0) {
				element.classList.add('item');
				element.id = '' + itemCount;
				console.log(element.id);
				let container = document.createElement('div');
				container.classList.add('item-container');
				document.querySelector('#'+containers[i]).appendChild(container);			
				container.appendChild(CreateCloseButton());
				container.appendChild(element);
			} else { 
				//####	NONE FORMULAS ####
				let container = document.createElement('div');
				container.classList.add('item-container');
				element.classList.add('item');
				document.querySelector('#'+containers[i]).appendChild(container);			
				container.appendChild(element);
			}
		}
	}

	itemCount++;
	currentItems.push(document.querySelector('#'+inputs[0]).value);
	document.querySelector('.promptAdd').style.visibility = "hidden";
}

function CreateCloseButton() {
	let closeButton = document.createElement('div');
	closeButton.innerText = "X";
	closeButton.classList.add('CloseButton');
	closeButton.onclick = function (event) {
		RemoveItem(GetElementId());
	};
	return closeButton;
}

function RemoveItemPrompt() {
	if (removing == false) {
		let closebutton = document.querySelectorAll('.CloseButton');
		closebutton.forEach(button => {
			button.style.display = "initial";
		});
		removing = true;
	} else {
		let closebutton = document.querySelectorAll('.CloseButton');
		closebutton.forEach(button => {
			button.style.display = "none";
		});
		removing = false;
	}
}

function GetElementId() {
	let parent = event.target.parentNode;
	console.log(parent);
	return parent.id;
}

function RemoveItem(id) {
	let item = document.getElementById(id);
	item.style.display = "none";

	//removes item name in currentItem
	for (let i = 0; i < currentItems.length; i++) {
		let existing = document.querySelector('#'+inputs[i]);
		let index = containers.indexOf(existing.value);
		if (index > -1) {
			currentItems.splice(index, 1)
		}
	} 
}