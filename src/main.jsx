import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/skills.css";
import "./styles/projects.css";
import "./styles/contact.css";
import "./styles/responsive.css";
import "./styles/footer.css";
import "./styles/education.css";
import "./styles/publications.css";
import "./styles/certificates.css";
import "./styles/stats.css";
import "./styles/research.css";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);