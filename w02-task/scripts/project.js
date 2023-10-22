// Import the getWeather function from the weather module
import { getWeather } from '../scripts/weather.js';

// copyright year
document.querySelector('#year').textContent = new Date().getFullYear();

// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);



// Get references to various HTML elements
const search_box = document.querySelector(".search input"); // Input field for city search
const search_btn = document.querySelector(".search button"); // Search button
const weather_icon = document.querySelector(".weather_icon"); // Element for displaying weather icon
const error_message = document.querySelector(".error"); // Element for displaying error messages
const loadingScreen = document.getElementById('loading-screen'); // Element for displaying loading screen
const weather_stats = document.querySelector(".temperature-stats"); //Element for temparature
const weather_details = document.querySelector(".details");
const weather_main = document.querySelector(".weather")

weather_stats.style.display = "none";
weather_details.style.display = "none";
weather_main.style.display = "none";

// Function to set the weather icon based on weather conditions
function setWeatherIcon(weatherMain) {
    const weatherIcon = document.querySelector(".weather_icon");
    
    switch (weatherMain) {
        case 'Clear':
            weatherIcon.src = "../images/clear.png";
            break;
        case 'Clouds':
            weatherIcon.src = "../images/clouds.png";
            break;
        case 'Rain':
            weatherIcon.src = "../images/rain.png";
            break;
        case 'Snow':
            weatherIcon.src = "../images/snow.png";
            break;
        default:
            // Handle other weather conditions or set a default icon
            weatherIcon.src = "../images/clear.png";
            break;
    }
}


// Add a click event listener to the search button
search_btn.addEventListener("click", async () => {
    // Show the loading screen
    loadingScreen.style.display = "block";

    // Get the city entered by the user
    const city = search_box.value;

    // Make an API request to get weather data for the city
    const data = await getWeather(city);

    // Check if there's an error in the weather data
    if (data.error) {
        // If there's an error, display the error message and hide the loading screen
        error_message.style.display = "block";
        error_message.textContent = data.error;
        loadingScreen.style.display = "none";
        weather_stats.style.display = "none";
        weather_details.style.display = "none";
        weather_main.style.display = "none";
    } else {
        // If there's no error, hide the error message
        error_message.style.display = "none";

        // Display weather data in the HTML
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").textContent = data.main.humidity + "%";
        document.querySelector(".wind").textContent = data.wind.speed + "Mph";

        // Set the weather icon based on weather conditions
        const weatherMain = data.weather[0].main;
        setWeatherIcon(weatherMain);

        // Conditional branching for displaying different messages based on weather
        if (weatherMain === 'Clear') {
            document.querySelector(".message").textContent = "It's a clear and sunny day.";
        } else if (weatherMain === 'Clouds') {
            document.querySelector(".message").textContent = "Partly cloudy weather today.";
        } else if (weatherMain === 'Rain') {
            document.querySelector(".message").textContent = "Rainy day ahead. Don't forget your umbrella!";
        } else {
            document.querySelector(".message").textContent = "Weather conditions: " + weatherMain;
        }

        // Temperature Analysis
        // Array with average temperatures for the past month in c
        const prev_month_temps = [
            30.5, 31.2, 31.0, 30.8, 30.9, 31.5, 31.8,
            32.2, 32.5, 32.0, 31.7, 31.3, 30.9, 30.5,
            30.4, 30.8, 31.2, 31.7, 32.0, 32.1, 32.3,
            32.6, 32.5, 32.2, 31.9, 31.6, 31.2, 30.8,
            30.5, 30.3, 30.7
        ];

        // Get the highest, lowest, and average temperatures
        const highestTemp = Math.max(...prev_month_temps);
        const lowestTemp = Math.min(...prev_month_temps);
        const sum = prev_month_temps.reduce((acc, temp) => acc + temp, 0);
        const avgTemp = sum / prev_month_temps.length;

        // Hide the loading screen and display temperature values in the HTML
        loadingScreen.style.display = "none";
        weather_stats.style.display = "block";
        weather_details.style.display = "flex";
        weather_main.style.display = "block";

        document.querySelector(".high-temp").textContent = `Highest Temperature: ${highestTemp.toFixed(2)} °C`;
        document.querySelector(".low-temp").textContent = `Lowest Temperature: ${lowestTemp.toFixed(2)} °C`;
        document.querySelector(".avg-temp").textContent = `Average Temperature: ${avgTemp.toFixed(2)} °C`;
    }
});
