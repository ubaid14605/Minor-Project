// src/components/Login/Login.jsx

import React, { useState } from "react";
import styles from "./Login.module.css"; // Import the CSS module

// You might need an icon component or use a library like react-icons
// For simplicity, I'm just using text or placeholder icons here.

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    // Basic client-side validation
    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      // Replace with your actual backend login API endpoint
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          // You might send rememberMe if your backend handles sessions/tokens
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If server returns an error (e.g., invalid credentials)
        throw new Error(data.message || "Login failed.");
      }

      // Handle successful login (e.g., store token, redirect)
      setMessage("Login successful! Redirecting...");
      console.log("Login successful:", data);
      // Example: localStorage.setItem('token', data.token);
      // window.location.href = '/dashboard'; // Redirect to dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      {/* Replicating the header as seen in the image - you might have a global Header component */}

      <main className={styles.mainContent}>
        <div className={styles.loginCard}>
          <div className={styles.avatarPlaceholder}>
            {/* User avatar icon */}
            <span className={styles.avatarIcon}>👤</span>
          </div>
          <h2 className={styles.welcomeTitle}>Welcome Back</h2>
          <p className={styles.subText}>Sign in to your account to continue</p>

          {error && <p className={styles.errorMessage}>{error}</p>}
          {message && <p className={styles.successMessage}>{message}</p>}

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>✉️</span> {/* Email icon */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>🔒</span> {/* Lock icon */}
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className={styles.signInButton}>
              Sign In
            </button>
          </form>

          <p className={styles.signUpPrompt}>
            Don't have an account?{" "}
            <a href="/register" className={styles.signUpLink}>
              Sign up here
            </a>
          </p>
        </div>
      </main>

      {/* Placeholder for the chatbot widget */}
      <div className={styles.chatbotWidget}>
        <span className={styles.chatbotIcon}>💬</span>
        <span>Talk with Us</span>
      </div>
    </div>
  );
};

export default Login;
