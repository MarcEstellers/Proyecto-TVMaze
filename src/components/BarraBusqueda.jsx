import { useState } from "react"


const BarraBusq = () => {
    const [textoBusqueda, setTextoBusqueda] = useState("")

    const inicioBusqueda = (e) => {
        e.preventDefault();

        console.log("Buscando "+textoBusqueda);
    }

    return (
        <div className="BarraBusq">
            <form className="form1">
                <input type="text" placeholder="buscar serie" value={textoBusqueda} onChange={(e) => setTextoBusqueda(e.target.value)} />
                <button className="botonBusqueda" onClick={inicioBusqueda}>Buscar</button>
            </form>
        </div>
    );
};

export default BarraBusq