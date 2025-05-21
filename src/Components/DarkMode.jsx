import React, { useEffect, useState } from 'react';
import LightMode from '../assets/Theme/light.png';
import DarkModeImg from '../assets/Theme/dark.png';

const DarkMode = () => {
  // Set default theme as light, or check for a saved theme in localStorage
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      // Apply dark mode
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      // Apply light mode
      element.classList.add("light");
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="relative w-10 h-10 sm:w-20 sm:h-20 flex items-center justify-center">
      {/* Light mode image */}
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightMode}
        alt="Light mode"
        className={`absolute w-4 h-4 sm:w-12 sm:h-12 object-contain cursor-pointer transition-opacity duration-300 ease-in-out ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Dark mode image */}
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkModeImg}
        alt="Dark mode"
        className={`absolute w-4 h-4 sm:w-12 sm:h-12 object-contain cursor-pointer transition-opacity duration-300 ease-in-out ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default DarkMode;
