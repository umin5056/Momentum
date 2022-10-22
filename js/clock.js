const clock = document.querySelector("#clock");

function sayHello() {
  //clock.innerText = new Date().toLocaleTimeString();
  //* 한번에 시간 표기하기
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
}

sayHello();
setInterval(sayHello, 1000);
