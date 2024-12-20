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
  let city = weatherData.address;
  let comments = weatherData.description;
  let conditions = weatherData.currentConditions.conditions;
  const timeWithoutSeconds = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit", // Exclude 'second' option
  });

  let temperatureElement = document.getElementById("temperature");
  let cityElement = document.getElementById("city");
  let conditionsElement = document.getElementById("conditions");
  let commentsElement = document.getElementById("comments");
  let gifElement = document.getElementById("gif");
  let backgroundElement = document.getElementsByClassName("background");

  function updateTime() {
    const timeElement = document.getElementById("time-display");
    timeElement.textContent = timeWithoutSeconds;
  }

  setInterval(updateTime, 1000);

  updateTime();

  if (!Number.isInteger(temperature)) {
    temperature = Math.round(temperature);
  }

  temperatureElement.innerHTML = temperature + " °C";
  cityElement.innerHTML = city;
  conditionsElement.innerHTML = conditions;
  commentsElement.innerHTML = comments;
  dateTimeElement.innerHTML = dateTime;

  /*   if (temperature < 7) {
    gifElement.innerHTML =
      '<img src="images/sweater.gif" alt="Wear a sweater">';
  } */
  /*  if (conditions === "Partially cloudy") {
    backgroundElement.innerHTML =
      '<img src="images/partially-cloudy.jpg" alt="Wear a sweater">';
  } */
}
