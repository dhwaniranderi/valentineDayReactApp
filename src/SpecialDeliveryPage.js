import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./SpecialDeliveryPage.css"; // Import CSS for styling

const SpecialDeliveryPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle button click and navigate
  const handleButtonClick = () => {
    // Redirect to ValentineApp page
    navigate("/valentineapp"); // Adjust this path to match the route of your ValentineApp page
  };

  return (
    <div className="special-delivery-container">
      <div className="special-delivery-card">
        <h1 className="special-delivery-title">
          Hello Handsome, <h3>Special delivery for you! 💌</h3>
        </h1>
        <button 
          className="special-delivery-button" 
          onClick={handleButtonClick}
        >
          {/* Button text */}
        </button>
        {/* Additional line below the button */}
        <h3 className="delivery-title" >
            <a onClick={handleButtonClick}><u>Open Your Gift!!!</u></a> 🎁
        </h3>
       
      </div>
    </div>
  );
};

export default SpecialDeliveryPage;
