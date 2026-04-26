import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/*import { BsHeartFill } from "react-icons/bs";*/
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/results.css";

function Favorites() {
  const navigate = useNavigate();
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("ciberbooks_favs");
    if (saved) setFavs(JSON.parse(saved));
  }, []);

  const removeFavorite = (id) => {
    const updated = favs.filter(book => book.id !== id);
    setFavs(updated);
    localStorage.setItem("ciberbooks_favs", JSON.stringify(updated));
  };

  return (
    <div className="results-page-wrapper">
      <Header />
      
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
                    <button className="btn-view-details" onClick={() => navigate(`/book/${book.id}`)}>
                      Ver
                    </button>
                    <button className="btn-add-favorite active" onClick={() => removeFavorite(book.id)}>
                      Quitar 
                      {/* <BsHeartFill/> */}
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-results-box">
                <p>Todavía no has agregado libros a tus favoritos.</p>
                <button onClick={() => navigate('/results')} className="btn-clear-filter" style={{marginTop: '15px'}}>
                  Explorar libros
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
export default Favorites;