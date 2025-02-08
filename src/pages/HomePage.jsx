import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google"; // Importar GoogleLogin
import * as jwtDecode from "jwt-decode"; // Cambiar a importación correcta
import logoImage from "../assets/logo.png";
import "../HomePage.css"; 

const HomePage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = (response) => {
    if (response?.credential) {
      try {
        // Decodificar el JWT para obtener el correo del usuario
        const decoded = jwtDecode(response.credential);
        const email = decoded.email;

        console.log("Correo decodificado:", email); // Debugging

        // Enviar el correo al backend para validar si es administrador
        fetch("http://localhost:5000/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Respuesta del backend:", data); // Debugging
            // Si el usuario es el administrador, redirigir a la vista del admin
            if (data.role === "admin") {
              navigate("/admin");
            } else {
              navigate("/user");
            }
          })
          .catch((error) => {
            console.error("Error al autenticar:", error);
          });
      } catch (error) {
        console.error("Error al decodificar el JWT:", error);
      }
    }
  };

  return (
    <div className="home-container-HP">
      {/* Logo */}
      <div className="logo-containerHP">
        <img src={logoImage} alt="Logo" className="logoHP" />
      </div>

      {/* Texto "Iniciar sesión" */}
      <h1 className="login-textHP">Iniciar sesión</h1>

      {/* Botón de Google */}
      <GoogleLogin 
        onSuccess={handleGoogleLogin} 
        onError={() => console.log("Error en login con Google")} 
        useOneTap
      />
    </div>
  );
};

export default HomePage;
