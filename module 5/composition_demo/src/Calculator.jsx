//With Vite, each file is a module, so we import what we need instead of writing React.useState.
import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function Calculator() {
  // Calculator (parent) owns the shared state (temperature) and passes it down to the child components (TemperatureInput) as props.
  const [temperature, setTemperature] = useState({ celsius: "", fahrenheit: "" });

  const handleCelsiusChange = (c) => {
    setTemperature({
      celsius: c,
      fahrenheit: c === "" ? "" : (c * 9) / 5 + 32
    });
  };

  const handleFahrenheitChange = (f) => {
    setTemperature({
      fahrenheit: f,
      celsius: f === "" ? "" : ((f - 32) * 5) / 9
    });
  };

  // Parent passes data (temperature) and callback functions down to the children
  // Child sends temperature upwards
  return (
    <div>
      <TemperatureInput
        label="Celsius"
        value={temperature.celsius}
        onChange={handleCelsiusChange}
      />
      <TemperatureInput
        label="Fahrenheit"
        value={temperature.fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default Calculator;