//Hook
import useValla from "../hooks/useValla"
//Components
import Cliente from "./Cliente"

export default function Sidebar() {

  const {clientes} = useValla()

  return (
    <div className=" md:flex-col overflow-y-auto 
                        flex
    ">
        {   //Card es la informacion de la iteracion
            clientes.map((cliente, index) => (
                <Cliente 
                  key={index} 
                  cliente={cliente}
                />
            ))
        }

     </div>
  )
}
