import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import { ToastContainer } from "react-toastify";
import MeusAnuncios from "./pages/MeusAnuncios.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/meus-anuncios" element={<MeusAnuncios />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);
