import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ValentineApp.css";

const ValentineApp = () => {
  const [response, setResponse] = useState(null);
  const [maybeClickedCount, setMaybeClickedCount] = useState(0); // Track number of "Maybe next time" clicks
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleResponse = (answer, isYes) => {
    setResponse(answer);

    if (isYes) {
      // Navigate to the ThankYouPage when "Yes" is clicked
      setTimeout(() => {
        navigate("/thank-you"); // Redirect to ThankYouPage
      }, 700); // Adding a slight delay so that the response is visible first
    } else {
      setMaybeClickedCount(maybeClickedCount + 1); // Increase counter for maybe button clicks
    }
  };

  return (
    <div className="container">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="card"
      >
        <div className="special-tag">💌 Special Delivery!</div>
        <h1 className="title">
          Will You Be My Valentine?
        </h1>
        <p className="message">You make my world brighter! 💖</p>

        {/* Adding the Teddy Bear with Flowers GIF */}
        <div className="gif-container">
          <img
            src="/images/teddy1.gif"
            alt="Teddy Bear"
            className="teddy-bear-gif"
          />
        </div>

        <div className="button-group">
          <button
            onClick={() => handleResponse("Yes! ❤️", true)}
            className="yes-button"
            style={{
              transform: `scale(${1 + maybeClickedCount * 0.1})`, // Increase scale based on count
              zIndex: 2, // Ensure Yes button is above the Maybe button
            }}
          >
            Yes! ❤️
          </button>
          <button
            onClick={() => handleResponse("Maybe next time! 😢", false)}
            className="no-button"
            style={{
              position: 'relative',
              zIndex: 1, // Keep Maybe button below Yes button when scaled
            }}
          >
            Maybe next time 😢
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ValentineApp;
