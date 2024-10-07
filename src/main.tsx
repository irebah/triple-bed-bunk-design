import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";

import App from "./App.tsx";
import "./index.css";

const TRACKING_ID = "G-DVQGP1631E";

ReactGA.initialize(TRACKING_ID);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
