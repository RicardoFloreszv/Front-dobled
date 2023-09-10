import Header from "../components/Header"



export default function Mapa() {
  return (
    <div className="flex min-h-screen overflow-y-hidden flex-col 
            md:flex-row">
        
        <div className="md:max-w-[20%] w-full bg-gray-800">
          <div className="flex justify-center my-3 font-semibold">
            <h1 className="text-white">Seccion de empleados</h1>
          </div>
          
        </div>
        <div className="flex-1">
            
            <Header/>
            
        </div>

    </div>
  )
}
