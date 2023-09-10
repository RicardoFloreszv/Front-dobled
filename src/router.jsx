import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Mapa from "./components/Mapa";
import Empleados from "./views/Empleados";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path:'/mapa',
        element: <Mapa />
    },
    {
        path:'/empleados',
        element: <Empleados />
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            },

        ]
    }
])

export default router