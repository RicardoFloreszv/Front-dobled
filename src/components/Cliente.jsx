//Hook
import useValla from "../hooks/useValla"

export default function Cliente({cliente}) {

  const {handleClickCliente, clienteActual, handleClickCampanas } = useValla()

  const {id, nombre, description, fechaContrato} = cliente

  const handleButtonClick = () => {
    handleClickCliente(id); //Muestra el titulo del cliente
    handleClickCampanas(id); //pasa el id para filtrar y obtener las campañas con relacion al cliente

  };

  return (
    <div className={`bg-gray-100 px-5 py-3 border-b-4   mr-2 ${clienteActual.id === id ? "border-sky-500 " : "border-indigo-500 "}
    md:w-full md:my-2 md:border-l-8 md:mr-0 md:border-b-0 md:hover:border-l-4 `}>
      <button onClick={handleButtonClick}  className="w-full"
      >
          <h1 className="font-semibold text-xl w-40 md:w-auto ">{nombre}</h1>
          <p className="mb-2 text-sm">{description}</p>
          <p className="mb-2 text-sm">{fechaContrato}</p>        
      </button>
    </div>
  )
}
