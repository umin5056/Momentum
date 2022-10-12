const LoginForm = document.querySelector(".login-form");
const LoginInput = document.querySelector(".login-form input");

function LoginSubmit(Event) {
  Event.preventDefault();
  console.log(Event);
}

LoginForm.addEventListener("submit", LoginSubmit);
