import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from "./componentes/navbar"
import HomePage from "./componentes/HomePage"
import ListadoMedicos from "./componentes/ListadoMedicos"
import ListadoPacientes from "./componentes/ListadoPacientes"
import FormularioTurno from "./componentes/FormularioTurno"
export default function App() {


  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/medicos" element={<ListadoMedicos />} />
          <Route path="/pacientes" element={<ListadoPacientes />} />
          <Route path="/turnos" element={<FormularioTurno />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}


