import { useEffect, useState } from "react";
import BarraBusqueda from "./components/BarraBusqueda";
import ListaSeries from "./components/ListaSeries";
import ModalSerie from "./components/ModalSerie";

const URL_API = "https://api.tvmaze.com/search/shows?q=";

function App() {
  const [consulta, setConsulta] = useState("");
  const [resultados, setResultados] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [serieSeleccionada, setSerieSeleccionada] = useState(null);

  // Cargar favoritos al arrancar
  useEffect(() => {
    const almacenados = localStorage.getItem("favoritos");
    if (almacenados) {
      setFavoritos(JSON.parse(almacenados));
    }
  }, []);

  // Guardar favoritos cuando cambian
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const buscarSeries = async () => {
    if (!consulta.trim()) return;
    try {
      const respuesta = await fetch(
        `${URL_API}${encodeURIComponent(consulta)}`
      );
      const datos = await respuesta.json();
      const series = datos.map((item) => item.show);
      setResultados(series);
    } catch (error) {
      console.error("Error al buscar:", error);
    }
  };

  const esFavorito = (serie) =>
    favoritos.some((favorito) => favorito.id === serie.id);

  const alternarFavorito = (serie) => {
    setFavoritos((favoritosPrevios) => {
      if (favoritosPrevios.some((fav) => fav.id === serie.id)) {
        return favoritosPrevios.filter((fav) => fav.id !== serie.id);
      }
      return [...favoritosPrevios, serie];
    });
  };

  const abrirModal = (serie) => setSerieSeleccionada(serie);
  const cerrarModal = () => setSerieSeleccionada(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1>EstellersFlixs:</h1>
      </header>

      <main className="app-main">
        <BarraBusqueda
          consulta={consulta}
          setConsulta={setConsulta}
          alBuscar={buscarSeries}
        />

        <section className="section">
          <h2>Resultados</h2>
          {resultados.length === 0 && (
            <p className="text-muted">
              Haz una búsqueda para ver series.
            </p>
          )}
          <ListaSeries
            series={resultados}
            alSeleccionarSerie={abrirModal}
            alAlternarFavorito={alternarFavorito}
            esFavorito={esFavorito}
          />
        </section>

        <section className="section">
          <h2>Favoritos</h2>
          {favoritos.length === 0 && (
            <p className="text-muted">
              Todavía no has añadido series a favoritos.
            </p>
          )}
          <ListaSeries
            series={favoritos}
            alSeleccionarSerie={abrirModal}
            alAlternarFavorito={alternarFavorito}
            esFavorito={esFavorito}
          />
        </section>
      </main>

      <ModalSerie
        serie={serieSeleccionada}
        alCerrar={cerrarModal}
        esFavorito={esFavorito}
        alAlternarFavorito={alternarFavorito}
      />
    </div>
  );
}

export default App;
