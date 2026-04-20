import { NavLink } from "react-router-dom";
//import { useCart } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";
import "../styles/head.css";

function Head() {
  return (
    <header className="head"> {/* contenedor principal de la barra de navegación */}
        <div className="logo"> {/* contenedor para el logo */}
            <NavLink className="brand" to="/">
                Ciberbooks
            </NavLink>
        </div>

        <div className="right" > {/* contenedor para el perfil y el toggle */}
            <NavLink className="perfil" to="/perfil">
                Perfil
            </NavLink>
            <ThemeToggle /> {/*boton de cambio de tema*/}
        </div>
    </header>
  );
}

export default Head;