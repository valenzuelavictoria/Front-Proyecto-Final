import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HeaderAdmin from "./components/admin/HeaderAdmin";
import AdminHome from "./pages/admin/AdminHome";
import Productos from "./pages/admin/Productos";
import Categorias from "./pages/admin/Categorias";
import Pedidos from "./pages/admin/Pedidos";
import Edicion from "./pages/admin/Edicion";
import Perfil from "./pages/admin/Perfil";

import UserHome from "./pages/user/UserHome";
import Funko from "./pages/user/Funko";
import Cart from "./pages/user/Cart";
import Favorites from "./pages/user/Favorites";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<HomePage />} />

        {/* Rutas del Administrador */}
        <Route path="/admin/*" element={<AdminLayout />} />

        {/* Rutas del Usuario */}
        <Route path="/user/*" element={<UserLayout />} />

        {/* Ruta por defecto o no encontrada */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

// Layout del Administrador con su Header y rutas anidadas
function AdminLayout() {
  return (
    <div>
      <HeaderAdmin />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="productos" element={<Productos />} />
          <Route path="categorias" element={<Categorias />} />
          <Route path="pedidos" element={<Pedidos />} />
          <Route path="edicion" element={<Edicion />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
      </main>
    </div>
  );
}

// Layout del Usuario con sus rutas anidadas
function UserLayout() {
  return (
    <Routes>
      <Route path="/" element={<UserHome />} />
      <Route path="funko/:id" element={<Funko />} />
      <Route path="carrito" element={<Cart />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="*" element={<Navigate to="/user" />} />
    </Routes>
  );
}

export default App;
