import React from "react";
import ReactDOM from "react-dom/client";  
import App from "./App";
import { CartProvider } from "./assets/CartContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
