//---------------------------------------------------------------------
const newUserList = [
	{
		firstName: 'John',
		lastName: 'Doe',
		userName: 'johndoe7',
		email: 'example.com',
		password: ' ba7816bf8f01',
	},
];
//---------------------------------------------------------------------
const registerTab = document.querySelector('.register');
const userTabs = document.querySelector('.users');
const registerButton = document.querySelector('#users-tab-button');
const userListButton = document.querySelector('#register-tab-button');
const userList = document.getElementById('user-list');
//---------------------------------------------------------------------

const registerForm = document.querySelector('#registerForm');
//---------------------------------------------------------------------
const submit = document.getElementById('register-submit');
//---------------------------------------------------------------------
const registerButtonEvent = (event) => {
	event.preventDefault();
	userTabs.style.display = 'none';
	registerTab.style.display = 'block';
};
const userListButtonEvent = (event) => {
	event.preventDefault();
	userTabs.style.display = 'block';
	registerTab.style.display = 'none';
	displayUsers(newUserList);
};

//---------------------------------------------------------------------
const getFormData = (event) => {
	event.preventDefault();
	const myFormData = new FormData(event.target);
	const formDataObj = Object.fromEntries(myFormData.entries());
	console.log(formDataObj);
	const insertObject = (arguments, formDataObj) => {
		arguments.push(formDataObj);
	};
	insertObject(newUserList, formDataObj);
};

//---------------------------------------------------------------------
const displayUsers = (arguments) => {
	userList.innerHTML = '';
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
		userList.innerHTML += `
    <li class="entry">
		<span>${arguments[i].userName}</span>
		<span>${arguments[i].firstname}</span>
		<span>${arguments[i].lastName}</span>
		<span>${arguments[i].email}</span>
		<span>${arguments[i].password}</span>
	</li>
    `;
	}
};

console.log(newUserList);
//---------------------------------------------------------------------
registerButton.addEventListener('click', registerButtonEvent);
userListButton.addEventListener('click', userListButtonEvent);
registerForm.addEventListener('submit', getFormData);
//---------------------------------------------------------------------
