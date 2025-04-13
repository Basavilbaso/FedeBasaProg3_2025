import React from "react";
import { Component } from "react";
import { apikey } from "../apikey";
import Peliculas from "../components/Peliculas/Peliculas"

class SearchResults extends Component{
    constructor(props){
        super(props);
        this.state = {
            busqueda: props.match.params.busqueda,
            movies: [],
            loading: true
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=` + apikey)
        .then(response => response.json())
        .then(data =>{this.setState({movies: data.results, loading: false})})
        .catch((e) => console.log(e))
    }

    render(){
        return(
            <div>
                 <h1>Acerca de: {this.state.busqueda}</h1>
                 <h2>Películas encontradas: {this.state.movies.length}</h2>
                 <section>
                    {
                        this.state.movies.length > 0 ? (
                            this.state.movies.map((movie, idx) =>
                            <Peliculas key={idx} peliculas={movie} />)
                        ) : this.state.loading ? (
                            <h1>Cargando...</h1>
                        ): (
                            <h1>No se encontraron peliculas para tu busqueda</h1>
                        )
                    }
                 </section>
            </div>
        )
    }
}
export default SearchResults;
    

