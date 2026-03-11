import React from "react";

function Medal(props) {
  const { country, medal, handleIncrement, handleDecrement } = props;

  const medalName =
    medal.name.charAt(0).toUpperCase() + medal.name.slice(1);

  const medalCount = country[medal.name];

  return (
    <div className="medal-row">
      <span>
        {medalName}: {medalCount}
      </span>

      <div className="medal-buttons">
        <button onClick={() => handleIncrement(country.id, medal.name)}>
          +
        </button>

        <button
          onClick={() => handleDecrement(country.id, medal.name)}
          disabled={medalCount === 0}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Medal;