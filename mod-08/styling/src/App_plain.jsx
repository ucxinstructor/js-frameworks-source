import { useState } from "react";

export default function App() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "Desk Chair", category: "Furniture", price: 250 },
    { id: 3, name: "Headphones", category: "Electronics", price: 180 },
    { id: 4, name: "Coffee Maker", category: "Kitchen", price: 90 }
  ];

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
        (product) =>
          product.category === selectedCategory
      );

  return (
    <div>
      <h1>Product Explorer</h1>

      {(() => {
        const categories = [
          "All",
          "Electronics",
          "Furniture",
          "Kitchen"
        ];
        return categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ));
      })()}

      <h2>Products</h2>

      {filteredProducts.map(
        (product) => (
          <div
            key={product.id}
            onMouseEnter={() =>
              setSelectedProduct(
                product
              )
            }
          >
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        )
      )}

      <h2>Details</h2>

      {selectedProduct ? (
        <div>
          <p>
            Name:
            {" "}
            {selectedProduct.name}
          </p>

          <p>
            Category:
            {" "}
            {
              selectedProduct.category
            }
          </p>

          <p>
            Price:
            {" "}
            $
            {
              selectedProduct.price
            }
          </p>
        </div>
      ) : (
        <p>
          Hover over a product
        </p>
      )}
    </div>
  );
}