import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componentes/Nav'
import Inputs from './componentes/Inputs'
import Button from './componentes/Button'
import Mensaje from './componentes/Mensaje'
 /* si quiero crear variables las tengo que usar dentro de la funcion y no adentro del reeturn, tampoco las puedo crear por fuera de la funcion */
function App(){
  const [inicia,setInicia]=useState(false)
  
  const cambiarValor = ()=>{
    console.log("Inicia");
    setInicia(true)
  }
  
  return (
    <>
      <Nav Iniciada={inicia}/>  
      {inicia?"":<Inputs text={cambiarValor}/>}
      {inicia ? <Mensaje Mensajes={"WELCOME, HAS INICIADO SESION "}/> : ""}

    </>
  )
}

export default App
