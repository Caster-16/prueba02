import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/registro.css";

const API_URL = "http://localhost:3001/usuarios";

const Registro = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: ""
  });

  const [error, setError] = useState("");
  const [exito, setExito] = useState(false);
  const [cargando, setCargando] = useState(false);

  const manejarCambio = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  const enviarRegistro = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!usuario.nombre || !usuario.email || !usuario.password || !usuario.confirmarPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (usuario.password !== usuario.confirmarPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setCargando(true);
    setError("");

    try {
      //  verificamos si el correo ya existe
      const res = await axios.get(`${API_URL}?email=${usuario.email}`);

      if (res.data.length > 0) {
        setError("El correo ya está registrado");
        setCargando(false);
        return;
      }

      //  Creamos usuario
      const nuevoUsuario = {
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password
      };

      await axios.post(API_URL, nuevoUsuario);

      setExito(true);
      setUsuario({
        nombre: "",
        email: "",
        password: "",
        confirmarPassword: ""
      });

      setTimeout(() => {
        navigate("/sesion");
      }, 2000);

    } catch (err) {
      console.error(err);
      setError("Error al registrar usuario");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="registro-fondo">
      <form onSubmit={enviarRegistro} className="registro-tarjeta">

        <h2 className="registro-titulo">Crear Cuenta</h2>

        {error && <p className="registro-alerta">error {error}</p>}
        {exito && <p className="registro-exito"> Cuenta creada correctamente</p>}

        <div className="registro-grupo">
          <label>Nombre</label>
          <input
            name="nombre"
            value={usuario.nombre}
            onChange={manejarCambio}
            className="registro-input"
          />
        </div>

        <div className="registro-grupo">
          <label>Email</label>
          <input
            name="email"
            value={usuario.email}
            onChange={manejarCambio}
            className="registro-input"
          />
        </div>

        <div className="registro-grupo">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={usuario.password}
            onChange={manejarCambio}
            className="registro-input"
          />
        </div>

        <div className="registro-grupo">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmarPassword"
            value={usuario.confirmarPassword}
            onChange={manejarCambio}
            className="registro-input"
          />
        </div>

        <button type="submit" disabled={cargando} className="registro-boton-principal">
          {cargando ? "Registrando..." : "Registrarse"}
        </button>

      </form>
    </div>
  );
};

export default Registro;