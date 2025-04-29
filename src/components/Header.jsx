import Profile from "./ProfileDropdown";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#bdbdbd] shadow-md">
    <div className="flex items-center gap-2 w-full justify-center bg-white rounded-full px-9 py-4 mx-auto">
      
      <div className="flex items-center gap-7 w-full justify-center">
        <h1 className="text-3x1 font-bold tracking-[.3em] text-gray-800 text-opacity-30">NEWS</h1>
        <div className="flex items-center bg-gray-200 rounded-full px-3 py-3 w-60 md:w-80 mx-auto">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent ml-2 w-full outline-none text-gray-700 placeholder-gray-500"
          />
        </div>
      </div>
  
      <div className="text-5xl text-gray-500 cursor-pointer hover:text-gray-700 transition">
        <Profile />
      </div>
      
    </div>
  </header>
  
  );
}
