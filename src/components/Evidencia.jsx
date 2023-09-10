//Hook
import useValla from "../hooks/useValla"



export default function Evidencia({evidencia}) {

  const { hora, foto1, foto2, incidencias} = evidencia


  //Hook useValla
  const {handleClickModal, handleInformacionModal } = useValla()


  return (
    <div className="mx-2 my-2 
                md:mx-0 md:my-3
    ">
      <div className=" bg-gray-300  py-5 grid grid-cols-3 
                    md:flex gap-4 justify-center items-center md:py-0 md:justify-evenly
    ">
        <h2 className="text-center">{hora}</h2>
        <img src={foto1} alt="evidencia 1" height={100} width={100} />
        <img src={foto2} alt="evidencia 1" height={100} width={100} />

        <button type="button" className="rounded-lg bg-pink-600 text-white col-span-3 py-1
                        md:p-2" 
                        onClick={() => {
                          handleClickModal();
                          handleInformacionModal(evidencia);
                      }} 
        
        >
          Incidencias
        </button>
      </div>
    </div>
  );
}