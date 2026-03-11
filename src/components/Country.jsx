import React from "react";
import Medal from "./Medal";

function Country(props) {
  const { country, medals, handleIncrement, handleDecrement, onDelete } = props;

  const totalCountryMedals =
    country.gold + country.silver + country.bronze;

  return (
    <div className="country-card">
      <h2 className="country-title">{country.name}</h2>

      {medals.map((medal) => (
        <Medal
          key={medal.id}
          country={country}
          medal={medal}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      ))}

      <p className="country-total">Total Medals: {totalCountryMedals}</p>

      <button onClick={() => onDelete(country.id)}>Delete</button>
    </div>
  );
}

export default Country;