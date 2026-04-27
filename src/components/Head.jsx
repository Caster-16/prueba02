import { NavLink } from "react-router-dom";
//import { useCart } from "../context/CartContext";
import { FaUser } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";
import "../styles/head.css";

function Head() {
      const usuario = JSON.parse(localStorage.getItem("usuarioActual"));

  return (
    <header className="head"> {/* contiene la barra de navegación */}
        <div className="logo"> {/* contenedor para el logo */}
            <NavLink className="brand" to="/">
                Ciberbooks
            </NavLink>
        </div>

        <div className="right" > {/* contiene el perfil y el boton de tema */}
            
            <NavLink className="perfil" to={usuario ? "/perfil" : "/sesion"}> {/* si hay usuario, va a perfil, sino a sesion */}
                <FaUser /> {/* icono del usuario */}
                <span>Perfil</span>
            </NavLink>
            <ThemeToggle /> {/*boton de cambio de tema*/}
        </div>
    </header>
  );
}

export default Head;