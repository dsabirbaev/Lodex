import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from "./router/index.jsx";
import { PrimeReactProvider } from 'primereact/api';
import { RouterProvider } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <React.StrictMode>

      <RouterProvider router={router} />

    </React.StrictMode>
  </PrimeReactProvider>
)
