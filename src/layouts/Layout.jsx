import { Outlet } from "react-router-dom"
//Modal
import Modal from 'react-modal'
import ModalIncidencias from "../components/ModalIncidencias";
//Hook
import useValla from "../hooks/useValla";
//Componentes
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

//Styles del modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement('#root')

function Layout() {



  return (
    <>
      <div
        className="flex min-h-screen overflow-y-hidden flex-col
                  md:flex-row md:h-screen "
      >
        <div className="md:max-w-[20%] w-full bg-slate-900 
                      md:overflow-y-scroll 
        ">
          <div className="flex justify-center my-3 font-semibold">
            <h1 className="text-white">Selecciona un cliente</h1>
          </div>
          <Sidebar />
        </div>

        

        <div className="flex-1 flex flex-col ">
          <Header />

          <Outlet />
        </div>
      </div>

       


    </>
  )
}

export default Layout
