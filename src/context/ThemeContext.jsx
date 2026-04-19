import {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children}) {
    const[theme, setTheme] = useState ( () => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme || "light";
    });
    
    useEffect(() => {
        document.body.classList.remove("light-theme", "dark-theme");
        document.body.classList.add(`${theme}-theme`);
        localStorage.setItem("theme", theme);

    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light",
        );
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme debe ser utilizado dentro de un ThemeProvider");
    }

    return context;
}
