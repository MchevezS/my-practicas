const Inputs = ({text})=>{
    return(
        <>
        <div>
            <input id="inputNombre" placeholder="NOMBRE"></input>
            <input id="inputClave" placeholder="CLAVE"></input>
            <button onClick={text}>Iniciar Sesion</button>
        </div>
        </>
    )
}

export default Inputs