import React, { useEffect, useState } from "react";
import "../index.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "./Firebase";

const Login = () => {
  const [email, setEmail] = useState(""); // State to store the email input value

  useEffect(() => {
    // Check if the user is signed in when the component mounts
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("User is signed in:", user);

        // Check if the user is redirected to the chats page
        const currentLocation = window.location.pathname;
        if (currentLocation === "/chats") {
          console.log("User is on the chats page");
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    if (email) {
      // Email field is not empty, attempt to sign in
      auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    } else {
      // Email field is empty, show an error or alert
      alert("Please enter your email address.");
    }
  };

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Chatter</h2>
        <div className="subscribe">
          <p>SUBSCRIBE</p>
          <input
            placeholder="Your e-mail"
            className="subscribe-input"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          <br />
          <div className="submit-btn" onClick={handleLogin}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

