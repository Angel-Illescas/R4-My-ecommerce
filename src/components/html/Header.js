import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import Horario from './../horario/Horario';

const Header = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const userId = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await axios.get("http://localhost:3001/usuarios/");
        const usuarios = response.data.usuarios;
        const usuario = usuarios.find((user) => user.id === userId);

        if (usuario) {
          setNombreUsuario(usuario.nombre);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) {
      fetchUsuario();
    }
  }, [userId]);



  return (
    <div className="flex flex-row p-2">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div>
            <p className="text-xl font-bold">
              Bienvenido, <span className="text-my-blue">Demo User</span>
            </p>
            <p className="text-xs">
              <Horario />
            </p>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <div className="input-group">
              <button className="btn btn-square btn-disabled">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Buscar..."
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
