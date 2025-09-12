import { FaSun, FaMoon } from "react-icons/fa";
import useAuth from "../Hooks/Auth/useAuth";

const ThemeChange = () => {
  const { theme, toggleTheme } = useAuth();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 flex items-center justify-between rounded-full px-2 transition-colors duration-300 ${
        theme === "light" ? "bg-gray-300" : "bg-blue-600"
      }`}
    >
      {/* Sun Icon */}
      <FaSun
        className={`text-yellow-400 text-sm transition-opacity duration-300 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Moon Icon */}
      <FaMoon
        className={`text-white text-sm transition-opacity duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Toggle Circle */}
      <div
        className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          theme === "light" ? "translate-x-0" : "translate-x-8"
        }`}
      ></div>
    </button>
  );
};

export default ThemeChange;
