import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FormComponent } from "./FormComponent.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormComponent></FormComponent>
  </StrictMode>
);
