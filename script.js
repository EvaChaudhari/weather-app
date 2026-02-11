const apiKey =9842f6aa0a14635920ea1b4cd8aa8c52;

async function getWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    console.log(data); // for testing

    showWeather(data);

  } catch (error) {
    document.getElementById("error").innerText = "⚠️ Error fetching data";
  }
}
