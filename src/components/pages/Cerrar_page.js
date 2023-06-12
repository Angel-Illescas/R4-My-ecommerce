import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { iniciarSesion } from "../../reducers/authReducer";
import store from "../../store";
import Logo from "../html/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:3001/usuarios", {
        params: {
          correo: email,
          contraseña: password,
        },
      });

      const user = response.data[0]; // Suponemos que el correo es único

      if (user) {
        // Usuario autenticado, guardar sesión o token si es necesario
        dispatch(iniciarSesion(user.nombre)); // Utiliza el store importado para despachar la acción
        navigate("/"); // Redireccionar a la página de dashboard
      } else {
        // Credenciales inválidas
        alert("Credenciales inválidas");
      }
    } catch (error) {
      // Error en la solicitud
      console.error(error);
      alert("Ocurrió un error al realizar la autenticación");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="flex flex-col items-center mb-8">
            <Logo />
            <br />
            <h1 className="text-2xl font-bold">Login</h1>
          </div>
          <div className="mb-4">
            <label className="block text-my-blue text-sm font-bold mb-2">
              Correo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-my-blue text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-my-blue hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
