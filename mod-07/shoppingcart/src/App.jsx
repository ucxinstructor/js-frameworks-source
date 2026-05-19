import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./FavoritesContext";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

export default function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}