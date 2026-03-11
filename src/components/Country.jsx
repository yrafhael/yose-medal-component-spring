import React from 'react';

function Country(props) {
  return (
    <div className="country-card">
      <h2 className="country-title">{props.name}</h2>
      <p className="country-medals">Gold medals: {props.gold}</p>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
}

export default Country;