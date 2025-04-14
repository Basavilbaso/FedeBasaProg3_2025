import React, { Component } from "react";
import Peliculas from "../components/Peliculas/Peliculas";
import Filtro from "../components/Filtro/Filtro";
import { apikey } from "../apikey";

class TopRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      backupPeliculas: [],
      paginaActual: 0
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=" + apikey)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peliculas: data.results,
          backupPeliculas: data.results,
          paginaActual: 1
        });
      })
      .catch((error) => console.log(error));
  }

  filtrarPeliculas(busquedaUsuario) {
    const peliculasFiltradas = this.state.backupPeliculas.filter((elm) =>
      elm.title.toLowerCase().includes(busquedaUsuario.toLowerCase())
    );
    this.setState({ peliculas: peliculasFiltradas });
  }

  verMas() {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&page=${this.state.paginaActual + 1}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peliculas: this.state.backupPeliculas.concat(data.results),
          backupPeliculas: this.state.backupPeliculas.concat(data.results),
          paginaActual: this.state.paginaActual + 1
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <h1>Peliculas de mejor rating</h1>
        <Filtro filtro={(busqueda) => this.filtrarPeliculas(busqueda)} />
        <section>
          {
            this.state.peliculas.length > 0 ? (
              this.state.peliculas.map((movie, idx) => (
                <Peliculas key={idx + movie.title} peliculas={movie} />
              ))
            ) : this.state.backupPeliculas.length === 0 ? (
              <h1>Cargando películas...</h1>
            ) : (
              <h1>No se encontraron películas que coincidan con la búsqueda.</h1>
            )
          }
        </section>
        <div>
          <button className="ver" onClick={() => this.verMas()}>
            Ver más películas
          </button>
        </div>
      </>
    );
  }
  
   
}

export default TopRated;