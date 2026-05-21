import PostManager from "./PostManager";
import ProductShopper from "./ProductShopper";
import { useState } from "react";

const views = {
  postman: PostManager,
  productshopper: ProductShopper,
};

export default function App() {
  const [view, setView] = useState("postman");

  const ActiveComponent = views[view];

  return (
    <>
    <div>Module 7 Demo</div>
    <div>
      <button onClick={() => setView("postman")}>Post Manager</button>
      <button onClick={() => setView("productshopper")}>Product Shopper</button>

      <ActiveComponent />
    </div>
    </>
  );
}