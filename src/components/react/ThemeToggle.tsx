import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("color-theme") === "dark"
  );

  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      localStorage.setItem("color-theme", "dark");
    } else {
      setDarkMode(false);
      localStorage.setItem("color-theme", "light");
    }
  }, []);

  const toggleDarkMode = () => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setDarkMode(false);
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setDarkMode(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setDarkMode(true);
      }
    }
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      type="button"
      aria-label="Theme Toggle Button"
      onClick={toggleDarkMode}
      className="fixed right-20 bottom-4 z-50 md:bottom-auto md:top-4 bg-gray-100 text-gray-600 dark:text-gray-200 dark:bg-gray-800 p-2 rounded"
    >
      {darkMode ? (
        <span>💡</span>
      ) :
        <span>🌚</span>
      }
    </button>
  );
}
