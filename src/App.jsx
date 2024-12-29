import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import HeroBanner from "@components/HeroBanner";
import BrowseMiddlemen from "@components/BrowseMiddlemen";
import HowItWorks from "@components/HowItWorks";
import AboutUs from "@components/AboutUs";
import Footer from "@components/Footer";
import AiChat from "@components/AiChat";
import DiscordSection from "@components/DiscordSection";
import AuthForm from "@components/AuthForm"; // Import AuthForm here

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                
                <HowItWorks />
                <DiscordSection />
              </>
            }
          />
          <Route path="/ask" element={<AiChat />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
