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
    setTimeout(() => navigate("/dashboard"), 1000);
  } catch (error) {
    setMessage(error.message);
  }
};

const createParticles = () => {
  const container = document.getElementById("particles-login");
  if (!container) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particles-login";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    container.appendChild(particle);
  }
};
  return (
    <>
      <Helmet>
        <title>Partner Fitszo</title>
        <meta property="og:title" content="Partner Fitszo" />
      </Helmet>
      <div className="body-login">
        <div className="login-page-login">
          <div className="animated-background-login">
            <div className="gradient-sphere-login sphere-1-login"></div>
            <div className="gradient-sphere-login sphere-2-login"></div>
            <div className="gradient-sphere-login sphere-3-login"></div>
            <div className="particles-login" id="particles-login"></div>
          </div>

          <div className="login-container-login">
            <div className="login-header-login">
              <h1 className="h1-login">Welcome Back</h1>
              <p className="p-login">Sign in to continue your journey</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="form-group-login">
                <input
                  type="email"
                  className="form-input-login"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <i className="input-icon-login fas fa-envelope"></i>
              </div>

              <div className="form-group-login">
                <input
                  type="password"
                  className="form-input-login"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i className="input-icon-login fas fa-lock"></i>
              </div>

              <button type="submit" className="submit-button-login">
                Sign In
              </button>
            </form>

            <div className="additional-options-login">
              {/* <a href="#">Forgot password?</a> */}
              <p className="p-login">
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </div>

            {message && <p className="message-login">{message}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;