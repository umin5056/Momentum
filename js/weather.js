const API_KEY = "c00110b9a10f8ec27705d7550f0da7a3";

function onGps(Gps) {
  const lat = Gps.coords.latitude;
  const lon = Gps.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(url.country);
  fetch(url);
}

function offGps() {
  alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGps, offGps);
