import { useState, useEffect } from "react";
import { Sun, Moon } from "feather-icons-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-2 rounded-full focus:outline-none"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-auto h-5 text-secondary" />
      ) : (
        <Moon className="w-auto h-5 text-secondary" />
      )}
    </button>
  );
};

export default ThemeToggle;
