import React from "react";
import Card from "../UI/Card.jsx";
import { useAuth } from "../../context/AuthContext.jsx";

function DashboardLayout({ children }) {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-bg">
      <div className="dashboard-grid">
        <Card
          style={{
            padding: "1.75rem",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#a5b4fc",
                marginBottom: "0.4rem",
              }}
            >
              Money Mentor
            </p>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
              Hi, {user?.name || "Investor"} 👋
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
              Enter your salary and see how to split it like a pro.
            </p>
          </div>
          <button
            onClick={logout}
            style={{
              marginTop: "auto",
              borderRadius: "999px",
              padding: "0.55rem 1.1rem",
              border: "1px solid rgba(148,163,184,0.5)",
              background: "transparent",
              color: "#e5e7eb",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
          >
            Log out
          </button>
        </Card>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
