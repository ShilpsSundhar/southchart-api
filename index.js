const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
app.use(cors());

app.get('/api/chart', (req, res) => {
  const { dob, time, lat, lng } = req.query;

  if (!dob || !time || !lat || !lng) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  const response = {
    input: { dob, time, lat, lng },
    chart: {
      ascendant: "Virgo",
      houses: [
        { house: 1, sign: "Virgo", planets: ["Mercury"] },
        { house: 2, sign: "Libra", planets: ["Venus"] },
        { house: 3, sign: "Scorpio", planets: [] },
        { house: 4, sign: "Sagittarius", planets: ["Ketu"] },
        { house: 5, sign: "Capricorn", planets: [] },
        { house: 6, sign: "Aquarius", planets: ["Saturn"] },
        { house: 7, sign: "Pisces", planets: [] },
        { house: 8, sign: "Aries", planets: ["Mars"] },
        { house: 9, sign: "Taurus", planets: [] },
        { house: 10, sign: "Gemini", planets: ["Rahu"] },
        { house: 11, sign: "Cancer", planets: ["Moon"] },
        { house: 12, sign: "Leo", planets: ["Sun", "Jupiter"] }
      ]
    }
  };

  res.json(response);
});

// 👇 Export the Express app as a serverless function
module.exports = app;
module.exports.handler = serverless(app);
