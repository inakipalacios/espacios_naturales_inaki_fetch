import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import React, { useEffect, useState } from 'react';

/*function App() {
  return (
    <div>
     <Header/>
      <Main/>
    </div>
  );
}

export default App;*/

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const xhr = new XMLHttpRequest();
      
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const jsonData = JSON.parse(xhr.responseText);
            setData(jsonData);
          } else {
            console.error('Error en la solicitud:', xhr.statusText);
          }
        }
      };
  
      xhr.open('GET', 'http://localhost/espacios.php', true);
      xhr.send(null);
    };
  
    fetchData();
  }, []); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente

  return (
    <div>
      <Header/>
      <Main/>
      <h1>Respuesta del servidor:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );

}

export default App;



