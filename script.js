const apiKey = "6dac85c7c99581d4034a447b654dd412";

async function getWeather() {
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Please enter a city");
        return;
    }

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!res.ok) throw new Error("City not found");

        const data = await res.json();

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