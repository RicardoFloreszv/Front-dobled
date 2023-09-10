//Hook
import useValla from "../hooks/useValla"

export default function Valla({valla}) {

  
    //Hook useValla
    const {handleObtenerEvidencia } = useValla()

  const {id, conductor, campana_id, matricula} = valla

return (
  <div className="bg-slate-900 rounded p-2 text-white ">
    <button
        type="button"
        onClick={() => handleObtenerEvidencia(id, conductor)}
    >
        <h2>Valla numero: {id}</h2>
        <h2 className="">Conductor: {conductor}</h2>
        <h2>Matriculas: {matricula}</h2>      
    </button>

  </div>
)
}