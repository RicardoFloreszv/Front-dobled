//Hook
import useValla from "../hooks/useValla"

export default function Campana({campana}) {

    const {id, nombre, description, fechaContrato } = campana

    //Hook useValla
    const {handleSetVallasXcampana, nombreCampana} = useValla()     
    
    //Utilizamos nombreCampana para resaltar la campaña seleccionada


  return (
    <div className={` rounded p-2 text-white text-left ${nombreCampana === nombre ? "bg-slate-900 border-b-8 border-sky-500  " : "bg-slate-900 "}`}>
      <button type='button' onClick={() => handleSetVallasXcampana(id, nombre)}>
        <h2>nombre de la campaña: {nombre}</h2>
        <h2 className="text-left">{description}</h2>
        <h2> {fechaContrato}</h2> 
      </button>

    </div>
  )
}
