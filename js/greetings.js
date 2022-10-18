const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
const savedUserName = localStorage.getItem(USERNAME_KEY);

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem(USERNAME_KEY, username);
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello~ ${username}`;
}

function greetingOn(username) {
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello~ ${username}`;
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  greetingOn(savedUserName);
}
