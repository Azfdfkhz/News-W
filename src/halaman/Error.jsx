import React from 'react'
import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate();
    return (
        <div className="text-3xl font-bold tracking-[.3em] text-black-800 text-opacity-30 bg-gray-300 min-h-screen">

          <br />

          <h1 className="flex items-center w-full justify-center">
            404 NOT FOUND
          </h1>

          <br />

          <h1 className="flex items-center text-2xl justify-center">
              KLIK DIBAWAH INI UNTUK KEMBALI KE HALAMAN YANG BENAR!
          </h1>

          <footer >
          <div className="flex items-center w-full justify-center bg-white rounded-full px-9 py-4 mx-auto gap-2">
          <ul className="text-2xl font-bold tracking-[.1em] text-gray-800" >
                  <li
                    className="hover:text-blue-800 cursor-pointer"
                    onClick={() => navigate("/News-W/")}
              >
                Home
                  </li>
                </ul>

                <ul  className="text-2xl font-bold tracking-[.1em] text-gray-800">
                  <li
                    className="hover:text-blue-800 cursor-pointer"
                    onClick={() => navigate("/News-W/AI")}
              >
                AI
                  </li>
                </ul>

                <ul  className="text-2xl font-bold tracking-[.1em] text-gray-800">
                  <li
                    className="hover:text-blue-800 cursor-pointer"
                    onClick={() => navigate("/News-W/Robotic")}
              >
                Robotic
                  </li>
                </ul>

                <ul  className="text-2xl font-bold tracking-[.1em] text-gray-800">
                  <li
                    className="hover:text-blue-800 cursor-pointer"
                    onClick={() => navigate("/News-W/Cybersecurity")}
              >
                Cybersecurity
                  </li>
                </ul>

                <ul  className="text-2xl font-bold tracking-[.1em] text-gray-800">
                  <li
                    className="hover:text-blue-800 cursor-pointer"
                    onClick={() => navigate("/News-W/IOT")}
              >
                IOT
                  </li>
                </ul>
                </div>
                </footer>
        </div>
        
      )
}

export default Error
