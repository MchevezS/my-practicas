import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componentes/InicioCerrar'
import Inputs from './componentes/Inputs'

function App() {
  const [inicia,setInicia]=useState(false)
  const cambiarValor = ()=>{
    setInicia(true)
  }
  
  return (
    <>
      <Nav Iniciada={inicia}/>  
      <Inputs text={cambiarValor}/>
    </>
  )
}

export default App
