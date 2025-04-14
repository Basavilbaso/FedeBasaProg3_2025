import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import Buscador from "../components/Buscador/Buscador"
import SeccionTopRated from "../components/SeccionTopRated/SeccionTopRated";
import SeccionNowPlaying from "../components/SeccionNowPlaying/SeccionNowPlaying";

class Home extends Component{
    render(){
      return(
        <React.Fragment>
         <main>
            <h2 className="titulo">Buscar pelicula</h2>
            <Buscador history={this.props.history}/>
            <div className="contenedor">
               <h2 className="titulo">Peliculas con valoracion más alta</h2>
                <h3><Link className="l" to="/Top-Rated">Ver seccion</Link></h3>
            </div>
            <SeccionTopRated />
            <div className="contenedor">
               <h2 className="titulo">Peliculas en cartel</h2>
               <h3><Link className="l" to="/Now-Playing">Ver seccion</Link></h3>
            </div>
            <SeccionNowPlaying />
        </main>
    </React.Fragment>
      )
    }
  }
export default Home;
