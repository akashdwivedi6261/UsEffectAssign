import React from "react";

function Button({ handleClick, title, color, margin }) {
  return (
    <React.Fragment>
      <button
        name={title}
        style={{ backgroundColor: color, margin: margin }}
        onClick={handleClick}
      >
        {title}
      </button>
    </React.Fragment>
  );
}

export { Button };
