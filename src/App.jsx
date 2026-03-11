import React, { useRef, useState } from "react";
import Country from "./components/Country";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ]);

  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);

  const handleIncrement = (countryId, medalName) => {
    setCountries((prevCountries) =>
      prevCountries.map((country) =>
        country.id === countryId
          ? { ...country, [medalName]: country[medalName] + 1 }
          : country
      )
    );
  };

  const handleDecrement = (countryId, medalName) => {
    setCountries((prevCountries) =>
      prevCountries.map((country) =>
        country.id === countryId && country[medalName] > 0
          ? { ...country, [medalName]: country[medalName] - 1 }
          : country
      )
    );
  };

  const deleteCountry = (id) => {
    setCountries((prevCountries) =>
      prevCountries.filter((country) => country.id !== id)
    );
  };

  const totalMedals = countries.reduce(
    (total, country) => total + country.gold + country.silver + country.bronze,
    0
  );

  return (
    <div className="app-container">
      <h1>Olympic Medals</h1>

      <div className="totals-box">
        <p>
          <strong>Total Medals: {totalMedals}</strong>
        </p>
      </div>

      <div className="countries-row">
        {countries.map((country) => (
          <Country
            key={country.id}
            country={country}
            medals={medals.current}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            onDelete={deleteCountry}
          />
        ))}
      </div>
    </div>
  );
}

export default App;