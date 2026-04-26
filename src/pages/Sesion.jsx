import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/sesion.css';
import { validarUsuario } from '../services/usersService';

const Login = () => {
  const navigate = useNavigate();
  const [datos, setDatos] = useState({ usuario: '', password: '' });
  const [error, setError] = useState(false);
  const [verPassword, setVerPassword] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  const manejarCambio = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const iniciarSesion = async (e) => {
    e.preventDefault();
    if (datos.usuario.trim() === '' || datos.password.trim() === '') {
      setError(true);
      setMensajeError('Por favor, llena todos los campos');
      return;
    }
    setError(false);
    setCargando(true);
    setMensajeError('');

    try {
      // Validar las credenciales con axios
      const usuarioEncontrado = await validarUsuario(datos.usuario, datos.password);
      
      if (usuarioEncontrado) {
        // Guardar usuario en localStorage para sesión
        localStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));
        alert(`¡Bienvenido ${usuarioEncontrado.nombre}!`);
        // Redirigir a página principal
        navigate('/');
      } else {
        setError(true);
        setMensajeError('Usuario o contraseña incorrectos. Por favor, verifica tus datos.');
      }
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setError(true);
      setMensajeError('Hubo un error al intentar conectarte. Intenta de nuevo más tarde.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="login-fondo">
      <form onSubmit={iniciarSesion} className="login-tarjeta">
        <h2 className="login-titulo">Iniciar Sesión</h2>
        
        {error && <p className="login-alerta">{mensajeError || 'Por favor, llena todos los campos'}</p>}

        <div className="login-grupo">
          <label>Usuario</label>
          <input
            name="usuario"
            type="text"
            placeholder="Tu nombre de usuario"
            onChange={manejarCambio}
            className="login-input"
          />
        </div>

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

        <button type="submit" className="login-boton-principal" disabled={cargando}>
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

        <p className="login-enlace">¿No tienes cuenta? <a href="/registro">Crea una aquí</a></p>
      </form>
    </div>
  );
};

export default Login;