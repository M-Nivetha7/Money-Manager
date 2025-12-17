import React from "react";

function Input({ label, type = "text", value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {label && <label className="label">{label}</label>}
      <input
        className="input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
