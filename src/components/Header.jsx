import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "./ProfileDropdown";
import { useNavigate } from "react-router-dom"

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const [query, setQuery] = useState("")

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const formatted = query.trim().toLowerCase();

      if (formatted === "ai") navigate("/News-W/AI")
      else if (formatted === "robotic") navigate("/News-W/Robotic");
      else if (formatted === "cybersecurity") navigate("/News-W/Cybersecurity");
      else if (formatted === "iot") navigate ("/News-W/IOT")
      else if (formatted === "home") navigate("/");
      else navigate ("/News-W/Error");
    }
  };

  return (
    <header className="relative z-50 w-full bg-[#bdbdbd] shadow-md px-6 py-4">
    <div className="flex items-center gap-2 w-full justify-center bg-white rounded-full px-9 py-4 mx-auto">
        
        <h1 className="text-3xl font-bold tracking-[.3em] text-gray-800 text-opacity-30">NEWS</h1>

        <div className="flex items-center bg-gray-200 rounded-full px-3 py-2 w-60 md:w-96 mx-auto">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent ml-2 w-full outline-none text-gray-700 placeholder-gray-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="text-4xl text-gray-500 cursor-pointer hover:text-gray-700 transition">
            <Profile />
          </div>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="text-gray-700 hover:text-gray-900 text-3xl focus:outline-none"
          >
            <Menu />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full right-6 mt-2 w-56 bg-gre5-800 bg-opacity-60 backdrop-blur-md rounded-lg shadow-xl z-50 font-bold"
          >
            <ul  className="flex flex-col gap-3 p-6 text-black text-l">
                  <li
                    className="hover:text-blue-800 cursor-pointer"
                    onClick={() => navigate("News-W/")}
              >
                Home
                  </li>
                </ul>

                <ul  className="flex flex-col gap-3 p-6 text-black text-l">
                  <li
                    className="hover:text-blue-800 cursor-pointer"
                    onClick={() => navigate("News-W/AI")}
              >
                AI
                  </li>
                </ul>

                <ul  className="flex flex-col gap-3 p-6 text-black text-l">
                  <li
                    className="hover:text-blue-800 cursor-pointer"
                    onClick={() => navigate("News-W/Robotic")}
              >
                Robotic
                  </li>
                </ul>

                <ul  className="flex flex-col gap-3 p-6 text-black text-l">
                  <li
                    className="hover:text-blue-800 cursor-pointer"
                    onClick={() => navigate("News-W/Cybersecurity")}
              >
                Cybersecurity
                  </li>
                </ul>

                <ul  className="flex flex-col gap-3 p-6 text-black text-l">
                  <li
                    className="hover:text-blue-800 cursor-pointer"
                    onClick={() => navigate("News-W/IOT")}
              >
                IOT
                  </li>
                </ul>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
