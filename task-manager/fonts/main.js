let isPropmtCreate = false;
let isPromptNewSpace = false;
let currentTask = [];
let status = ['Unfinished', 'Close', 'Past deadline'];
let taskSpaces = [0];
let taskSpaceCount = 0;

function CheckInputLength() {
	document.querySelector('#taskName').addEventListener('input', function() {
		let maxLength = this.maxLength;
		let currentLength = this.value.length;
		if (currentLength>=maxLength) {
			document.getElementById('check-max').style.display = 'initial';
		} else  {
			document.getElementById('check-max').style.display = 'none';
		}
	});
}

function ShowCreatePrompt() {
	if (isPropmtCreate != true) {
		document.querySelector('#crt-prompt').style.display = 'initial';
		isPropmtCreate = true;
	} else {
		document.querySelector('#crt-prompt').style.display = 'none';
		isPropmtCreate = false;
	}
	console.log('finish');
}

function CreateToDo(name, deadline) {
	let container = document.createElement('div');
	let dateCreated; let assignedDeadline;
	container.className = 'to-do-item';
	for (let i = 0; i <= 3; i++) {
		let text = document.createElement('p');
		text.className = 'to-do-item'
		if (i == 0) {
			text.innerText = name;
			container.appendChild(text);
		} else if (i == 1) {
			text.innerText = status[0];
			container.appendChild(text);
		} else if (i == 2) {
			let date = GetDate(new Date());
			text.innerText = date[0]+'/'+date[1]+'/'+date[2]+'/'+' Time: '+date[3]+':'+date[4]+date[5];
			dateCreated = text.innerText;
			container.appendChild(text);
		} else if (i == 3) {
			let date = GetDate(deadline);
			text.innerText = date[0]+'/'+date[1]+'/'+date[2]+'/'+' Time: '+date[3]+':'+date[4]+date[5];
			assignedDeadline = text.innerText;
			container.appendChild(text);
			console.log('finish: setDeadline');
		}

		document.querySelector('.todo-items-container').appendChild(container);
	}

	document.querySelector('#crt-prompt').style.display = 'none';
	currentTask.push(name);
	SaveTask(name, status[0], dateCreated, deadline);
	console.log('finish creating task '+currentTask);
	return false;
}

function GetDate(d) {
	let date = new Date(d);
	let day = String(date.getDate()).padStart(2, '0');
	let month = String(date.getMonth()+1).padStart(2, '0');
	let year = String(date.getFullYear()).slice(-2);
	let hour = date.getHours();
	let min = date.getMinutes();
	let amOrpm = hour >= 12 ? 'PM' : 'AM';
	return [month, day, year, hour, min, amOrpm];
}

function AddNewTaskSpace() {
	taskSpaceCount++;
	taskSpaces.push(taskSpaceCount);
	console.log(taskSpaces);
	NewSpacePrompt();
}

function NewSpacePrompt() {
	let formContainer = document.createElement('div');
	formContainer.className = 'space-form-prompt';
	let form = document.createElement('form');
	let label = document.createElement('label');
	label.for = 'space-name'; label.innerText = 'New space name';
	let input = document.createElement('input');
	input.type = 'text'; input.name = 'spaceName'; input.id = 'inputSpace';
	form.onsubmit = () => {
		NewTaskSpace(document.getElementById('inputSpace').value);
		document.querySelector('.space-form-prompt').style.display = 'none';
		return false;
	};
	form.appendChild(label); form.appendChild(input);
	formContainer.appendChild(form);
	if (isPromptNewSpace != true) { 
		document.body.appendChild(formContainer);
		isPropmtNewSpace = true;
	} else {
		isPropmtNewSpace = false;
	}
}

function NewTaskSpace(spaceName) {
	let mainContainer = document.createElement('div'); //main container holding both properties and item container
	mainContainer.className = 'main-todo-container';
	mainContainer.id = taskSpaceCount;				   //set id to main container to keep track how many
	let task_space = document.createElement('div'); //where tasks will be added
	task_space.className = 'task-space'; task_space.innerText = spaceName; 
	mainContainer.appendChild(task_space);
	document.querySelector('.workspace-container').appendChild(mainContainer); //append
	document.querySelector('.space-form-prompt').style.display = 'none';
}