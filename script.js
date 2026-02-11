const apiKey = "e9813b0de9af434c0162a6395b516c55";

async function getWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    console.log(data);

    showWeather(data);

  } catch (error) {
    document.getElementById("error").innerText = "⚠️ Error fetching data";
  }
}
