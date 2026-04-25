import { NavLink } from "react-router-dom";
import { FaBook, FaStar } from "react-icons/fa";
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
                    <NavLink to="/perfil">
                        <FaBook className="card-icon" />
                        <span>Ficcion</span>
                    </NavLink>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <NavLink to="/perfil">
                        <FaBook className="card-icon" />
                        <span>Ficcion</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/perfil">
                        <FaBook className="card-icon" />
                        <span>Ficcion</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/perfil">
                        <FaBook className="card-icon" />
                        <span>Ficcion</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/perfil">
                        <FaBook className="card-icon" />
                        <span>Ficcion</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/perfil">
                        <FaBook className="card-icon" />
                        <span>Ficcion</span>
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
                    <NavLink to="/perfil">
                        <FaBook className="card-icon" />
                        <span>Ficcion</span>
                    </NavLink>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <NavLink to="/perfil">
                        <FaBook className="card-icon" />
                        <span>Ficcion</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/perfil">
                        <FaBook className="card-icon" />
                        <span>Ficcion</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/perfil">
                        <FaBook className="card-icon" />
                        <span>Ficcion</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/perfil">
                        <FaBook className="card-icon" />
                        <span>Ficcion</span>
                    </NavLink>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <NavLink to="/perfil">
                        <FaBook className="card-icon" />
                        <span>Ficcion</span>
                    </NavLink>
                </div>
            </div>
        </div>

        </>
    );
}

export default Cards;