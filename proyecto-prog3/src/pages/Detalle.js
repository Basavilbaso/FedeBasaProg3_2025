import React, { Component } from "react";
import { Link } from "react-router-dom";
import { apikey } from "../apikey";


class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: null
        };
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=` + apikey)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    pelicula: data
                });
            })
            .catch(error => console.log(error));
    }



    render() {
        const { pelicula } = this.state;
        
        return (
            <>
                {
                    !pelicula &&
                    <p>Cargando...</p>

                }
                {pelicula &&
                    <section className="section-detalle">
                        <article className="info">
                            <h3 className="tituloProd">
                                <Link to={`/Detail/id/${pelicula.id}`}>{pelicula.title}</Link>
                            </h3>
                            <img className="foto" src={'https://image.tmdb.org/t/p/w342' + pelicula.poster_path} alt="foto" />
                            <p>Rating: {pelicula.vote_average}</p>
                            <p>Fecha de lanzamiento: {pelicula.release_date}</p>
                            <p>Duración: {pelicula.runtime} min</p>
                            <p>Sinopsis: {pelicula.overview}</p>
                            {pelicula.genres && pelicula.genres.length > 0 && (
                                <div>
                                    <p>Géneros:</p>
                                    {pelicula.genres.map((genre, idx) => (
                                        <p key={idx}>{genre.name}</p>
                                    ))}
                                </div>
                            )}

                            <button className="boton-favorito">Agregar a favoritos</button>
                        </article>
                    </section>

                }
            </>
        )
    }
}

export default Detalle;
