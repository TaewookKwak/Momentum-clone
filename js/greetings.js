const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const link = document.querySelector('a');
const greeting = document.querySelector('#greeting');
const todolist = document.querySelector('#todo-form');

const HIDDEN_CLASSNAME = 'removed';
const USERNAME_KEY = 'username';

function paintGreetings(username){
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit (e) {
    e.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
    todolist.classList.remove(HIDDEN_CLASSNAME);
    
}


loginForm.addEventListener('submit', onLoginSubmit);

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else{
    paintGreetings(saveUsername)
    
}