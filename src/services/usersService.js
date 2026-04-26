import axios from 'axios';

// URL del servidor JSON Server (por defecto en puerto 3001)
const API_BASE_URL = 'http://localhost:3001/usuarios';

// Usuarios iniciales por defecto en localStorage
const USUARIOS_INICIALES = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan@example.com",
    password: "password123"
  },
  {
    id: 2,
    nombre: "María García",
    email: "maria@example.com",
    password: "pass456"
  }
];

// Inicializar localStorage con usuarios por defecto si está vacío
const inicializarUsuarios = () => {
  if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify(USUARIOS_INICIALES));
  }
};

// Obtener todos los usuarios (intenta axios, si falla usa localStorage)
export const obtenerUsuarios = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.log('Usando localStorage para obtener usuarios');
    inicializarUsuarios();
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : USUARIOS_INICIALES;
  }
};

// Crear nuevo usuario (registro)
export const crearUsuario = async (usuario) => {
  try {
    const response = await axios.post(API_BASE_URL, {
      ...usuario,
      id: Date.now()
    });
    return response.data;
  } catch (error) {
    console.log('Guardando usuario en localStorage');
    inicializarUsuarios();
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const nuevoUsuario = {
      ...usuario,
      id: Date.now()
    };
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return nuevoUsuario;
  }
};

// Validar si usuario existe y contraseña es correcta
export const validarUsuario = async (email, password) => {
  try {
    const usuarios = await obtenerUsuarios();
    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.password === password
    );
    return usuarioEncontrado || null;
  } catch (error) {
    console.error('Error al validar usuario:', error);
    throw error;
  }
};

// Verificar si email ya existe
export const verificarEmailExistente = async (email) => {
  try {
    const usuarios = await obtenerUsuarios();
    return usuarios.some((u) => u.email === email);
  } catch (error) {
    console.error('Error al verificar email:', error);
    throw error;
  }
};

export default {
  obtenerUsuarios,
  crearUsuario,
  validarUsuario,
  verificarEmailExistente
};
