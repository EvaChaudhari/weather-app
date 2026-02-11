const apiKey = "e9813b0de9af434c0162a6395b516c55"; // in quotes

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
            <p
