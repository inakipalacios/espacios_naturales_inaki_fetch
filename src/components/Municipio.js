import React, { useEffect, useState } from "react";

const Municipio = ({ selectedProvincia }) => {
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a 'espacios.php' solo si se ha seleccionado una provincia
    if (selectedProvincia) {
      fetch(`http://localhost/espacios.php`)
        .then((response) => response.json())
        .then((data) => {
          // Manejar los datos recibidos
          setMunicipios(data);
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
        });
    }
  }, [selectedProvincia]);

  return (
    <div>
      <p>Municipio</p>
      <p>JSON completo de municipios:</p>
        <pre>{JSON.stringify(municipios, null, 2)}</pre>
      <p>{municipios}</p>
      <select>
        {municipios.map((municipio) => (
          <option key={municipio.id} value={municipio.nombre}>
            {municipio.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Municipio;

