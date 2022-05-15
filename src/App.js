import './App.css';
import { useState } from 'react';
import Contador from './components/Contador'
import Boton from './components/Boton';

function App() {
  let [numClics, setNumClics]= useState(0)

  let aumentar = () => {
    setNumClics(numClics + 1)
  }

  let reiniciar = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='contenedor'>
        <Contador numClics={numClics}/>
        <Boton texto='Aumentar' accion={aumentar}/>
        <Boton texto='Reiniciar' accion={reiniciar}/>
      </div>  
    </div>
  );
}

export default App;
