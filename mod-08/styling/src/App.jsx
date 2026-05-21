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
    <div className="container mt-4">

      <h1 className="mb-4 fw-bold text-dark">
        Product Explorer
      </h1>

      <div className="mb-4">

      {(() => {
        const categories = [
          "All",
          "Electronics",
          "Furniture",
          "Kitchen"
        ];
        return categories.map((category) => (
          <button className="btn btn-primary me-2"
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ));
      })()}
      </div>

      <div className="row">

        <div className="col-md-7">

          <h2>Products</h2>

          {filteredProducts.map(
            (product) => (
              <div
                key={product.id}
                className="card mb-3"

                onMouseEnter={() =>
                  setSelectedProduct(
                    product
                  )
                }
              >
                <div className="card-body">

                  <h5 className="card-title">
                    {product.name}
                  </h5>

                  <p>
                    ${product.price}
                  </p>

                </div>
              </div>
            )
          )}

        </div>

        <div className="col-md-5">

          <h2>Details</h2>

          <div className="card">

            <div className="card-body">

              {selectedProduct ? (
                <>
                  <p>
                    <strong>Name:</strong>{" "}
                    {selectedProduct.name}
                  </p>

                  <p>
                    <strong>
                      Category:
                    </strong>{" "}
                    {
                      selectedProduct.category
                    }
                  </p>

                  <p>
                    <strong>
                      Price:
                    </strong>{" "}
                    $
                    {
                      selectedProduct.price
                    }
                  </p>
                </>
              ) : (
                <p>
                  Hover over a product
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}