import { LuSunMedium, LuMoon } from "react-icons/lu";
import { useDarkMode } from "../../context/DarkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <LuMoon className="w-6 h-6 text-primary-600 " />
      ) : (
        <LuSunMedium className="w-6 h-6 text-primary-600 " />
      )}
    </button>
  );
};

export default DarkModeToggle;
