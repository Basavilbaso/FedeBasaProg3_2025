import React from "react";
import { Component } from "react";
import { apikey } from "../apikey";
import Peliculas from "../components/Peliculas/Peliculas"


class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            haypelis: false
        }
    }

    componentDidMount() {
        const storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            if (parsedStorage.length > 0) {
                Promise.all(
                    parsedStorage.map((id) =>
                        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=` + apikey)
                            .then(response => response.json())
                            .catch(e => console.log(e)))
                )
                    .then((data) => {
                        this.setState({
                            peliculas: data,
                            haypelis: true
                        })
                    })
                    .catch(error => console.log(error));
            }

        }
    }

    filtrarPeliculasFavoritas(id) {
        const peliculasFiltradas = this.state.peliculas.filter(
            elm => elm.id !== id
        )
        this.setState({ peliculas: peliculasFiltradas })
    }

    render() {
        return (
            <>
                <h1>Películas Favoritas</h1>
                <section>
                {
                    
                    this.state.peliculas.length > 0 ?
                        this.state.peliculas.map((pelicula, idx) =>
                            <Peliculas
                                peliculas={pelicula}
                                key={idx}
                                borrarDeFavoritos={(id) => this.filtrarPeliculasFavoritas(id)}
                            />)
                        :
                        this.state.haypelis === false ?
                            <h1>No se encuentran peliculas seleccionandas como favoritas.</h1>
                            :
                            <h1>Cargando...</h1>
                }
                </section>
            </>
        );
    }


}
export default Favoritos;

   
