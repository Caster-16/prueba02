import { Link } from "react-router-dom";
import "../styles/footer.css";



function Footer() {

  return (

    <footer className="footer">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Explorar Libros</Link></li>
        <li><Link to="/servicios">Favoritos</Link></li>
        <li><Link to="/acerca">Acerca de</Link></li>
      </ul>
      <p className="footer-texto">© 2026 Ciberbooks</p>
    </footer>

  );

}



export default Footer;