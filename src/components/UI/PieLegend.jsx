import React from "react";

function Dot({ color }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "999px",
        background: color,
        marginRight: "0.4rem",
      }}
    />
  );
}

function PieLegend({ needs, wants, savings }) {
  return (
    <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
      <p style={{ marginBottom: "0.4rem" }}>Rule used: 50 / 30 / 20</p>
      <ul style={{ listStyle: "none" }}>
        <li style={{ marginBottom: "0.3rem" }}>
          <Dot color="#f97316" />
          Needs: bills, rent, groceries
        </li>
        <li style={{ marginBottom: "0.3rem" }}>
          <Dot color="#22c55e" />
          Wants: eating out, shopping, subscriptions
        </li>
        <li>
          <Dot color="#38bdf8" />
          Savings & investments: emergency fund, SIPs, long-term goals
        </li>
      </ul>
    </div>
  );
}

export default PieLegend;
