import React from "react";
import Card from "../UI/Card.jsx";

function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="auth-bg">
      <Card style={{ maxWidth: "420px", width: "100%" }}>
        <div style={{ marginBottom: "1.75rem" }}>
          <p
            style={{
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#a5b4fc",
              marginBottom: "0.6rem",
            }}
          >
            Money Mentor
          </p>
          <h1
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>{subtitle}</p>
        </div>
        {children}
        {footer && (
          <div
            style={{
              borderTop: "1px solid rgba(148,163,184,0.35)",
              marginTop: "1.75rem",
              paddingTop: "1rem",
              fontSize: "0.85rem",
              color: "#9ca3af",
            }}
          >
            {footer}
          </div>
        )}
      </Card>
    </div>
  );
}

export default AuthLayout;
