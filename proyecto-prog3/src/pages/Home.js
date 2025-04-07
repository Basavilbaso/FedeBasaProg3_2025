import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component{
    render(){
      return(
        <React.Fragment>
         <main>
            <h2 className="titulo">Buscar pelicula</h2>

            <h2 className="titulo">Peliculas con valoracion más alta</h2>

            <h2 className="titulo">Peliculas en cartel</h2>

        </main>
    </React.Fragment>
      )
    }
  }
export default Home;
