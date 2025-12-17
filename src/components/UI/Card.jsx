import React from "react";

function Card({ children, style }) {
  return (
    <div className="card-glass" style={style}>
      {children}
    </div>
  );
}

export default Card;
