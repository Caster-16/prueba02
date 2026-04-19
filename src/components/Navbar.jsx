import { NavLink } from "react-router-dom";
//import { useCart } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";
import "../styles/navbar.css";

function Navbar() {
  //const { itemCount } = useCart();

  return (
    <header className="navbar"> {/* contenedor principal de la barra de navegación */}

        <div className="logo"> {/* contenedor para el logo */}
            <NavLink className="brand" to="/">
                Ciberbooks
            </NavLink>
        </div>

        <div className="center" > {/* contenedor para los navlinks */}
            <nav className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/productos">Productos</NavLink>
                <NavLink to="/servicios">Servicios</NavLink>
                <NavLink to="/acerca">Acerca</NavLink>
                {/*<NavLink to="/login">Login</NavLink> */}
                {/*<NavLink to="/carrito" className="cart-link">
                Carrito
                <span className="cart-badge">{itemCount}</span>
                </NavLink> */}
            </nav>
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

export default Navbar;
