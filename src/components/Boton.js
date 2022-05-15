import React from "react"
import '../stylesheet/Boton.css'

function Boton({texto, accion}){
    return (
        <>
            <button className={texto ==='Aumentar' ? 'boton-clic' : 'boton-reiniciar'} onClick={accion}>{texto}</button>
        </>
    )
}

export default Boton;