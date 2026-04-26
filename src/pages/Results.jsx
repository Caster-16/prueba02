import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { books } from "../data/books";
import { BsHeartFill , BsFillStarFill} from "react-icons/bs";


import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import "../styles/results.css";

function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const generoQuery = params.get("genero") || "";
  const searchQuery = params.get("search") || "";

  const [search, setSearch] = useState(searchQuery);
  const [valoracion, setValoracion] = useState(null);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("ciberbooks_favs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("ciberbooks_favs", JSON.stringify(favorites));
  }, [favorites]);

  const normalizar = (texto = "") =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const toggleFavorite = (book) => {
    setFavorites((prev) => {
      const isFav = prev.some((f) => f.id === book.id);
      if (isFav) {
        return prev.filter((f) => f.id !== book.id); 
      } else {
        return [...prev, book]; 
      }
    });
  };

  const librosUnicos = Array.from(
    new Map(books.map((b) => [b.id, b])).values()
  );

  const filtrados = librosUnicos.filter((book) => {
    const generoBook = normalizar(book.genero);
    const generoBuscado = normalizar(generoQuery);
    
    const coincideGenero = generoQuery ? generoBook.includes(generoBuscado) : true;
    const coincideValoracion = valoracion ? book.valoracion === valoracion : true;
    
    const texto = normalizar(search.trim());
    const coincideBusqueda =
      texto.length < 2
        ? true
        : normalizar(book.titulo).includes(texto) ||
          normalizar(book.autor).includes(texto) ||
          generoBook.includes(texto);

    return coincideGenero && coincideBusqueda && coincideValoracion;
  });

  return (
    <div className="results-page-wrapper">
   

      <section className="search-section-bg">
        <SearchBar setSearch={setSearch} />
      </section>

      <div className="results-header-info">
        <h2 className="results-heading">Resultados</h2>
        {search && <p className="search-status">Buscando: <strong>"{search}"</strong></p>}
      </div>

      <div className="main-content-layout">
        <aside className="filters-sidebar">
          <div className="filters-container">
            <h3 className="filters-title">Filtros</h3>
            
            <div className="filter-group">
              <h4>Géneros</h4>
              {["Drama", "Romance", "Comedia", "Suspenso", "Ficcion", "Fantasia"].map((gen) => (
                <label key={gen} className="custom-radio">
                  <input 
                    type="radio" 
                    name="genre" 
                    checked={generoQuery.toLowerCase() === gen.toLowerCase()}
                    onChange={() => navigate(`?genero=${gen}`)}
                  />
                  <span>{gen}</span>
                </label>
              ))}
              {generoQuery && (
                <button onClick={() => navigate('/results')} className="btn-clear-filter">
                  Quitar género
                </button>
              )}
            </div>

            <div className="filter-group">
              <h4>Valoración</h4>
              {[5, 4, 3, 2, 1].map((val) => (
                <label key={val} className="custom-radio">
                  <input 
                    type="radio" 
                    name="rating" 
                    checked={valoracion === val}
                    onChange={() => setValoracion(val)}
                  />
                  <span>{val} {val === 1 ? 'estrella' : 'estrellas'}</span>
                </label>
              ))}
              {valoracion && (
                <button onClick={() => setValoracion(null)} className="btn-clear-filter">
                  Limpiar valoración
                </button>
              )}
            </div>
          </div>
        </aside>

        <main className="results-main">
          <div className="books-premium-grid">
            {filtrados.length > 0 ? (
              filtrados.map((book) => {
                const isFavorite = favorites.some(f => f.id === book.id);
                return (
                  <article key={book.id} className="book-item-card">
                    <div className="book-cover-wrapper" onClick={() => navigate(`/book/${book.id}`)}>
                      <img src={book.img} alt={book.titulo} />
                    </div>
                    <div className="book-info-minimal">
                      <h3>{book.titulo}</h3>
                      <p>{book.autor}</p>
                      <p className="rating-tag">
                        {book.valoracion || 5}
                        <BsFillStarFill />
                      </p>
                    </div>
                    <div className="book-actions">
                      <button className="btn-view-details" onClick={() => navigate(`/book/${book.id}`)}>
                        Ver
                      </button>
                      <button 
                        className={`btn-add-favorite ${isFavorite ? 'active' : ''}`}
                        onClick={() => toggleFavorite(book)}
                      >
                        {isFavorite ? 'Guardado' : 'Favoritos'} 
                        <span>
                          <BsHeartFill />
                        </span>
                      </button>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="no-results-box">
                <p>No se encontraron libros para tu selección.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
export default Results;