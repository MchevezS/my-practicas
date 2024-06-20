import { useRef } from "react"
import Button from "./Button"

const Inputs = ({text})=>{
    const nombre = useRef('')
    const clave = useRef('')

    const validarVacio = () =>{
        if (!nombre.current.value && !clave.current.value) {
                alert("VACIO")
                return
        }
        text()
    }

    return(
        <>
            <input id="inputNombre" placeholder="NOMBRE" ref={nombre}/>
            <input id="inputClave" placeholder="CLAVE" ref={clave}/>                               
            <Button handleClick={validarVacio} label={"Iniciar Sesion"} type={"button"}/>
            
        </>
    )
}

export default Inputs
/* <input  />   <input></input>  si pongo input asi no pasa nada solo es por cuestion de gustos*/