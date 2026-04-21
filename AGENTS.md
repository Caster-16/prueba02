# Agentes AI - Guía de la Base de Código

## Inicio Rápido

**Build/Run Commands:**
- `npm run dev` - Inicia servidor de desarrollo (Vite, puerto 5173)
- `npm run build` - Construye para producción
- `npm run lint` - Ejecuta ESLint
- `npm run preview` - Previsualiza la compilación de producción

**Tech Stack:**
- React 19.2.4 con Vite
- React Router 7.14.1 para enrutamiento
- JavaScript sin TypeScript (para mayor flexibilidad)

## Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables (Navbar, Banner, Footer, etc.)
├── context/         # Context API (ThemeContext para tema light/dark)
├── pages/           # Páginas principales (Perfil, etc.)
├── styles/          # CSS modularizado por componente
├── App.jsx          # Componente raíz con Router
├── main.jsx         # Punto de entrada
└── index.css        # Estilos globales
```

## Convenciones Clave

### Componentes
- **Naming**: Archivos PascalCase (ej: `Navbar.jsx`, `ThemeToggle.jsx`)
- **CSS**: Un archivo CSS dedicado por componente en `styles/` (ej: `navbar.css`, `banner.css`)
- **Estructura**: Componentes funcionales simples, sin TypeScript

### Context & State Management
- **ThemeContext**: Proporciona `theme` y `toggleTheme()` a toda la app
- **Hook personalizado**: `useTheme()` para acceder al contexto
- **Persistencia**: Tema guardado en `localStorage` automáticamente
- **Aplicación**: Agrega clases CSS `light-theme` o `dark-theme` al `<body>`

### Routing
- Usa `react-router-dom` con `<Router>`, `<Routes>`, `<Route>`
- NavLinks activos usan `<NavLink>` (aplica clase `active` automáticamente)
- Rutas actuales: `/` (Home), `/productos`, `/servicios`, `/acerca`, `/perfil`

### Estilos
- Importa CSS en componentes: `import "./styles/navbar.css"`
- Variables CSS compartidas en `theme.css` para temas
- Se aplican automáticamente según el tema activo

## Patrones Comunes

### Agregar una Nueva Página
1. Crear archivo en `src/pages/NombrePagina.jsx`
2. Importar en `App.jsx`
3. Agregar `<Route path="/ruta" element={<NombrePagina />} />`
4. Crear CSS correspondiente en `src/styles/nombrepage.css`

### Agregar un Nuevo Componente
1. Crear `src/components/NombreComponente.jsx`
2. Crear `src/styles/nombrecomponente.css`
3. Importar y usar en otros componentes o páginas

### Usar el Contexto de Tema
```jsx
import { useTheme } from "../context/ThemeContext";

function MiComponente() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Cambiar Tema</button>;
}
```

## Consideraciones Especiales

- **ESLint**: Configurado con reglas Oxc (más rápido que Babel)
- **React Compiler**: No está habilitado (consultar documentación si se necesita)
- **TypeScript**: No configurado; agregar si se requiere type safety en el futuro
- **Rama actual**: `banner-principal` (trabajando en banner)

## Desarrollo

- HMR (Hot Module Replacement) habilitado automáticamente con Vite
- Los cambios en CSS se reflejan instantáneamente
- Los cambios en componentes se actualizan sin perder estado cuando es posible
