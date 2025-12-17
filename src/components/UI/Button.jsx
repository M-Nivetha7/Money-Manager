import React from "react";

function Button({ children, type = "button", onClick, full }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn-primary"
      style={full ? { width: "100%" } : {}}
    >
      {children}
    </button>
  );
}

export default Button;
