import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/assets/font/font.css";
import { StrictMode } from "react";
import App from "./App/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
