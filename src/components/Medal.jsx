import React from "react";

function Medal(props) {
  const capitalized =
    props.name.charAt(0).toUpperCase() + props.name.slice(1);

  return (
    <p className="medal-name">
      {capitalized}
    </p>
  );
}

export default Medal;