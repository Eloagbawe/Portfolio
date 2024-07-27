"use client";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  FC,
  useContext,
} from "react";

type Theme = "light" | "dark" | null;

export interface ThemeContextType {
  theme: Theme;
  addDarkMode: () => void;
  addLightMode: () => void;
}
export const ThemeContext = createContext<ThemeContextType | null>(null);

interface Props {
  children?: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(null);
  const [loadPage, setLoadPage] = useState(false);

  const addDarkMode = (): void => {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const addLightMode = (): void => {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme && storedTheme === "dark") {
        addDarkMode();
      } else {
        addLightMode();
      }
      setLoadPage(true);
    }
  }, []);

  if (!loadPage) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, addDarkMode, addLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw Error("useThemeContext can only be used inside a ThemeProvider");
  return context;
};
