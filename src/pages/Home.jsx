import { useState } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Navigation from "../components/Navigation";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Headlines"); // Manage active tab state

  // Function to render content based on active tab
  const renderContent = () => {
    if (activeTab === "Headlines") {
      return <MainContent />; // Render MainContent for Headlines tab
    }
    // Add additional conditions for other tabs here, if necessary
  };

  return (
    <div className="min-h-screen bg-[#bdbdbd] flex flex-col font-sans">
      <Header /> {/* This component stays at the top */}
      <Navigation setActiveTab={setActiveTab} /> {/* Navigation now handles tab switching */}
      {renderContent()} {/* Render the content based on active tab */}
    </div>
  );
}
