import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.static("public"));


const PORT = 3000;

console.log("API KEY:", process.env.OPENWEATHER_KEY);

app.get("/weather", async (req, res) => {
  try {
    const city = req.query.city || "Delhi";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_KEY}&units=metric`;

    const response = await axios.get(url);

    res.json(response.data);

  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
