import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>

      <button onClick={() => navigate("/products")}>
        Back
      </button>
    </div>
  );
}