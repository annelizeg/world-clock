let intervalId; // Declare at the top to maintain its scope
let intervalId2; // Declare at the top to maintain its scope

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

function displaySelectedCity(event) {
  // Clear all previous intervals to prevent multiple intervals
  clearInterval(intervalId);
  clearInterval(intervalId2);

  if (event.target.value.length > 0) {
    let cityTimeZone = event.target.value;

    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityNameLowercase = cityTimeZone
      .toLowerCase()
      .replace("_", "-")
      .split("/")[1];

    let cityDisplayElement = document.querySelector(".cityDisplay");

    // Clear previous city display content
    cityDisplayElement.innerHTML = `<div class="city" id="${cityNameLowercase}">
    <div>
    <h2>${cityName}</h2>
    <div class="date"></div>
    </div>
    <div class="time"></div>
    </div> 
    <a href="/">All cities</a>`;

    updateCityTimeDate(cityNameLowercase, cityTimeZone);
    intervalId = setInterval(
      updateCityTimeDate,
      1000,
      cityNameLowercase,
      cityTimeZone
    );
  }
}

// Adelaide Time & Date
updateCityTimeDate("adelaide", "Australia/Adelaide");
intervalId = setInterval(
  updateCityTimeDate,
  1000,
  "adelaide",
  "Australia/Adelaide"
);

// Paris Time & Date
updateCityTimeDate("paris", "Europe/Paris");
intervalId = setInterval(updateCityTimeDate, 1000, "paris", "Europe/Paris");

// New York Time & Date
updateCityTimeDate("new-york", "America/New_York");
intervalId2 = setInterval(
  updateCityTimeDate,
  1000,
  "new-york",
  "America/New_York"
);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", displaySelectedCity);
