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
  let city = weatherData.address;
  let comments = weatherData.description;
  let conditions = weatherData.currentConditions.conditions;
  let days = weatherData.days;
  const timeWithoutSeconds = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit", // Exclude 'second' option
  });

  let temperatureElement = document.getElementById("temperature");
  let cityElement = document.getElementById("city");
  let conditionsElement = document.getElementById("conditions");
  let commentsElement = document.getElementById("comments");
  let daysElement = document.getElementById("days");
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

  city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

  temperatureElement.innerHTML = temperature + " °C";
  cityElement.innerHTML = city;
  conditionsElement.innerHTML = conditions;
  commentsElement.innerHTML = comments;

  const nextFiveDays = days.slice(1, 7); // Get the next 5 days

  // Clear previous content
  daysElement.innerHTML = "";

  nextFiveDays.forEach((day) => {
    const dayElement = document.createElement("div"); // Create a new div for each day

    // Convert the date to a day name
    const dayName = new Date(day.datetime).toLocaleDateString("en-US", {
      weekday: "long",
    });

    // Add day details (adjust structure as needed)
    dayElement.innerHTML = `
      <p>${dayName}</p>
      <p>${day.temp} °C</p>
    `;

    // Append the new day element to the days container
    daysElement.appendChild(dayElement);
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
