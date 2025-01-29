import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./login.css"
import { useNavigate } from "react-router-dom";

const LogIn = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const navigate = useNavigate();

useEffect(() => {
  createParticles();
}, []);

const handleLogin = async (e) => {
  e.preventDefault();
  setMessage("");

  try {
    const response = await fetch("https://server.fitszo.com/partner-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Login failed");

    localStorage.setItem("token", data.token);
    setMessage("Login Successful. Redirecting...");
    setTimeout(() => navigate("/dashboard"), 2000);
  } catch (error) {
    setMessage(error.message);
  }
};

const createParticles = () => {
  const container = document.getElementById("particles");
  if (!container) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    container.appendChild(particle);
  }
};

return (
  <div className="login-page">
    <div className="animated-background">
      <div className="gradient-sphere sphere-1"></div>
      <div className="gradient-sphere sphere-2"></div>
      <div className="gradient-sphere sphere-3"></div>
      <div className="particles" id="particles"></div>
    </div>

    <div className="login-container">
      <div className="login-header">
        <h1>Welcome Back</h1>
        <p>Sign in to continue your journey</p>
      </div>

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="email"
            className="form-input"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <i className="input-icon fas fa-envelope"></i>
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i className="input-icon fas fa-lock"></i>
        </div>

        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>


      <div className="additional-options">
        {/* <a href="#">Forgot password?</a> */}
        <p>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>

      {message && <p className="message">{message}</p>}
    </div>
  </div>
);
};

export default LogIn;