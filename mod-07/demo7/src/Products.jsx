import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFavorites } from "./FavoritesContext";

export default function Products() {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();

  const [query, setQuery] = useState(
    () => localStorage.getItem("query") || ""
  );

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" },
    { id: 4, name: "Monitor" },
    { id: 5, name: "Keyboard" },
    { id: 6, name: "Mouse" },
    { id: 7, name: "Headphones" },
    { id: 8, name: "Speaker" },
    { id: 9, name: "Webcam" },
    { id: 10, name: "Printer" }
  ];

  useEffect(() => {
    localStorage.setItem("query", query);
  }, [query]);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Products</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      <h3>Favorites: {favorites.length}</h3>

      {filtered.map((p) => (
        <div key={p.id} style={{ marginTop: 10 }}>
          <span>{p.name}</span>

          <button onClick={() => navigate(`/products/${p.id}`)}>
            View
          </button>

          <button onClick={() => toggleFavorite(p)}>
            {favorites.find((f) => f.id === p.id)
              ? "Remove Fav"
              : "Add Fav"}
          </button>
        </div>
      ))}
    </div>
  );
}