const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "");
};

const ShowModal = ({ show, onClose, isFavorite, onToggleFavorite }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <h2>{show.name}</h2>
        <div className="modal-body">
          <img
            src={
              show.image?.medium ||
              "https://via.placeholder.com/210x295?text=No+image"
            }
            alt={show.name}
          />
          <div className="modal-info">
            <p>
              <strong>Idioma:</strong> {show.language}
            </p>
            <p>
              <strong>Géneros:</strong> {show.genres?.join(", ") || "—"}
            </p>
            <p>
              <strong>Rating:</strong> {show.rating?.average || "N/A"}
            </p>
            <p>
              <strong>Estado:</strong> {show.status}
            </p>
            <p>
              <strong>Resumen:</strong> {stripHtml(show.summary)}
            </p>
            <button
              className="btn btn-fav"
              onClick={() => onToggleFavorite(show)}
            >
              {isFavorite(show) ? "Quitar de favoritos" : "Añadir a favoritos"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
