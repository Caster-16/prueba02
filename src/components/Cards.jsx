import { NavLink } from "react-router-dom";
import { FaBook, FaBookOpen, FaStar, FaSkull, FaHeart, FaSmileWink, FaTheaterMasks} from "react-icons/fa";
import { GiDragonHead } from "react-icons/gi";
import "../styles/cards.css";

function Cards() {
    
    return (
        <>
        <div className="titulo-contenedor">
            <h2 className="titulo-cards">Categorías destacadas</h2>
        </div>
        <div className="cards-contenedor">
            <div className="card">
                <div className="card-body">
                    <NavLink to="/results?genero=ficcion">
                        <FaBookOpen className="card-icon" />
                        <span>Ficcion Literaria</span>
                    </NavLink>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <NavLink to="/results?genero=fantasia">
                        <GiDragonHead className="card-icon" />
                        <span>Fantasía</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/results?genero=suspenso">
                        <FaSkull className="card-icon" />
                        <span>Suspenso</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/results?genero=romance">
                        <FaHeart className="card-icon" />
                        <span>Romance</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/results?genero=comedia">
                        <FaSmileWink className="card-icon" />
                        <span>Comedia</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/results?genero=drama">
                        <FaTheaterMasks className="card-icon" />
                        <span>Drama</span>
                    </NavLink>
                </div>
            </div>
        </div>

        {/*segundo contenedor de cards*/}
        <div className="titulo-contenedor">
            <h2 className="titulo-cards">Libros recomendados</h2>
        </div>
        <div className="cards-contenedor">
            <div className="card">
                <div className="card-body">
                    <NavLink to="/results?genero=ficcion">
                        <img src="/images/davinci.png" alt="Davinci" className="card-icon" />
                        <span>Ficcion</span>
                    </NavLink>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <NavLink to="/results?genero=fantasia">
                        <img src="/images/pijama.jpg" alt="Pijama" className="card-icon" />
                        <span>Fantasía</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/results?genero=suspenso">
                        <img src="/images/1984.webp" alt="1984" className="card-icon" />
                        <span>Suspenso</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/results?genero=romance">
                        <img src="/images/cielo.jpg" alt="Cielo" className="card-icon" />
                        <span>Romance</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/results?genero=comedia">
                        <img src="/images/eragon.webp" alt="Eragon" className="card-icon" />
                        <span>Comedia</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/results?genero=drama">
                        <img src="/images/after.webp" alt="After" className="card-icon" />
                        <span>Drama</span>
                    </NavLink>
                </div>
            </div>
        </div>

        </>
    );
}

export default Cards;