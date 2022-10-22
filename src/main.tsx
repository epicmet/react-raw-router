import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "./RouterContext"
import { Router } from './Router';
import { ChangeRouteForm } from './ChangeRouteForm';
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider>
      <Router />
    </RouterProvider>
    <ChangeRouteForm />
  </React.StrictMode>
)
