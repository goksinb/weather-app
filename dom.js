function displayWeather(weatherData) {
  let temperature = weatherData.currentConditions.temp;
  let city = weatherData.address;
  let comments = weatherData.description;
  let conditions = weatherData.currentConditions.conditions;
  let dateTime = new Date().toLocaleTimeString();

  let temperatureElement = document.getElementById("temperature");
  let cityElement = document.getElementById("city");
  let conditionsElement = document.getElementById("conditions");
  let commentsElement = document.getElementById("comments");
  let gifElement = document.getElementById("gif");
  let backgroundElement = document.getElementsByClassName("background");
  let dateTimeElement = document.getElementById("date-time");

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
