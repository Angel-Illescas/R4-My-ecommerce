import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos_des_page from './components/pages/Productos_des_page';
import Registro_ventas_page from './components/pages/Registro_ventas_page';
import Ultimas_ventas_page from './components/pages/Ultimas_ventas_page';
import Ventas_ubi_page from './components/pages/Ventas_ubi_page';
import Configuracion from './components/pages/Configuracion';
import Agregar_page from './components/pages/Agregar_page';
import Cerrar_page from './components/pages/Cerrar_page';
import Home from './components/pages/Home';
import { Provider } from "react-redux";
import store from "./store";




function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto_destacado" element={<Productos_des_page />} />
          <Route path="/registro_ventas" element={<Registro_ventas_page />} />
          <Route path="/ultimas_ventas" element={<Ultimas_ventas_page />} />
          <Route path="/ventas_ubicacion" element={<Ventas_ubi_page />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/agregar" element={<Agregar_page />} />
          <Route path="/cerrar" element={<Cerrar_page />} />
        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

export default App;



