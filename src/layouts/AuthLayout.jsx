import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <div>
      Authlayout
      <Outlet />
    </div>
  )
}

export default AuthLayout
