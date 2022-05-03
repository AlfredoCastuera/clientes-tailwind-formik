import { useState } from 'react'
import {BrowserRouter as Router, Routes,Route, BrowserRouter} from "react-router-dom"
import IniciarSesion from './layout/IniciarSesion'
import Layout from './layout/Layout'
import Inicio from './pages/Inicio'
import Formulario from './components/Formulario'
import NuevoCliente from './pages/NuevoCliente'
import EditarCliente from './pages/EditarCliente'
import VerCliente from './pages/VerCliente'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IniciarSesion />}>
              <Route index element={<Formulario />} />
          </Route>
          <Route path="/clientes" element={<Layout />}>
            <Route index element={<Inicio />}/>
            <Route path="nuevo" element={<NuevoCliente />}/>
            <Route path="editar/:id" element={<EditarCliente />}/>
            <Route path=":id" element={<VerCliente />}/>


          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App
