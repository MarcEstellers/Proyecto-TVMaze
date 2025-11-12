const ShowList = ({ shows, onSelectShow, onToggleFavorite, isFavorite }) => {
  if (!shows || shows.length === 0) return null;

  return (
    <div className="shows-grid">
      {shows.map((show) => (
        <div key={show.id} className="show-card">
          <div
            className="show-card-image-wrapper"
            onClick={() => onSelectShow(show)}
          >
            <img
              src={
                show.image?.medium ||
                "https://via.placeholder.com/210x295?text=No+image"
              }
              alt={show.name}
            />
          </div>
          <h3 className="show-card-title">{show.name}</h3>
          <button
            className="btn btn-fav"
            onClick={() => onToggleFavorite(show)}
          >
            {isFavorite(show) ? "Quitar de favoritos" : "Añadir a favoritos"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
