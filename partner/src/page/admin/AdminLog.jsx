import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const AdminLog = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://server.fitszo.com/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setMessage("Registration Successful. Redirecting to login...");
      setTimeout(() => navigate("/admin/dashboard"), 2000);
      localStorage.setItem("token", data.token);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Partner With Fitszo - List Your Fitness Zone</title>
        <meta
          property="og:title"
          content="Partner With Fitszo - List Your Fitness Zone"
        />
      </Helmet>
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              display: "block",
              marginBottom: "10px",
              padding: "8px",
              width: "100%",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              display: "block",
              marginBottom: "10px",
              padding: "8px",
              width: "100%",
            }}
          />
          <button type="submit" style={{ padding: "10px", width: "100%" }}>
            Login
          </button>
        </form>
        <p>{message}</p>
      </div>
    </>
  );
};

export default AdminLog;
