const BarraBusqueda = ({ consulta, setConsulta, alBuscar }) => {
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    alBuscar();
  };

  return (
    <div className="BarraBusq">
      <form className="form1" onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Buscar serie..."
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
        />
        <button
          type="submit"
          className="botonBusqueda botonBusqueda-block"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default BarraBusqueda;
