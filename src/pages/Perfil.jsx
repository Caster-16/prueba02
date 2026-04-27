import React, { useEffect, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "../styles/perfil.css";

export default function Perfil() {

  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userGuardado = localStorage.getItem('usuarioActual');

    if (userGuardado) {
      setUsuario(JSON.parse(userGuardado));
    }
  }, []);

  // función para cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem('usuarioActual');
    navigate('/sesion');
  };

  if (!usuario) {
    return <p style={{ textAlign: "center" }}>No hay sesión activa</p>;
  }

  return (
    <div className="perfil-wrapper">
      <div className="container">
        <div className="row">

          {/* IZQUIERDA */}
          <aside className="col-izquierda">
            <div className="tarjeta">
              <div className="tarjeta-cuerpo centrado">
                <FaUser className="img-avatar" />
                <h3>{usuario.nombre}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{usuario.email}</p>
              </div>
            </div>

            <div className="tarjeta">
              <ul className="lista-redes">
                <li><strong>Cuenta:</strong> <span>Activa</span></li>
              </ul>
            </div>

            <button 
              onClick={cerrarSesion}
              className="perfil-boton-logout"
            >
              Cerrar sesión
            </button>

          </aside>

          {/* DERECHA */}
          <section className="col-derecha">
            <div className="tarjeta">
              <div className="tarjeta-cuerpo">
                <div className="info-item">
                  <strong>Nombre:</strong> <span>{usuario.nombre}</span>
                </div>

                <div className="info-item">
                  <strong>Email:</strong> <span>{usuario.email}</span>
                </div>

                <div className="info-item">
                  <strong>ID:</strong> <span>{usuario.id}</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}