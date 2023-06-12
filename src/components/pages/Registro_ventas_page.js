import React from "react";
import Sidebar from "../html/Sidebar";
import Horario from "../horario/Horario";
import Registro_ventas from "../chats/Registro_ventas";
import Footer from "../html/Footer";

const Registro_ventas_page = () => {
    return (
        <div class="">
        <div class="flex flex-row">
          {/* SIDEBAR */}
          <Sidebar />
          {/* RIGHT-SIDE */}
          <div class="basis-10/12">
            {/* HEADER */}
            <div class="flex flex-row p-2">
              <div className="navbar bg-base-100">
                <div className="flex-1">
                  <div>
                    <p class="text-xl font-bold">Bienvenido, <span class="text-my-blue">Angel Illescas</span></p>
                    <p class="text-xs"><Horario /></p>
                  </div>
                </div>
                <div className="flex-none gap-2">
                  <div className="form-control">
                    <div className="input-group">
                      <button className="btn btn-square btn-disabled">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      </button>
                      <input type="text" placeholder="Buscar..." className="input input-bordered " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BODY & GRAPHICS */}
            <div class="flex flex-row bg-base-200 pt-5 px-5 space-x-2">
                <Registro_ventas/>
              
             
            </div>
          </div>

        </div>
        {/* FOOTER */}
        <Footer />
      </div>
    )
};
    

export default Registro_ventas_page