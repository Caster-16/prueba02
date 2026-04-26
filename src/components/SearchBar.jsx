import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/search.css";

function SearchBar({ setSearch }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (value) => {
    setInput(value);
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate(`?search=${encodeURIComponent(input)}`);
    }
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar libros, autores..."
        value={input}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
