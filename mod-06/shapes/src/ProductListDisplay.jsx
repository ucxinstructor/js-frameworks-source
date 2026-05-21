import { useState } from "react";

export default function ProductListDisplay() {
  const [products] = useState([
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Phone", price: 800 },
    { id: 103, name: "Headphones", price: 150 },
    { id: 104, name: "Keyboard", price: 100 },
  ]);

  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Product List</h1>

      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{ marginBottom: 8, cursor: "pointer" }}
            onMouseEnter={() => setHovered(product)}
            onMouseLeave={() => setHovered(null)}
          >
            <strong>{product.name}</strong> — ${product.price}
          </li>
        ))}
      </ul>

      {/* Hover display */}
      {hovered && (
        <div style={{ marginTop: 20, padding: 10, border: "1px solid #ccc" }}>
          <p><strong>Hovered Item</strong></p>
          <p>ID: {hovered.id}</p>
          <p>Name: {hovered.name}</p>
        </div>
      )}
    </div>
  );
}