import { useState, createContext, useEffect} from 'react'

//Importar Data
import dataClientes from '../../data/clientes'
import dataCampanas from '../../data/campanas'
import dataVallas from '../../data/vallas'
import historialEvidencias from "../../data/evidencia"
import clienteAxios from '../config/axios'




const VallaContext = createContext()

const VallaProvider = ({children}) => {

    const [clientes,setClientes] = useState(dataClientes) 
    const [clienteActual, setClienteActual] = useState(dataClientes[0])

    const [campanas, setCampanas] = useState(dataCampanas)
    const [campanasActuales, setCampanasActuales] = useState([])

    const [vallas, setVallas] = useState(dataVallas)
    const [vallasActuales, setvallasActuales] = useState([])

    const [historial, setHistorial] = useState(historialEvidencias)
    const [historialActual, setHistorialActual] = useState(historialEvidencias[0].historial) 

    //State Modal
    const [modal, setModal] = useState(false)
    const [evidenciaSeleccionada, setEvidenciaSeleccionada] = useState({})

    //Nombres de..
    const [nombreCampana, setNombreCampana] = useState(campanas[0].nombre)
    const [nombreConductor, setNombreConductor] = useState("")


    const obtenerCategorias = async () => {

        try {
            const {data} = await clienteAxios('api/categorias')
            console.log(data.data);

        } catch (error) {
            console.log(error);
        }
    }

    const obtenerPermisos = async () => {

        try {
            const {data} = await clienteAxios('api/permiso')
            console.log(data.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      
        obtenerCategorias();
        obtenerPermisos();
    }, [])
    




    //Effect para llenar las campañas actuales
    useEffect(() => {
        setCampanasActuales(  dataCampanas.filter((campana) => campana.cliente_id === 1))
    }, [])

    //Effect para llenar las vallas iniciales.
    useEffect(() => {
        setvallasActuales(  dataVallas.filter((valla) => valla.campana_id === 1))
    }, [])

    //Muestra el titulo del cliente seleccionado.
    const handleClickCliente = (id) => {
        const cliente = clientes.filter(cliente => cliente.id === id)[0]
        setClienteActual(cliente)
    }

    //Obtener las Campañas Seleccionadas
    const handleClickCampanas = (id) => {
        const campanasSeleccionadas = campanas.filter(campana => campana.cliente_id === id)  //Aqui estuve 3 horas con un error, al colocar === no deja llenar el arreglo. //Revisar.
        setCampanasActuales(campanasSeleccionadas)

        //Ademas de setear las campañas, tambien setear las vallas. Aprovechamos que ya tenemos las campañas del cliente seleccionado. Como necesitamos obtener las vallas de la primer campaña usamos [0].id porque ocupamos el id para filtrar.
        const vallasNuevas = vallas.filter(valla => valla.campana_id === campanasSeleccionadas[0].id)
        setvallasActuales(vallasNuevas)

        //Setear el nombre de la primer campaña del cliente al hacer click en un cliente
        setNombreCampana(campanasSeleccionadas[0].nombre)

    }

    //Activar el modal
    const handleClickModal  = () => {
        setModal(!modal)
    }

    //llenar informacion del modal
    const handleInformacionModal  = (evidencia) => {
        setEvidenciaSeleccionada(evidencia)
    }

    //Setear VallasActuales para obtener las vallas que pertenezcan a cada campaña
    const handleSetVallasXcampana = (id, nombre) => {
        //Filtrar
        const vallasfiltradas = vallas.filter(valla => valla.campana_id === id)
        //Setear vallas actuales
        setvallasActuales(vallasfiltradas)

        
        //Setear el nombre de la campaña para mostrar en vallas
        setNombreCampana(nombre)
    }

    //Obtener el historial de evidencia de cada valla
    const handleObtenerEvidencia = (id, conductor) => {
        //Filtrar para encontrar cual evidencia pertene a la valla seleccionada.
        const evidenciaIterada = historial.filter(historialValla => historialValla.valla_id === id)[0].historial
        //Ahora cada que se de click y se ejecute esta funcion se va a setear el historial actual.
        setHistorialActual(evidenciaIterada);

        //Pasar el nombre a inicio para la seccion de evidencias
        setNombreConductor(conductor)
    }



    return(
        <VallaContext.Provider
            value={{
                clientes,
                clienteActual,
                handleClickCliente,
                campanas,
                campanasActuales,
                handleClickCampanas,
                vallasActuales,
                handleClickModal,
                handleInformacionModal,
                evidenciaSeleccionada,
                modal,
                handleSetVallasXcampana,
                nombreCampana,
                historial,
                handleObtenerEvidencia,
                historialActual,
                nombreConductor
                


            }}
        >
            {children}
        </VallaContext.Provider>
    )
}

export { 
    VallaProvider
}
export default VallaContext