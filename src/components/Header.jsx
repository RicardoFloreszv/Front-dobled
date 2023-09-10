import { Link } from "react-router-dom"

export default function Header() {
    return (
      <div className="flex flex-none justify-between py-4 bg-black text-white font-semibold">
          <h1 className="ml-5   transition-transform transform hover:scale-110 cursor-pointer"><a href="/">DOBLE D </a></h1>
          <div className="flex gap-4 mr-5">
              <Link to="/">Inicio</Link>
              <Link to="/mapa">Mapa</Link>
              <Link to="/empleados">Empleado</Link>

          </div>
      </div>
    )
  }
  