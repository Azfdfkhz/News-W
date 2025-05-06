import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AI from "./halaman/AI";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import Robotic from "./halaman/Robotic";
import Cybersecurity from "./halaman/Cybersecurity";
import Error from "./halaman/Error";
import IOT from "./halaman/IOT";

function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <MainContent>
              <Home />
            </MainContent>
          }
        />
        <Route path="/News-W/" element={<MainContent />} />
        <Route path="/News-W/AI" element={<AI />} />
        <Route path="/News-W/Robotic" element={<Robotic />} />
        <Route path="/News-W/Cybersecurity" element={<Cybersecurity />} />
        <Route path="/News-W/IOT" element={<IOT />} />
        <Route path="/News-W/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
