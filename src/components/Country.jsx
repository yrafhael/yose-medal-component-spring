import React from "react";
import Medal from "./Medal";

function Country(props) {
  return (
    <div className="country-card">
      <h2 className="country-title">{props.name}</h2>

      {props.medals.map((medal) => (
        <Medal key={medal.id} name={medal.name} />
      ))}

      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
}

export default Country;