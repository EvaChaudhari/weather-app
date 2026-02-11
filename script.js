async function getWeather() {
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Please enter a city");
        return;
    }

    try {
        const res = await fetch(`/weather?city=${city}`);
        const data = await res.json();

        if (data.error) {
            document.getElementById("result").innerHTML =
                "❌ City not found";
            return;
        }

        const html = `
            <h3>${data.name}</h3>
            <p>🌡️ Temp: ${data.main.temp} °C</p>
            <p>🌥️ ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>💨 Wind: ${data.wind.speed} m/s</p>
        `;

        document.getElementById("result").innerHTML = html;

    } catch (err) {
        console.error(err);
        document.getElementById("result").innerHTML =
            "⚠️ Error fetching data";
    }
}
