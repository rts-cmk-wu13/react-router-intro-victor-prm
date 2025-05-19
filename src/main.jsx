import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './style/app.sass'
import App from './views/App.jsx'
import Settings from './views/Settings.jsx'
import Splash from './views/Splash.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "settings",
    element: <Settings />
  },
  {
    path: "splash",
    element: <Splash />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
