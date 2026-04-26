import { useParams } from "react-router-dom";
import { books } from "../data/books";
import Footer from "../components/Footer";
import "../styles/tienda.css";

function Tienda() {
  const { id } = useParams();
  const libro = books.find(b => b.id === parseInt(id));

  if (!libro) return <div>Libro no encontrado</div>;

  const tienda = libro.tienda;
  
  if (!tienda) return <div>Tienda no disponible para este libro</div>;

  return (
    <div className="tienda-wrapper">
      <main className="tienda-container">

        <div className="tienda-layout">
          
          {/* INFO */}
          <div className="tienda-info">
            <h1>{libro.titulo}</h1>
            <p>Disponible en esta tienda 📍</p>

            <ul>
              <li><strong>📍 Dirección:</strong> {tienda.direccion}</li>
              <li><strong>🕒 Horario:</strong> {tienda.horario}</li>
              <li><strong>📧 Email:</strong> {tienda.email}</li>
              <li><strong>📞 Teléfono:</strong> {tienda.telefono}</li>
            </ul>
          </div>

          {/* IMAGEN */}
          <div className="tienda-img">
            <img src={tienda.imagen} alt="Ubicación tienda" />
          </div>

        </div>

      </main>


    </div>
  );
}

export default Tienda;