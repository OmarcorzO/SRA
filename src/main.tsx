import React from 'react'
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

// import App from "./App.tsx";
// Css plantilla
import "./assets/bootstrap/css/bootstrap.min.css";
import './assets/GeexStyles/css/style.css'
import './assets/DashminStyles/css/style.css'
import '@iconscout/unicons/css/line.css';
import './assets/DashminStyles/fonts/icofont/icofont.min.css';

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

// Second fonts
import "@fontsource/dm-sans/100.css"; // Second Specify weight
import "@fontsource/dm-sans/200.css"; // Second Specify weight
import "@fontsource/dm-sans/300.css"; // Second Specify weight
import "@fontsource/dm-sans/400.css"; // Second Specify weight
import "@fontsource/dm-sans/500.css"; // Second Specify weight
import "@fontsource/dm-sans/600.css"; // Second Specify weight
import "@fontsource/dm-sans/700.css"; // Second Specify weight
import "@fontsource/dm-sans/800.css"; // Second Specify weight
import "@fontsource/dm-sans/900.css"; // Second Specify weight
// Second fonts Italic
import "@fontsource/dm-sans/100-italic.css"; // Second Specify weight
import "@fontsource/dm-sans/200-italic.css"; // Second Specify weight
import "@fontsource/dm-sans/300-italic.css"; // Second Specify weight
import "@fontsource/dm-sans/400-italic.css"; // Second Specify weight
import "@fontsource/dm-sans/500-italic.css"; // Second Specify weight
import "@fontsource/dm-sans/600-italic.css"; // Second Specify weight
import "@fontsource/dm-sans/700-italic.css"; // Second Specify weight
import "@fontsource/dm-sans/800-italic.css"; // Second Specify weight
import "@fontsource/dm-sans/900-italic.css"; // Second Specify weight

import Routing from "./Routing.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
