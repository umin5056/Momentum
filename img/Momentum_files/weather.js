function onGps(Gps) {
  const lat = GeolocationPosition.coords.latitude();
  const lng = GeolocationPosition.coords.longitude();
  console.log();
}

function offGps() {
  alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGps, offGps);
