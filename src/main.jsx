import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { VallaProvider } from './context/VallaProvider'
import router from './router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VallaProvider>
      
      <RouterProvider router={router}/>
    
    </VallaProvider>
    
  </React.StrictMode>,
)
