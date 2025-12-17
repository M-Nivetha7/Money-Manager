import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/Layout/AuthLayout.jsx";
import Input from "../components/UI/Input.jsx";
import Button from "../components/UI/Button.jsx";
import { useAuth } from "../context/AuthContext.jsx";

function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Fill all fields to get personalised advice.");
      return;
    }
    signup(email, name);
    navigate("/dashboard");
  };

  return (
    <AuthLayout
      title="Create your free account"
      subtitle="Set up your profile once and get salary-based investing suggestions instantly."
      footer={
        <p>
          Already have an account?{" "}
          <Link className="text-link" to="/login">
            Log in
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nivetha"
        />
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
          placeholder="Create a strong password"
        />
        {error && <p className="error-text">{error}</p>}
        <div style={{ marginTop: "1.25rem" }}>
          <Button type="submit" full>
            Sign up
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default SignupPage;
