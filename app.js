const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Stockholm?unitGroup=metric&key=2K2L6DL6AYNT37FPAFZHMAFD3&contentType=json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (weatherData) {
    console.log(weatherData);
    displayWeather(weatherData);
  });

function displayWeather(weatherData) {
  console.log(weatherData.address);
  console.log(weatherData.currentConditions.temp);
  console.log(weatherData.description);
}

// Display various comments according to the weather outside

/* function displayWeatherInfo(weatherData) {
  let temperatureElement = document.getElementById("temperature");
  let temp = weatherData.currentConditions.temp;
}
 */
