const SearchBar = ({ query, setQuery, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="BarraBusq">
      <form className="form1" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar serie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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

export default SearchBar;
