const registerTab = document.querySelector('.register');
const userTabs = document.querySelector('.users');
const registerButton = document.querySelector('#users-tab-button');
const userListButton = document.querySelector('#register-tab-button');
//---------------------------------------------------------------------
const firstName = document.querySelector('#firstname').value;
console.log(firstName);
const lastName = document.querySelector('#lastname');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
//---------------------------------------------------------------------
const submit = document.getElementById('register-submit');
//---------------------------------------------------------------------
registerButton.addEventListener('click', (e) => {
	userTabs.style.display = 'none';
	registerTab.style.display = 'block';
});
userListButton.addEventListener('click', (e) => {
	userTabs.style.display = 'block';
	registerTab.style.display = 'none';
});

//---------------------------------------------------------------------
const userList = {
	firstName: 'John',
	lastName: 'Doe',
	userName: 'johndoe7',
	email: 'example.com',
	password: ' ba7816bf8f01',
};

const newUserList = [];
newUserStart = () => {
	newUserList.push(userList);
};
newUserStart();
const newUser = () => {
	console.log();
};
//---------------------------------------------------------------------
const addUser = () => {};
addUser();

//---------------------------------------------------------------------
const displayUsers = () => {
	for (let i = 0; i < newUserList.length; i++) {
		console.log(newUserList[i]);
		document.getElementById('user-list').innerHTML += `
    <li class="entry">
		<span>${newUserList[i].userName}</span>
		<span>${newUserList[i].firstName}</span>
		<span>${newUserList[i].lastName}</span>
		<span>${newUserList[i].email}</span>
		<span>${newUserList[i].password}</span>
	</li>
    `;
	}
};
displayUsers();
