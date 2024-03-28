import { useEffect } from "react";
import { createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import useLocalStorageState from "../hooks/useLocalStorageState";

// 1. create context
const DarkModeContext = createContext();

// 2. create providers
export const DarkModeProvider = ({ children }) => {
  //6 custom hook
  const [isDarkMode, setIsDarkMode] = useLocalStorageState("isDarkMode", false);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  //5
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  //3. passing values
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

//4. custom hook
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) toast.error("مشکلی پیش آمد");
  return context;
};
