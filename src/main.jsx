import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BlogProvider from "./store/blog-provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </StrictMode>
);
