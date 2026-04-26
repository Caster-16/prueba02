import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/registro.css';
import { crearUsuario, verificarEmailExistente } from '../services/usersService';

const Registro = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmarPassword: ''
  });

  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);
  const [exito, setExito] = useState(false);

  // 🧠 Manejo de inputs
  const manejarCambio = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  // 🚀 Envío del formulario
  const enviarRegistro = async (e) => {
    e.preventDefault();

    // 🔍 Validaciones
    if (!usuario.nombre || !usuario.email || !usuario.password || !usuario.confirmarPassword) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (usuario.password !== usuario.confirmarPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(usuario.email)) {
      setError('Por favor, ingresa un correo válido');
      return;
    }

    setCargando(true);
    setError('');

    try {
      // 🔍 Verificar email existente
      const emailExistente = await verificarEmailExistente(usuario.email);

      if (emailExistente) {
        setError('Este correo ya está registrado');
        setCargando(false);
        return;
      }

      // Crear usuario 
      const nuevoUsuario = {
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password
      };

      await crearUsuario(nuevoUsuario);

      // usuario se creo bien
      setExito(true);
      setUsuario({
        nombre: '',
        email: '',
        password: '',
        confirmarPassword: ''
      });

      // Redirección a la sesión después de un breve mensaje de éxito
      setTimeout(() => {
        navigate('/sesion');
      }, 2000);

    } catch (err) {
      console.error(err);
      setError('Error al registrar usuario');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="registro-fondo">
      <form onSubmit={enviarRegistro} className="registro-tarjeta">
        
        <h2 className="registro-titulo">Crear Cuenta</h2>

        {error && <p className="registro-alerta"> error {error}</p>}
        {exito && <p className="registro-exito"> Cuenta creada correctamente</p>}

        {/* NOMBRE */}
        <div className="registro-grupo">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={usuario.nombre}
            onChange={manejarCambio}
            className="registro-input"
          />
        </div>

        {/* EMAIL */}
        <div className="registro-grupo">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="ejemplo@correo.com"
            value={usuario.email}
            onChange={manejarCambio}
            className="registro-input"
          />
        </div>

        {/* PASSWORD */}
        <div className="registro-grupo">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Tu contraseña"
            value={usuario.password}
            onChange={manejarCambio}
            className="registro-input"
          />
        </div>

        {/* CONFIRMAR PASSWORD */}
        <div className="registro-grupo">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmarPassword"
            placeholder="Repite tu contraseña"
            value={usuario.confirmarPassword}
            onChange={manejarCambio} 
            className="registro-input"
          />
        </div>

        {/* BOTÓN */}
        <button
          type="submit"
          className="registro-boton-principal"
          disabled={cargando}
        >
          {cargando ? 'Registrando...' : 'Registrarse'}
        </button>

        {/* LINK */}
        <div className="registro-enlace">
          <p>
            ¿Ya tienes cuenta?{' '}
            <span
              onClick={() => navigate('/sesion')}
              className="registro-link-sesion"
              style={{ cursor: 'pointer' }}
            >
              Inicia sesión aquí
            </span>
          </p>
        </div>

      </form>
    </div>
  );
};

export default Registro;