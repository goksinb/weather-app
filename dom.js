document.addEventListener("DOMContentLoaded", () => {
  fetchWeather("Stockholm");
});

document.getElementById("search-button").addEventListener("click", () => {
  const city = document.getElementById("city-input").value; // Get city from input field
  fetchWeather(city); // Call the function to fetch weather data
});

document.getElementById("city-input").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    document.getElementById("search-button").click();
  }
});

function displayWeather(weatherData) {
  let temperature = weatherData.currentConditions.temp;
  let city = weatherData.resolvedAddress;
  let comments = weatherData.description;
  let conditions = weatherData.currentConditions.conditions;
  let days = weatherData.days;
  const timeWithoutSeconds = weatherData.currentConditions.datetime;

  let temperatureElement = document.getElementById("temperature");
  let cityElement = document.getElementById("city");
  let conditionsElement = document.getElementById("conditions");
  let commentsElement = document.getElementById("comments");
  let daysElement = document.getElementById("days");
  let gifElement = document.getElementById("gif");
  let backgroundElement = document.getElementsByClassName("background");

  /*   function updateTime() {
    const timeElement = document.getElementById("time-display");
    timeElement.textContent = timeWithoutSeconds;
  }

  setInterval(updateTime, 1000);

  updateTime(); */

  if (!Number.isInteger(temperature)) {
    temperature = Math.round(temperature);
  }

  temperatureElement.innerHTML = temperature + " °C";
  cityElement.innerHTML = city;
  conditionsElement.innerHTML = conditions;
  commentsElement.innerHTML = comments;

  const iconElement = document.getElementById("weather-icon");
  const daysIconElement = document.getElementById("days-icon");

  const nextFiveDays = days.slice(1, 7);

  daysElement.innerHTML = "";

  nextFiveDays.forEach((day) => {
    const dayElement = document.createElement("div");

    // Convert the date to a day name
    const dayName = new Date(day.datetime).toLocaleDateString("en-US", {
      weekday: "long",
    });

    const roundedTemp = Math.round(day.temp);

    dayElement.innerHTML = `
      <p>${dayName}</p>
      <p>${roundedTemp} °C</p>

    `;

    daysElement.appendChild(dayElement);

    if (conditions.toLowerCase() === "partially cloudy") {
      iconElement.innerHTML =
        '<img src="images/icons/partially-cloudy-icon.png">';
    } else if (conditions.toLowerCase() === "clear") {
      iconElement.innerHTML =
        '<img src="images/icons/partially-cloudy-icon.png">';
    } else if (conditions.toLowerCase() === "snow") {
      iconElement.innerHTML = "images/icons/partially-cloudy-icon.png";
    } else {
      iconElement.innerHTML =
        '<img src="images/icons/partially-cloudy-icon.png">';
    }
  });

  /*   if (temperature < 7) {
    gifElement.innerHTML =
      '<img src="images/sweater.gif" alt="Wear a sweater">';
  } */
  /*  if (conditions === "Partially cloudy") {
    backgroundElement.innerHTML =
      '<img src="images/partially-cloudy.jpg" alt="Wear a sweater">';
  } */
}
