import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import Layout from '@pages/Layout/Layout';
import Suppliers from '@pages/Home/Suppliers';
import Vehicles from '@pages/Home/Vehicles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Vehicles />,
        errorElement: ''
      },
      {
        path: '/proveedores',
        element: <Suppliers />,
        errorElement: ''
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
