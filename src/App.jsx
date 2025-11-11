import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

window.addEventListener('load',function(){
  const btn = this.document.getElementById('btnBuscar');
  btn.addEventListener('click', Buscar);
  function Buscar(){
    const serie = document.getElementById('BuscadorSeries');
    const busqueda = document.getElementById('Historial_de_buscados');
    busqueda.innerHTML = serie.value;
    localStorage.setItem('serieBuscada',serie.value);
    return true;
  }
})

  return (
    <>
      <h1>Buscador de Series</h1>
      <form id="form1">
        <label id="label1">Busca Serie: </label>
        <input type="text" id="BuscadorSeries" placeholder="busca serie" name="serieBuscada"/>
      </form>
      <button id="btnBuscar">Buscar</button>
      <p id="Historial_de_buscados"></p>
    </>
  )
}

export default App
