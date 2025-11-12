import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ShowList from "./components/ShowList";
import ShowModal from "./components/ShowModal";

const API_URL = "https://api.tvmaze.com/search/shows?q=";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  // Cargar favoritos al arrancar
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Guardar favoritos cuando cambian
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const res = await fetch(`${API_URL}${encodeURIComponent(query)}`);
      const data = await res.json();
      const shows = data.map((item) => item.show);
      setResults(shows);
    } catch (err) {
      console.error("Error al buscar:", err);
    }
  };

  const isFavorite = (show) =>
    favorites.some((fav) => fav.id === show.id);

  const toggleFavorite = (show) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === show.id)) {
        return prev.filter((fav) => fav.id !== show.id);
      }
      return [...prev, show];
    });
  };

  const openModal = (show) => setSelectedShow(show);
  const closeModal = () => setSelectedShow(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Buscador de series (TVMaze)</h1>
      </header>

      <main className="app-main">
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
        />

        <section className="section">
          <h2>Resultados</h2>
          {results.length === 0 && (
            <p className="text-muted">
              Haz una búsqueda para ver series.
            </p>
          )}
          <ShowList
            shows={results}
            onSelectShow={openModal}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        </section>

        <section className="section">
          <h2>Favoritos</h2>
          {favorites.length === 0 && (
            <p className="text-muted">
              Todavía no has añadido series a favoritos.
            </p>
          )}
          <ShowList
            shows={favorites}
            onSelectShow={openModal}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        </section>
      </main>

      <ShowModal
        show={selectedShow}
        onClose={closeModal}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;
