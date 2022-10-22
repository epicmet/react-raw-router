import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "./RouterContext"
import { Router } from './Router';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider>
    <Router />
  </RouterProvider>
)
