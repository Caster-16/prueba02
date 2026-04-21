# Convenciones de Estilos

## Organización de CSS

Cada componente tiene su propio archivo CSS en `src/styles/`:

```
src/
├── components/
│   ├── Navbar.jsx        → src/styles/navbar.css
│   ├── Footer.jsx        → src/styles/footer.css
│   └── Banner.jsx        → src/styles/banner.css
└── styles/
    ├── navbar.css
    ├── footer.css
    ├── banner.css
    ├── theme.css         # Variables CSS y temas
    └── perfil.css        # Estilos de página
```

## Importar CSS en Componentes

Siempre importa el CSS al inicio del archivo del componente:

```jsx
// src/components/Navbar.jsx
import "../styles/navbar.css";

function Navbar() {
  // ...
}
```

## Sistema de Temas

### Variables CSS en `theme.css`

Define variables CSS que cambian según el tema:

```css
:root.light-theme {
  --bg-primary: #ffffff;
  --text-primary: #000000;
  --border-color: #e0e0e0;
}

:root.dark-theme {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
  --border-color: #333333;
}
```

### Uso de Variables en Componentes

```css
/* src/styles/navbar.css */
.navbar {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
}
```

## Convenciones de Nombres

- **Variables CSS**: `--nombre-de-variable` (kebab-case)
- **Clases CSS**: `.nombre-componente` (minúsculas, guiones)
- **IDs**: Evitar, usar clases en su lugar

## Estructura de Selectores

Mantén los selectores simples y específicos:

```css
/* ✅ Bien: específico pero simple */
.navbar {
  /* estilos */
}

.navbar .nav-links {
  /* estilos */
}

.navbar .nav-links a {
  /* estilos */
}

/* ❌ Evitar: demasiado anidado */
.navbar > div.center > nav.nav-links a:not(:last-child) {
  /* ... */
}
```

## Responsive Design

Usa media queries estándar:

```css
/* Mobile first */
.navbar {
  padding: 1rem;
}

/* Tablet y desktop */
@media (min-width: 768px) {
  .navbar {
    padding: 1.5rem;
  }
}
```

## Colores y Constantes

Define una paleta de colores base en `theme.css`:

```css
:root.light-theme {
  --color-primary: #3498db;
  --color-secondary: #2ecc71;
  --color-danger: #e74c3c;
  --color-warning: #f39c12;
  --color-success: #27ae60;
}
```

## Estado Activo en NavLinks

React Router aplica automáticamente la clase `active` a `<NavLink>`:

```css
.nav-links a {
  color: var(--text-primary);
  text-decoration: none;
}

.nav-links a.active {
  font-weight: bold;
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
}
```

## Uso de Flexbox/Grid

```css
/* Flex */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Grid */
.footer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}
```

## Performance

- **No usar `!important`** a menos que sea absolutamente necesario
- **Reutilizar clases** en lugar de duplicar estilos
- **Usar variables CSS** para mantener consistencia
- **Minimizar selectores complejos** para mejor performance

## Testing de Temas

Verifica ambos temas durante desarrollo:

1. Abre las DevTools (F12)
2. Console: `document.body.classList.add('dark-theme')`
3. Console: `document.body.classList.remove('dark-theme')`

O usa el componente `ThemeToggle` en la app.
