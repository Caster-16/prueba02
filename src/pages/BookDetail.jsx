import { useParams, useNavigate } from "react-router-dom";
import { books } from "../data/books";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Footer from "../components/Footer";
import "../styles/book-detail.css";

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  
  // ESTADOS PARA RESEÑAS
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState("");
  const [savedReviews, setSavedReviews] = useState([]);

  const libro = books.find((b) => b.id === parseInt(id));

  useEffect(() => {
    
    const favs = JSON.parse(localStorage.getItem("ciberbooks_favs") || "[]");
    setIsFavorite(favs.some((f) => f.id === parseInt(id)));

    
    const allReviews = JSON.parse(localStorage.getItem("ciberbooks_reviews") || "[]");
    const bookReviews = allReviews.filter(r => r.bookId === parseInt(id));
    setSavedReviews(bookReviews);
  }, [id]);

  const toggleFavorite = () => {
    const saved = JSON.parse(localStorage.getItem("ciberbooks_favs") || "[]");
    let updated = isFavorite 
      ? saved.filter((f) => f.id !== libro.id) 
      : [...saved, libro];
    localStorage.setItem("ciberbooks_favs", JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  const handleReviewSubmit = () => {
    if (userRating === 0 || userReview.trim() === "") {
      alert("Por favor, selecciona estrellas y escribe un comentario.");
      return;
    }

    const newReview = {
      bookId: parseInt(id),
      rating: userRating,
      text: userReview,
      date: new Date().toLocaleDateString()
    };

  
    const allReviews = JSON.parse(localStorage.getItem("ciberbooks_reviews") || "[]");
    const updatedReviews = [newReview, ...allReviews];
    localStorage.setItem("ciberbooks_reviews", JSON.stringify(updatedReviews));


    setSavedReviews([newReview, ...savedReviews]);
    setUserReview("");
    setUserRating(0);
  };

  if (!libro) return <div className="no-results-box">Libro no encontrado</div>;

  return (
    <div className="results-page-wrapper">
      
      <main className="book-detail-main">
       
        <button className="btn-back-link" onClick={() => navigate(-1)}>← Volver al catálogo</button>

        <div className="detail-hero-section">
          <div className="detail-cover-container">
            <img src={libro.img} alt={libro.titulo} />
          </div>

          <div className="detail-header-content">
            <span className="badge-genre">{libro.genero}</span>
            <h1 className="detail-main-title">{libro.titulo}</h1> 
            <p className="detail-author-name">{libro.autor}</p>
            
            <div className="detail-stars-row">
                {Array.from({ length: Math.floor(libro.valoracion || 5) }).map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}

                <span className="rating-number">
                  {libro.valoracion || 5}.0
                </span>

                <span className="reviews-count">
                  | {12548 + savedReviews.length} reseñas
                </span>
            </div>

            <div className="detail-main-actions">
              <button className={`btn-fav-outline ${isFavorite ? 'active' : ''}`} onClick={toggleFavorite}>
                {isFavorite ? ' En favoritos' : 'Añadir a favoritos'}
              </button>
              <button className="btn-read-now" onClick={() => navigate(`/reader/${libro.id}`)}> Leer</button>
            </div>
          </div>
        </div>

        <section className="detail-info-card">
          <h3>Descripción</h3>
          <p>{libro.descripcion}</p>
        </section>

        
        <section className="detail-info-card">
          <h3>Opiniones de la comunidad</h3>
          
        
          <div className="review-container" style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
            <p>Deja tu reseña:</p>
            <div className="stars-input">
              {[1, 2, 3, 4, 5].map((num) => (
                <span 
                  key={num} 
                  className={`star-item ${userRating >= num ? 'active' : ''}`}
                  onClick={() => setUserRating(num)}
                >★</span>
              ))}
            </div>
            <textarea 
              className="review-textbox"
              placeholder="¿Qué te pareció?"
              value={userReview}
              onChange={(e) => setUserReview(e.target.value)}
            ></textarea>
            <button className="btn-read-now" style={{ marginTop: '10px' }} onClick={handleReviewSubmit}>
              Publicar
            </button>
          </div>

          <div className="reviews-list">
            {savedReviews.length > 0 ? (
              savedReviews.map((rev, idx) => (
                <div key={idx} className="review-item" style={{ background: '#f9f9f9', padding: '15px', borderRadius: '10px', marginBottom: '10px' }}>
                  <div style={{ color: '#ffc107', marginBottom: '5px' }}>
                    {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                    <span style={{ color: '#888', fontSize: '12px', marginLeft: '10px' }}>{rev.date}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '14px' }}>"{rev.text}"</p>
                </div>
              ))
            ) : (
              <p style={{ color: '#888', fontStyle: 'italic' }}>Aún no hay reseñas para este libro. ¡Sé el primero!</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
export default BookDetail;