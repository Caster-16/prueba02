import { NavLink } from "react-router-dom";
/*import { FaHouse } from "react-icons/fa6";*/
import { BsHouse } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
//import { useCart } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar"> {/* contenedor principal de la barra de navegación */}
        <div className="center" > {/* contenedor para los navlinks */} 
              <nav className="nav-links">
                  <div className="contenido">
                    <NavLink to="/">
                        <BsHouse /> 
                        <span>Inicio </span>
                      </NavLink>
                  </div>

                  <p>/</p>

                  <div className="contenido">
                    <NavLink to="/productos">
                      <BsBook/> 
                      <span>Explorar libros </span>
                    </NavLink>
                  </div>

                  <p>/</p>

                  <div className="contenido">
                    <NavLink to="/servicios">
                      <BsHeartFill/> 
                      <span>Favoritos </span>
                    </NavLink>
                  </div>

                  <p>/</p>

                  <div className="contenido">
                    <NavLink to="/acerca">
                      {/*<FaHouse />*/} 
                      <span>Acerca</span>
                    </NavLink>
                  </div>
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
