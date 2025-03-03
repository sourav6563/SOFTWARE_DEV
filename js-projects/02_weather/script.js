document.addEventListener("DOMContentLoaded", function () {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "6299e3531999beafe59204618a137368";
  getWeatherBtn.addEventListener("click", async function () {
    const city = cityInput.value.trim();
    if (!city) return;
    try {
      const weatherdata = await fetchweatherData(city);
      displayWatherData(weatherdata);
    } catch (error) {
      showError();
    }
  });

  async function fetchweatherData(city) {
    //  get the data

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("response", response);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    return data;
  }
  function displayWatherData(data) {
    console.log(data);
    const { name, main, weather } = data;
    cityNameDisplay.innerHTML = name;
    temperatureDisplay.textContent = `Temperature:${main.temp}`;
    descriptionDisplay.textContent = `Weather:${weather[0].description}`;
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden  ");
  }
  function showError(error) {
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
});
