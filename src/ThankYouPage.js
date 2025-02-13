import React, { useState, useEffect } from "react"; 
import Confetti from "react-confetti"; // Import Confetti
import "./ThankYouPage.css"; // Import the CSS file for styling

const ThankYouPage = () => {
  const [showConfetti, setShowConfetti] = useState(true); // Set to true for continuous confetti
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width for Confetti
  const [windowHeight, setWindowHeight] = useState(window.innerHeight); // Track window height for Confetti
  const [isHugSent, setIsHugSent] = useState(false); // State to manage hug status
  const [showPopup, setShowPopup] = useState(false); // State for showing popup

  useEffect(() => {
    // Handle resizing of window for confetti
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []); // Empty dependency array to run only once on page load

  const handleSendHug = () => {
    setIsHugSent(true); // Display the hugging teddy bears GIF
    setShowPopup(true); // Show the popup
    setTimeout(() => {
      setShowPopup(false); // Hide the popup after 3 seconds
    }, 3000);
  };

  return (
    <div className="thank-you-container">
      {/* Confetti Component covering full page */}
      {showConfetti && (
        <Confetti
          width={windowWidth}
          height={windowHeight}
          recycle={true} // This will make the confetti continue for a longer time
          numberOfPieces={300} // Increase or decrease the number of confetti pieces
          gravity={0.05} // Lower value for slower confetti fall (default is 0.3)
          initialVelocityX={5} // Slower horizontal speed (default is 5)
          initialVelocityY={5} // Slower vertical speed (default is 5)
          colors={["#ff3366", "#ff4f81", "#ffb6c1", "#f7a6c4"]}
        />
      )}
      
      <div className="thank-you-card">
        <h1 className="thank-you-title">Thank you for being my Valentine! ❤️</h1>
        <p className="thank-you-message">You are truly loved and appreciated! 💖</p>
        <div className="thank-you-button-container">
          <button className="thank-you-button" onClick={handleSendHug}>
            Send a Hug 🤗
          </button>
        </div>

      

        {/* Popup for "Hug Sent!" message */}
        {showPopup && (
          <div className="hug-popup">
            <p>Hug Sent! <br/>💋 XOXO 💋</p>
            <img 
              src="/images/teddy.gif" 
              alt="Teddy Hugging" 
              className="popup-hug-gif"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ThankYouPage;
