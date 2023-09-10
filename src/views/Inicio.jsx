import { useEffect, useState } from "react"
//Hook
import useValla from "../hooks/useValla"
//Componentes
import Campana from "../components/Campana"
import Valla from "../components/Valla"
import MyCalendar from "../components/MyCalendar"
import Evidencia from "../components/Evidencia"

//Modal
import Modal from 'react-modal'
import ModalIncidencias from "../components/ModalIncidencias";

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

function Inicio() {



    //Hook useValla
    const {clienteActual, campanas, campanasActuales, vallasActuales, modal, nombreCampana, historial, historialActual, nombreConductor } = useValla()


    //Destructuring 
    const {id, nombre, description, fechaContrato} = clienteActual

  return (
  <>
  <div className=" p-3
                  md:p-5
    ">
      <h2 className="mb-5 text-2xl text-center
                    md:mb-5 md:text-3xl md:text-left
      ">Cliente {nombre}</h2>

      <div>
        <p className="text-center mb-3
                      md:mb-2 md:text-left
        ">Campañas que pertenecen a {nombre}</p>

        {/* Campanas que pertenecen al cliente */}
        <div className='grid gap-4 grid-cols-1 mb-4
                        md:grid-cols-2
                        xl:grid-cols-3'
        >
            {
                campanasActuales.map((campana) => (
                    <Campana
                      key={campana.id}
                      campana={campana}
                    />
                  ))
            }        
        </div>        
      </div>

      {/* Vallas que pertenecen a cada campaña */}
      <div>
        <p className="text-center mb-3
                      md:text-left md:mb-3
        ">Vallas que pertenecen a {nombreCampana}</p>
        <div className='grid gap-4 grid-cols-1
                        md:grid-cols-2
                        xl:grid-cols-3'
        >
            {
                vallasActuales.map((valla) => (
                    <Valla
                      key={valla.id}
                      valla={valla}
                    />
                  ))
            }        
        </div>        
      </div>

      <div className="my-5 
                      md:flex md:my-10 md:gap-5 
      ">
              <div className=" bg-gray-200 rounded-lg
                            md:w-2/5
              ">
                <h2 className=" text-center text-xl my-5 pt-5 font-semibold
                                md:text-xl  md:my-7 md:pt-0
                ">Calendario</h2>     
                  
                  <MyCalendar/>
              
              </div>

              <div className="bg-gray-400 rounded-lg 
                              md:w-3/5 md:rounded-lg 
              ">
                    <h2 className="text-center text-sm pt-2 font-semibold
                                  md:text-xl md:my-7 md:pt-0
                    ">Historial de evidencias de la valla de {nombreConductor} </h2>

                    <div className="h-96 overflow-y-auto
                                    
                    ">
                      {historialActual.map((evidencia, index) => (
                        <>
                           <Evidencia
                            key={index}
                            evidencia={evidencia}
                          />
                        </>
                  ))}
                    </div>
              </div>  
      </div>
    </div>

    
    <Modal isOpen={modal} style={customStyles}>
            <ModalIncidencias />
        </Modal>   

  </>

  )
}

export default Inicio