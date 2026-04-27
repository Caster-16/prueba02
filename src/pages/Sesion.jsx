import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/sesion.css';

const API_URL = "http://localhost:3001/usuarios";

const Login = () => {
  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState('');
  const [verPassword, setVerPassword] = useState(false);
  const [cargando, setCargando] = useState(false);

  const manejarCambio = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const iniciarSesion = async (e) => {
    e.preventDefault();

    if (!datos.email.trim() || !datos.password.trim()) {
      setError(true);
      setMensajeError('Por favor, llena todos los campos');
      return;
    }

    setError(false);
    setCargando(true);
    setMensajeError('');

    try {
      //  Buscar usuario en db.json
      const res = await axios.get(
        `${API_URL}?email=${datos.email}&password=${datos.password}`
      );

      if (res.data.length > 0) {
        const usuario = res.data[0];

        // Guardar sesión
        localStorage.setItem('usuarioActual', JSON.stringify(usuario));

        alert(`¡Bienvenido ${usuario.nombre}!`);
        navigate('/perfil');
      } else {
        setError(true);
        setMensajeError('Correo o contraseña incorrectos');
      }

    } catch (err) {
      console.error(err);
      setError(true);
      setMensajeError('Error al conectar con el servidor');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="login-fondo">
      <form onSubmit={iniciarSesion} className="login-tarjeta">

        <h2 className="login-titulo">Iniciar Sesión</h2>

        {error && <p className="login-alerta">  {mensajeError}</p>}

        {/* EMAIL */}
        <div className="login-grupo">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="ejemplo@correo.com"
            onChange={manejarCambio}
            className="login-input"
          />
        </div>

        {/* PASSWORD */}
        <div className="login-grupo">
          <label>Contraseña</label>
          <div className="login-contenedor-password">
            <input
              name="password"
              type={verPassword ? "text" : "password"}
              placeholder="Tu clave"
              onChange={manejarCambio}
              className="login-input-password"
            />
            <button 
              type="button" 
              onClick={() => setVerPassword(!verPassword)}
              className="login-boton-ojo"
            >
              {verPassword ? "Ocultar" : "Ver"}
            </button>
          </div>
        </div>

        {/* BOTÓN LOGIN */}
        <button 
          type="submit" 
          className="login-boton-principal" 
          disabled={cargando}
        >
          {cargando ? 'Conectando...' : 'Ingresar'}
        </button>


        <div className="login-divider">o</div>

        <button 
          type="button" 
          className="login-boton-registro"
          onClick={() => navigate('/registro')}
        >
          Registrarte
        </button>

        {/* LINK EXTRA */}
        <p className="login-enlace">
          ¿No tienes cuenta?{" "}
          <span 
            onClick={() => navigate('/registro')} 
            style={{ cursor: 'pointer', color: '#aa3bff' }}
          >
            Crea una aquí
          </span>
        </p>

      </form>
    </div>
  );
};

export default Login;