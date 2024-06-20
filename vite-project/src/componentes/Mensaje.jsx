// tengo que quitar los inputs y que solo se muestre el mensaje y un boton salir
import { useRef } from "react"
import Inputs from "./Inputs"
import Button from "./Button"


const Mensaje =({Mensajes}) =>{    /* mensaje que esta en los parametros es por lo que quiero recibi o lo que voy a enviar*/

return(
    <>
        <p>{Mensajes}</p>
       
        
    </>
)
}  

export default Mensaje