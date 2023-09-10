//Hook
import useValla from "../hooks/useValla"

export default function ModalIncidencias() {

    //Hook useValla
    const {handleClickModal, evidenciaSeleccionada } = useValla()

    const {foto1, foto2, hora, id, incidencias, valla_id} = evidenciaSeleccionada

    console.log(incidencias.incidencia1)
  return (
    <>
      <div className=" flex justify-between
                      md:flex justify-between md:mb-5 
      ">
        <h2 className="
                      md:font-semibold text-xl
        ">Incidencias de la valla {id}</h2>
        <button type="button" className=" 
                                        md: "
                onClick={() => handleClickModal()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
        </button>
      </div>
      <div className="
                    md:flex md:flex-col 
      ">
        <p className=" mt-4
                      md:mt-4
        ">Fecha y hora de la incidencia: {hora}</p>

        <p className=" font-semibold my-3
                    md:mt-9 md:my-0
        ">Reporte de la incidencia</p>
        <div className="">
          <p className=" bg-slate-200 py-2 rounded
                      md:my-5 mx-2 md:rounded-sm md:py-3 px-3
          ">
            {Object.keys(incidencias).map((key) => (
              <p key={key}>{incidencias[key]}</p>
            ))}
    
          </p>          
        </div>


      </div>
      
    </>
  )
}