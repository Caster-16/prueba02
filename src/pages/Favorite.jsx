import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import "../styles/results.css";

function Favorites() {
  const navigate = useNavigate();
  const [favs, setFavs] = useState([]);
  const [usuario, setUsuario] = useState(null);

  // Obtener usuario logueado
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("usuarioActual"));

    if (!user) {
      navigate("/sesion"); // si no hay sesión, fuera
      return;
    }

    setUsuario(user);

    // soolo el usuario puede ver sus favoritos, por eso la clave incluye su id
    const key = `ciberbooks_favs_${user.id}`;
    const saved = localStorage.getItem(key);

    if (saved) setFavs(JSON.parse(saved));
  }, []);

  // elimina lo que se hizo en la sesion
  const removeFavorite = (id) => {
    const key = `ciberbooks_favs_${usuario.id}`;

    const updated = favs.filter(book => book.id !== id);
    setFavs(updated);
    localStorage.setItem(key, JSON.stringify(updated));
  };

  return (
    <div className="results-page-wrapper">
      
      <h2 className="results-heading">Mis Favoritos</h2>

      <div className="main-content-layout">
        <main className="results-main">
          <div className="books-premium-grid">

            {favs.length > 0 ? (
              favs.map((book) => (
                <article key={book.id} className="book-item-card">
                  <div className="book-cover-wrapper">
                    <img src={book.img} alt={book.titulo} />
                  </div>

                  <div className="book-info-minimal">
                    <h3>{book.titulo}</h3>
                    <p>{book.autor}</p>
                  </div>

                  <div className="book-actions">
                    <button 
                      className="btn-view-details" 
                      onClick={() => navigate(`/book/${book.id}`)}
                    >
                      Ver
                    </button>

                    <button 
                      className="btn-add-favorite active" 
                      onClick={() => removeFavorite(book.id)}
                    >
                      Quitar
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-results-box">
                <p>No tienes favoritos aún 📭</p>
                <button 
                  onClick={() => navigate('/results')} 
                  className="btn-clear-filter" 
                  style={{marginTop: '15px'}}
                >
                  Explorar libros
                </button>
              </div>
            )}

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Favorites;