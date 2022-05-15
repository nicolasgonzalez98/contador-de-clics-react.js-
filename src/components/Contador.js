import React from "react"
import '../stylesheet/Contador.css'

function Contador({numClics}){
    return (
        <div className="Contador">
            {numClics}
        </div>
    )
}

export default Contador;