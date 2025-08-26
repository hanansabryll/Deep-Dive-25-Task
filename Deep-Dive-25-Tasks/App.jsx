
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCards from "./ProductCards";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🛍️ Our Products</h1>
      <ProductCards />
    </div>
  );
}

export default App;


