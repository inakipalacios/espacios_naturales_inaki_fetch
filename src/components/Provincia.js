import React, { useState } from "react";

export default function Provincia() {
  const [selectedProvincia, setSelectedProvincia] = useState("");

  const handleRadioChange = (event) => {
    setSelectedProvincia(event.target.value);
  };

  return (
    <div>
      <p>Provincia</p>

      <input
        type="radio"
        id="araba/alava"
        name="provincia"
        value="Araba/Álava"
        checked={selectedProvincia === "Araba/Álava"}
        onChange={handleRadioChange}
      />
      <label htmlFor="araba/alava">Araba/Álava</label>
      <br />

      <input
        type="radio"
        id="bizkaia"
        name="provincia"
        value="Bizkaia"
        checked={selectedProvincia === "Bizkaia"}
        onChange={handleRadioChange}
      />
      <label htmlFor="bizkaia">Bizkaia</label>
      <br />

      <input
        type="radio"
        id="gipuzkoa"
        name="provincia"
        value="Gipuzkoa"
        checked={selectedProvincia === "Gipuzkoa"}
        onChange={handleRadioChange}
      />
      <label htmlFor="gipuzkoa">Gipuzkoa</label>

      <p>Seleccionado: {selectedProvincia}</p>

    </div>
  );
}
