import { FaSun, FaMoon } from "react-icons/fa";
import useAuth from "../Hooks/Auth/useAuth";

const ThemeChange = () => {
  const { theme, toggleTheme, user } = useAuth();

  return (
    <div className={`${user? 'flex items-center justify-center gap-5 my-2 mx-3': 'grid'}`}>
      <p className={`${user? 'text-md font-bold': 'text-xs font-semibold'}`}>Theme : </p>
      <button
        onClick={toggleTheme}
        className={`relative w-[30px] h-4 md:w-12 md:h-6 flex items-center justify-between rounded-full px-2 transition-colors duration-300 ${
          theme === "light" ? "bg-gray-300" : "bg-blue-600"
        }`}
      >
        {/* Sun Icon */}
        <FaSun
          className={`text-yellow-400 absolute hidden md:block right-1 z-10 text-sm transition-opacity duration-300 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Moon Icon */}
        <FaMoon
          className={`text-white absolute z-10 text-sm hidden md:block  transition-opacity duration-300 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute md:top-1 left-1 bg-white w-3 h-3 md:w-4 md:h-4 rounded-full shadow-md transform transition-transform duration-300 ${
            theme === "light" ? "translate-x-0" : "translate-x-3 md:translate-x-6"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default ThemeChange;
