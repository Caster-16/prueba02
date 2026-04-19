import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} type="button">
            Tema {theme === "light" ? "" : ""}
        </button>    
    );
}

export default ThemeToggle;