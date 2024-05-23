import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Literasi from './Page/Literasi/Literasi.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Form from './Page/Form/Form.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "Literasi",
    element: <Literasi/>,
  },
  {
    path: "Form",
    element: <Form/>,
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,


)
