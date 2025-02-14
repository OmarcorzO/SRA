import React from 'react'
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

// import App from "./App.tsx";
// Css plantilla
import "./assets/bootstrap/css/bootstrap.min.css";
import './assets/DashminStyles/css/style.css'
import './assets/GeexStyles/css/style.css'
import './assets/styles.css'
import '@iconscout/unicons/css/line.css';

import Routing from "./Routing.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
