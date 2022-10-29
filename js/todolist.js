const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function removeToDo(event) {
  console.log("event");
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "⚾︎";
  button.addEventListener("clilck", removeToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function onToDolist(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", onToDolist);
