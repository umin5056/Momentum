const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello~ ${username}`;
}

loginForm.addEventListener("submit", loginSubmit);
