import React from 'react'
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

// import App from "./App.tsx";
// Css plantilla
import "./assets/bootstrap/css/bootstrap.min.css";
import './assets/DashminStyles/css/style.css'
import './assets/GeexStyles/css/style.css'
import '@iconscout/unicons/css/line.css';
import './assets/DashminStyles/fonts/icofont/icofont.min.css';
import './assets/CustomStyles/wizardstyles.scss'

// Import fonts
import "@fontsource/raleway/100.css"; // Specify weight
import "@fontsource/raleway/200.css"; // Specify weight
import "@fontsource/raleway/300.css"; // Specify weight
import "@fontsource/raleway/400.css"; // Specify weight
import "@fontsource/raleway/500.css"; // Specify weight
import "@fontsource/raleway/600.css"; // Specify weight
import "@fontsource/raleway/700.css"; // Specify weight
import "@fontsource/raleway/800.css"; // Specify weight
import "@fontsource/raleway/900.css"; // Specify weight
import "@fontsource/raleway/100-italic.css"; // Specify weight italic
import "@fontsource/raleway/200-italic.css"; // Specify weight italic
import "@fontsource/raleway/300-italic.css"; // Specify weight italic
import "@fontsource/raleway/400-italic.css"; // Specify weight italic
import "@fontsource/raleway/500-italic.css"; // Specify weight italic
import "@fontsource/raleway/600-italic.css"; // Specify weight italic
import "@fontsource/raleway/700-italic.css"; // Specify weight italic
import "@fontsource/raleway/800-italic.css"; // Specify weight italic
import "@fontsource/raleway/900-italic.css"; // Specify weight italic

import Routing from "./Routing.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
