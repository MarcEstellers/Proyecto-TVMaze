const ListaSeries = ({
  series,
  alSeleccionarSerie,
  alAlternarFavorito,
  esFavorito,
}) => {
  if (!series || series.length === 0) return null;

  return (
    <div className="shows-grid">
      {series.map((serie) => (
        <div key={serie.id} className="show-card">
          <div
            className="show-card-image-wrapper"
            onClick={() => alSeleccionarSerie(serie)}
          >
            <img
              src={
                serie.image?.medium ||
                "https://via.placeholder.com/210x295?text=No+image"
              }
              alt={serie.name}
            />
          </div>
          <h3 className="show-card-title">{serie.name}</h3>
          <button
            className="btn btn-fav"
            onClick={() => alAlternarFavorito(serie)}
          >
            {esFavorito(serie)
              ? "Quitar de favoritos"
              : "Añadir a favoritos"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaSeries;
