import { useState } from 'react';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("Home");
  const scrollingText = "ini teks berjalan nya disini ";

  const tabs = ["Home", "Latest News", "Trending"];

  return (
    <nav className="flex items-center gap-8 bg-[#999ca3] px-6 py-4 text-xs font-bold">
      <div className="flex gap-8">
        {tabs.map((item, index) => (
          <div key={index} className="relative">
            <div
              className={`cursor-pointer transition ${
                activeTab === item ? "text-white" : "text-gray-700"
              } text-lg`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </div>
          </div>
        ))}
      </div>

      {/* Headlines section */}
      <div className="ml-auto flex items-center">
        <div className="relative flex items-center w-[300px] md:w-[400px] h-10 bg-gray-300 rounded-full overflow-hidden px-4">
          {/* Icon + Headlines */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-700">Headlines</span>
          </div>

          {/* Garis pemisah */}
          <div className="h-6 w-px bg-gray-500 mx-2 shrink-0"></div>

          {/* Teks berjalan */}
          <div className="flex-1 overflow-hidden">
            <div className="whitespace-nowrap animate-marquee">
              <span className="text-sm font-semibold text-gray-700">
                {scrollingText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}