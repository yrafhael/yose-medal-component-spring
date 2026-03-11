import React, { useState } from 'react';
import Country from './components/Country';
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'France', gold: 0 },
  ]);

  const deleteCountry = (id) => {
    setCountries(countries.filter((country) => country.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Medals Application</h1>

      <div className="countries-row">
        {countries.map((country) => (
          <Country
            key={country.id}
            id={country.id}
            name={country.name}
            gold={country.gold}
            onDelete={deleteCountry}
          />
        ))}
      </div>
    </div>
  );
}

export default App;