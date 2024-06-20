 const Nav =({Iniciada}) => {
    return(
     <>
        <nav id="navBar">
        <li>Inicio</li>
            {Iniciada? <a href="Inputs.jsx">Cerrar sesión</a> : <a>Iniciar sesión</a>} 
             
        </nav>
     </>
)
}
export default Nav