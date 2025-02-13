import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SpecialDeliveryPage from "./SpecialDeliveryPage";
import ValentineApp from "./ValentineApp"; // Import your ValentineApp component
import ThankYouPage from "./ThankYouPage"; // Assuming this is created already

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpecialDeliveryPage />} />
        <Route path="/valentineapp" element={<ValentineApp />} /> {/* Route for ValentineApp */}
        <Route path="/thank-you" element={<ThankYouPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
