import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className=" w-[48px] h-[48px] flex justify-center items-center rounded-full bg-gray-800 dark:bg-gray-200 text-gray-800 dark:text-blue-600 "
    >
      {darkMode ? (
        <FiSun className="text-black w-6 h-6"/>
      ) : (
        <FiMoon className="text-gray-200 w-6 h-6 "/>
      )}
    </button>
  );
}
