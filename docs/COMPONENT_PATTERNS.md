# Patrones de Componentes

## Estructura Básica de un Componente

```jsx
// src/components/MiComponente.jsx
import "../styles/micomponente.css";

export default function MiComponente() {
  return (
    <div className="mi-componente">
      {/* contenido */}
    </div>
  );
}
```

## Componentes con Props

```jsx
// src/components/Card.jsx
import "../styles/card.css";

export default function Card({ title, description, onClick }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button onClick={onClick}>Ver más</button>
    </div>
  );
}
```

**Uso:**
```jsx
<Card 
  title="Mi Tarjeta" 
  description="Descripción de la tarjeta"
  onClick={() => console.log('Click!')}
/>
```

## Componentes con Estado Local

```jsx
// src/components/Counter.jsx
import { useState } from "react";
import "../styles/counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>Conteo: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```

## Usando Context (Theme)

```jsx
// src/components/ThemeButton.jsx
import { useTheme } from "../context/ThemeContext";
import "../styles/themebutton.css";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      Tema actual: {theme}
    </button>
  );
}
```

## Componentes de Página (Pages)

Las páginas son componentes completos con layout y lógica compleja:

```jsx
// src/pages/Productos.jsx
import { useState } from "react";
import "../styles/productos.css";

export default function Productos() {
  const [filtro, setFiltro] = useState("");

  const productos = [
    { id: 1, nombre: "Producto 1" },
    { id: 2, nombre: "Producto 2" },
  ];

  return (
    <section className="productos">
      <h1>Nuestros Productos</h1>
      <input 
        type="text"
        placeholder="Buscar..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {productos.map((p) => (
          <li key={p.id}>{p.nombre}</li>
        ))}
      </ul>
    </section>
  );
}
```

**Agregar en App.jsx:**
```jsx
import Productos from './pages/Productos';

// En <Routes>
<Route path="/productos" element={<Productos />} />
```

## Componentes Compuestos (Composition)

```jsx
// src/components/Article.jsx
import "../styles/article.css";

export default function Article({ children, title, date }) {
  return (
    <article className="article">
      <header className="article-header">
        <h2>{title}</h2>
        <time>{date}</time>
      </header>
      <div className="article-content">
        {children}
      </div>
    </article>
  );
}
```

**Uso:**
```jsx
<Article title="Mi Artículo" date="2026-04-20">
  <p>Contenido del artículo aquí...</p>
</Article>
```

## Componentes de Lista Reutilizable

```jsx
// src/components/ItemList.jsx
import "../styles/itemlist.css";

export default function ItemList({ items, renderItem }) {
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={index}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
```

**Uso:**
```jsx
const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "María" },
];

<ItemList 
  items={usuarios}
  renderItem={(user) => <span>{user.nombre}</span>}
/>
```

## Componentes Condicionales

```jsx
// src/components/Loading.jsx
import "../styles/loading.css";

export default function Loading({ isLoading, children }) {
  if (isLoading) {
    return <div className="loading">Cargando...</div>;
  }
  
  return <>{children}</>;
}
```

**Uso:**
```jsx
<Loading isLoading={loading}>
  <p>Contenido cargado</p>
</Loading>
```

## Hooks Personalizados

```jsx
// src/hooks/useCounter.js
import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}
```

**Uso:**
```jsx
import { useCounter } from "../hooks/useCounter";

export default function MyComponent() {
  const { count, increment, decrement } = useCounter(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

## Buenas Prácticas

✅ **Haz componentes pequeños y reutilizables**
✅ **Un componente = una responsabilidad**
✅ **Usa nombres descriptivos**
✅ **Coloca CSS junto al componente**
✅ **Destructura props para claridad**
✅ **Usa keys en listas** (nunca index si la lista cambia)
✅ **Comenta lógica compleja**

❌ **Evita componentes monolíticos**
❌ **Evita props innecesarias (drilling)**
❌ **Evita lógica compleja en JSX**
❌ **No mezcles CSS en inline styles**
❌ **No uses indices como key en listas dinámicas**
