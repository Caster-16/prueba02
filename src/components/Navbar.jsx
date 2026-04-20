import { NavLink } from "react-router-dom";
//import { useCart } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar"> {/* contenedor principal de la barra de navegación */}
        <div className="center" > {/* contenedor para los navlinks */}
            <nav className="nav-links">
                <NavLink to="/">Home </NavLink>
                <p>/</p>
                <NavLink to="/productos">Productos </NavLink>
                <p>/</p>
                <NavLink to="/servicios">Servicios </NavLink>
                <p>/</p>
                <NavLink to="/acerca">Acerca</NavLink>
                {/*<NavLink to="/login">Login</NavLink> */}
                {/*<NavLink to="/carrito" className="cart-link">
                Carrito
                <span className="cart-badge">{itemCount}</span>
                </NavLink> */}
            </nav>
        </div>
    </header>
  );
}

export default Navbar;
