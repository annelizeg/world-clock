function updateCityTimeDate(city, timeZone) {
  let cityElement = document.querySelector(`#${city}`);
  let cityDateElement = cityElement.querySelector(".date");
  let cityTimeElement = cityElement.querySelector(".time");

  let cityCurrentTime = moment().tz(timeZone);

  cityDateElement.innerHTML = cityCurrentTime.format("MMMM Do YYYY");
  cityTimeElement.innerHTML = cityCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

// Adelaide Time & Date
updateCityTimeDate("adelaide", "Australia/Adelaide");
setInterval(updateCityTimeDate, 1000, "adelaide", "Australia/Adelaide");

// New York Time & Date
updateCityTimeDate("new-york", "America/New_York");
setInterval(updateCityTimeDate, 1000, "new-york", "America/New_York");

// Adelaide Time & Date
// let adelaideElement = document.querySelector("#adelaide");
// let adelaideDateElement = adelaideElement.querySelector(".date");
// let adelaideTimeElement = adelaideElement.querySelector(".time");

// let adelaideCurrentTime = moment().tz("Australia/Adelaide");
// adelaideDateElement.innerHTML = adelaideCurrentTime.format("MMMM Do YYYY");
// adelaideTimeElement.innerHTML = adelaideCurrentTime.format(
//   "h:mm:ss [<small>]A[</small>]"
// );

// New York Time & Date
// let newYorkElement = document.querySelector("#new-york");
// let newYorkDateElement = newYorkElement.querySelector(".date");
// let newYorkTimeElement = newYorkElement.querySelector(".time");

// let newYorkCurrentTime = moment().tz("America/New_York");
// newYorkDateElement.innerHTML = newYorkCurrentTime.format("MMMM Do YYYY");
// newYorkTimeElement.innerHTML = newYorkCurrentTime.format(
//   "h:mm:ss [<small>]A[</small>]"
// );
