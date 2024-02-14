import React from "react";
import Aplicacion from "./components/aplicacion";
import Register from "./components/register";
import Login from "./components/login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Aplicacion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
