import React from "react";

function AllocationBar({ needsPct, wantsPct, savingsPct }) {
  return (
    <div>
      <p style={{ fontSize: "0.8rem", color: "#9ca3af", marginBottom: "0.4rem" }}>
        Allocation overview
      </p>
      <div
        style={{
          display: "flex",
          height: "18px",
          borderRadius: "999px",
          overflow: "hidden",
          border: "1px solid rgba(148,163,184,0.5)",
          background: "rgba(15,23,42,0.9)",
        }}
      >
        <div
          style={{
            width: `${needsPct}%`,
            background:
              "linear-gradient(135deg, #f97316, #fbbf24)",
          }}
        />
        <div
          style={{
            width: `${wantsPct}%`,
            background:
              "linear-gradient(135deg, #22c55e, #4ade80)",
          }}
        />
        <div
          style={{
            width: `${savingsPct}%`,
            background:
              "linear-gradient(135deg, #38bdf8, #818cf8)",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0.4rem",
          fontSize: "0.8rem",
          color: "#9ca3af",
        }}
      >
        <span>Needs {needsPct}%</span>
        <span>Wants {wantsPct}%</span>
        <span>Savings {savingsPct}%</span>
      </div>
    </div>
  );
}

export default AllocationBar;
