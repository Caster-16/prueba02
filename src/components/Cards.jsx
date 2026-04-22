import { Link } from "react-router-dom";
import "../styles/cards.css";

function Cards() {
    
    return (
        <>
        <div className="titulo-cards">
            <h2>Categorías destacadas</h2>
        </div>
        <div className="cards-contenedor">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ficcion</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                    <Link to="/perfil ">Card link</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ficcion</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                    <Link to="/perfil ">Card link</Link>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ficcion</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                    <Link to="/perfil ">Card link</Link>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ficcion</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                    <Link to="/perfil ">Card link</Link>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ficcion</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                    <Link to="/perfil ">Card link</Link>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ficcion</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                    <Link to="/perfil ">Card link</Link>
                </div>
            </div>
        </div>
        {/*segundo contenedor de cards*/}
        <div className="titulo-cards">
            <h2>Libros recomendados</h2>
        </div>
        <div className="cards-contenedor">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ficcion</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                    <Link to="/perfil ">Card link</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ficcion</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                    <Link to="/perfil ">Card link</Link>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ficcion</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                    <Link to="/perfil ">Card link</Link>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ficcion</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                    <Link to="/perfil ">Card link</Link>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ficcion</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                    <Link to="/perfil ">Card link</Link>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ficcion</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                    <Link to="/perfil ">Card link</Link>
                </div>
            </div>
        </div>

        </>
    );
}

export default Cards;