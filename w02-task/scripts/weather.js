// weather.js

// Your API key for accessing OpenWeatherMap API
const api_key = "066111f6f766a9a8af29f95b3e3a13e0";

// Function to fetch weather data for a given city
async function getWeather(city) {
    // Construct the API URL with the city, API key, and units in metric
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    try {
        // Send an HTTP GET request to the API URL
        const response = await fetch(api_url);

        // Check the HTTP response status
        if (response.status === 404) {
            // If the city is not found, return an error message
            return { error: "City not found" };
        } else if (response.status === 200) {
            // If the response status is 200 (OK), parse the JSON data and return it
            const data = await response.json();
            return data;
        } else {
            // If the response status is neither 404 nor 200, return a general error message
            return { error: "Something went wrong. Please try again later" };
        }
    } catch (error) {
        // Handle any network or processing errors and return an error message
        return { error: "An error occurred. Please try again later" };
    }
}

// Export the getWeather function to make it accessible in other modules
export { getWeather };
