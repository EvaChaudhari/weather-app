async function getWeather() {
  const city = document.getElementById("city").value;

  if (!city) {
    alert("Enter city name");
    return;
  }

  try {
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();

    if (data.error) {
      document.getElementById("result").innerText = "❌ City not found";
      return;
    }

    document.getElementById("result").innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡️ ${data.main.temp} °C</p>
      <p>${data.weather[0].description}</p>
      <p>💧 ${data.main.humidity}%</p>
    `;

  } catch {
    document.getElementById("result").innerText =
      "⚠️ Server error";
  }
}
