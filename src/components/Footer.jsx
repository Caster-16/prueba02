import { Link } from "react-router-dom";
import "../styles/footer.css";



function Footer() {

  return (

    <footer className="footer">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/acerca">Acerca de</Link></li>
      </ul>
      <p>© 2026 Ciberbooks</p>
    </footer>

  );

}



export default Footer;