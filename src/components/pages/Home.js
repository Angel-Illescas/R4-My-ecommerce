import React from "react";
import Sidebar from "../html/Sidebar";
import Registro_ventas from "../chats/Registro_ventas";
import Ultimas_ventas from "../chats/Ultimas_ventas";
import Ultimas_ventas_circle from "../chats/Ultimas_ventas_circle";
import Venta_ubicacion from "../chats/Venta_ubicacion";
import Productos_destacados from "../chats/Productos_destacados";
import Footer from "../html/Footer";
import Header from "../html/Header";


const Home = () => {
    return (
        <div class="">
        <div class="flex flex-row">
          {/* SIDEBAR */}
          <Sidebar />
          {/* RIGHT-SIDE */}
          <div class="basis-10/12">
            {/* HEADER */}
            
            <Header/>

            {/* BODY & GRAPHICS */}
            <div class="flex flex-row bg-base-200 pt-5 px-5 space-x-2">
              <div class="basis-4/12 text-center border-2 p-1 bg-base-100 rounded-lg pt-3">
                <hi class="font-black">Registro de ventas</hi>
                <Registro_ventas />
              </div>
              <div class="basis-8/12 border-2 p-1 bg-base-100 rounded-lg pt-3">
                <div class="flex flex-row justify-center ">
                  <div class=""><hi class="font-black ">Últimas ventas</hi></div>
                </div>
                <div class="flex flex-row">
                  <div class="basis-6/12">
                    <Ultimas_ventas />
                  </div>
                  <div class="basis-6/12">
                    <Ultimas_ventas_circle />
                  </div>
                </div>
              </div>

            </div>
            <div class="flex flex-row bg-base-200 pb-5 pt-2 px-5 space-x-2">
              <div class="basis-6/12 text-center border-2 p-1 bg-base-100 rounded-lg pt-3 ">
                <hi class="font-black">Venta por Ubicación</hi>
                <Venta_ubicacion />
              </div>
              <div class="basis-6/12 text-center border-2 p-1 bg-base-100 rounded-lg pt-3">
                <hi class="font-black">Productos Destacados</hi>
                <div class="p-3.5"><Productos_destacados /></div>
              </div>
            </div>
          </div>

        </div>
        {/* FOOTER */}
        <Footer />
      </div>
    )
}

export default Home