// api/weather.js

export default async function handler(req, res) {
  const city = req.query.city;
  const API_KEY = process.env.API_KEY; // Vercel environment variable

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    // Example: fetching from OpenWeatherMap API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();

    if (data.cod !== 200) {
      return res.status(data.cod).json({ error: data.message });
    }

    res.status(200).json({
      temp: data.main.temp,
      condition: data.weather[0].main,
      city: data.name
    });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
}
