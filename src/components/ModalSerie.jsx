const limpiarHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "");
};

const ModalSerie = ({ serie, alCerrar, esFavorito, alAlternarFavorito }) => {
  if (!serie) return null;

  return (
    <div className="modal-backdrop" onClick={alCerrar}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={alCerrar}>
          ×
        </button>
        <h2>{serie.name}</h2>
        <div className="modal-body">
          <img
            src={
              serie.image?.medium ||
              "https://via.placeholder.com/210x295?text=No+image"
            }
            alt={serie.name}
          />
          <div className="modal-info">
            <p>
              <strong>Idioma:</strong> {serie.language}
            </p>
            <p>
              <strong>Géneros:</strong> {serie.genres?.join(", ") || "—"}
            </p>
            <p>
              <strong>Rating:</strong> {serie.rating?.average || "N/A"}
            </p>
            <p>
              <strong>Estado:</strong> {serie.status}
            </p>
            <p>
              <strong>Resumen:</strong> {limpiarHtml(serie.summary)}
            </p>
            <button
              className="btn btn-fav"
              onClick={() => alAlternarFavorito(serie)}
            >
              {esFavorito(serie) ? "Quitar de favoritos" : "Añadir a favoritos"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSerie;
