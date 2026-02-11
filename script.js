// public/script.js

async function getWeather(city) {
  try {
    const response = await fetch(`/api/weather?city=${city}`);
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();

    document.getElementById('temperature').textContent = `${data.temp}°C`;
    document.getElementById('condition').textContent = data.condition;
    document.getElementById('cityName').textContent = data.city;
  } catch (error) {
    console.error('Error fetching weather:', error);
    document.getElementById('temperature').textContent = "";
    document.getElementById('condition').textContent = "";
    document.getElementById('cityName').textContent = "";
    alert('Could not fetch weather data. Please try again.');
  }
}

// Event listener for button
document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  if (city) getWeather(city);
});
