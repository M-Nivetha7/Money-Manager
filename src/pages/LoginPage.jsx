import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/Layout/AuthLayout.jsx";
import Input from "../components/UI/Input.jsx";
import Button from "../components/UI/Button.jsx";
import { useAuth } from "../context/AuthContext.jsx";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Enter both email and password.");
      return;
    }
    login(email, "Money Manager");
    navigate("/dashboard");
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to see how your salary can be split into needs, wants and smart investments."
      footer={
        <p>
          New to Money Mentor?{" "}
          <Link className="text-link" to="/signup">
            Create an account
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />
        {error && <p className="error-text">{error}</p>}
        <div style={{ marginTop: "1.25rem" }}>
          <Button type="submit" full>
            Log in
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
