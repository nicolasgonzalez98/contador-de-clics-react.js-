import React from "react"
import '../stylesheet/Boton.css'

function Boton({texto, accion}){
    return (
        <>
            <button onClick={accion}>{texto}</button>
        </>
    )
}

export default Boton;