const Button = ({type,handleClick,label})=>{
    return(
        <>
            <button type={type} onClick={handleClick}>Iniciar</button>
            {/* <button type={type} onClick={handleClick}>Cerrar Sesión</button> */}
        </>
    )
}
export default Button
