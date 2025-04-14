import React from "react";
import { Component } from "react";
import "./SeccionTopRated.css";
import PeliculasInfo from "../Peliculas/Peliculas";
import { apikey } from "../../apikey";

class PeliculasMasValor extends  Component{
    constructor(props){
        super(props);
        this.state = {
            peliculas: [],
            filtrarPeliculas: []
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=" + apikey)
        .then(response => response.json())
        .then(data => this.setState({
            peliculas: data,
            filtrarPeliculas: data.results.slice(0,5)
        }))
        .catch(error => console.log(error))
    }
    
    render() {
        return (
            <section>
                {this.state.filtrarPeliculas.map((pelicula, idx) => (
                    <PeliculasInfo key={idx} peliculas={pelicula} />
                ))}
            </section>
        );
    }
    
}
export default PeliculasMasValor;