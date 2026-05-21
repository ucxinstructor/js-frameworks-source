import React, { useState } from 'react';  

export default function ShapeCollectionDemo() {
  const [temperature, setTemperature] = useState(72);     // Primitive
  const [weatherNow, setWeatherNow] = useState({          // Object
    condition: "Sunny", 
    humidity: 45, 
    wind: 5 
  });
  const [forecast, setForecast] = useState([              // Array of days
    { day: "Mon", high: 78, low: 55, icon: "☀️" },
    { day: "Tue", high: 82, low: 60, icon: "🌤️" },
    { day: "Wed", high: 75, low: 52, icon: "🌧️" }
  ]);

  return (
    <div className="weather-app">
      {/* Shape collection: Forecast days */}
      <div className="forecast">
        {forecast.map((day, i) => (
          <div key={i} className="forecast-day">
            <strong>{day.day}</strong> {day.icon}<br/>
            {day.high}° / {day.low}°
          </div>
        ))}
      </div>

      {/* Single shapes */}
      <div>Now: {temperature}°F</div>
      <div>{weatherNow.condition} | Humidity: {weatherNow.humidity}%</div>
    </div>
  );
}
