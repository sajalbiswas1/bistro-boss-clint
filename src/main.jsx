import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import { Router } from 'react-router'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-7xl m-auto'>
    <RouterProvider router={router} />
    </div>
  </StrictMode>
)
