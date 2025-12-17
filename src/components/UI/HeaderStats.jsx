import React from "react";

function HeaderStats({ salary, needs, wants, savings }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0,1fr))",
        gap: "1rem",
        marginBottom: "1.5rem",
      }}
    >
      <div>
        <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>Monthly salary</p>
        <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          ₹ {salary.toLocaleString()}
        </p>
      </div>
      <div>
        <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>Needs (50%)</p>
        <p style={{ color: "#f97316", fontWeight: 600 }}>
          ₹ {needs.toLocaleString()}
        </p>
      </div>
      <div>
        <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>Wants (30%)</p>
        <p style={{ color: "#22c55e", fontWeight: 600 }}>
          ₹ {wants.toLocaleString()}
        </p>
      </div>
      <div>
        <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
          Savings / investments (20%)
        </p>
        <p style={{ color: "#38bdf8", fontWeight: 600 }}>
          ₹ {savings.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default HeaderStats;
