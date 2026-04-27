import { useParams, useNavigate } from "react-router-dom";
import { books } from "../data/books";
import { FiArrowLeftCircle } from "react-icons/fi";
import Footer from "../components/Footer";
import { FaBookOpen } from "react-icons/fa";
import "../styles/reader.css";

function ReaderPreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const libro = books.find((b) => b.id === parseInt(id));

  if (!libro) return <div className="no-results-box">Libro no encontrado</div>;

  return (
    <div className="results-page-wrapper">
      
      <main className="book-detail-main">
        <div className="reader-nav-header">
          <button className="btn-back-link" onClick={() => navigate(-1)}>
            <FiArrowLeftCircle />
             Volver a la biblioteca
          </button>
        </div>

        <div className="reader-layout">
          <div className="detail-cover-container">
            <img src={libro.img} alt={libro.titulo} style={{ width: '100%', borderRadius: '15px' }} />
          </div>

          <div className="reader-text-content">
            <span className="badge-genre">{libro.genero}</span>
            <h1 className="detail-main-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{libro.titulo}</h1>
            <p className="detail-author-name" style={{ marginBottom: '30px' }}>{libro.autor}</p>
            
            <div className="chapter-info" style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
              <p style={{ color: '#888', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>Capítulo 1</p>
              <h2 style={{ fontFamily: 'serif', marginTop: '5px', marginBottom: '25px' }}>Inicio</h2>
            </div>

            <div className="reading-body-text">
              <p className="drop-cap-text">
                {libro.fragmento}
              </p>
            </div>

            <div className="continue-reading-card">
               <div className="banner-text">
                  <FaBookOpen />
                  <div>
                    <h4>¿Quieres continuar leyendo?</h4>
                    <p>Haz clic para ir a la versión completa.</p>
                  </div>
               </div>
               <button className="btn-read-now" onClick={() => navigate(`/tienda/${id}`)}>
                  Para saber dónde conseguir el libro haz click aquí
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default ReaderPreview;