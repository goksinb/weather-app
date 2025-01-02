/* const url =
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

document.getElementById("search-button").addEventListener("click", () => {
  const city = document.getElementById("city-input").value; // Get city from input field
  fetchWeather(city); // Call the function to fetch weather data
});

async function fetchWeather(city) {
  const apiKey = "2K2L6DL6AYNT37FPAFZHMAFD3"; // Replace with your actual API key
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;

  /*  const apiUrl = `https://84c1de80-7079-49df-aaaa-a8da6bd78d0c.mock.pstmn.io`; */

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("City not found");
    const weatherData = await response.json();
    console.log(weatherData);

    displayWeather(weatherData); // Function to update the display with weather data
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weatherDisplay").innerText =
      "City not found or an error occurred.";
  }
}
