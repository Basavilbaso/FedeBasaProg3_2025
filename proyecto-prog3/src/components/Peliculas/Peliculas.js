import { Component } from "react";
import "./Peliculas.css";
import { Link } from "react-router-dom";


class PeliculasInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            viewDescription: false,
            favorito: false,
        }
    }

    clickViewDescription(){
        this.setState({viewDescription: !this.state.viewDescription})
    }

    componentDidMount(){
      let storage= localStorage.getItem('favoritos')
      if(storage !== null){
        let storageParseado = JSON.parse(storage)
        let estaFavorito = storageParseado.includes(this.props.peliculas.id)

        if(estaFavorito){
          this.setState({favorito: true})
        }
      }
    }

    agregarAFavoritos(id){
      let storage = localStorage.getItem('favoritos')
      if(storage !== null){
        let parsedStorage = JSON.parse(storage)
        parsedStorage.push(id)
        let stringStorage = JSON.stringify(parsedStorage)
        localStorage.setItem('favoritos', stringStorage)
      } else {
        let primerID = [id]
        let stringStorage = JSON.stringify(primerID)
        localStorage.setItem('favoritos', stringStorage)
      }

      this.setState({
        favorito: true
      })
    }

    quitarDeFavoritos(id){
      const storage = localStorage.getItem('favoritos')
      const storageParseado = JSON.parse(storage)
      const filtrarStorage = storageParseado.filter((elm) => elm !== id )
      const storageStringificado = JSON.stringify(filtrarStorage)
      localStorage.setItem('favoritos', storageStringificado)

      this.setState({
        favorito: false
      })
    }

  render() {
    const { peliculas } = this.props;

    if (!peliculas) {
      return(
        <div className="loader"></div>
      )
    }

    const { id, title, poster_path, overview } = peliculas;

    return (
      <article className="info">
        <h3 className="tituloProd">{title}</h3>
        <img className="foto" src={ 'https://image.tmdb.org/t/p/w342' + poster_path} alt="foto" />
        {<button className="boton" onClick={() => this.clickViewDescription()}>{this.state.viewDescription ? "Ocultar descripcion": "Ver descripcion"}</button>}
        <p className={`description ${this.state.viewDescription ? "show" : "hide"}`}>{overview}</p>
        <button className="boton"><Link className="detalle"  to={`/Detail/id/${id}`}>Ir a detalle</Link></button>
        {
           this.state.favorito ?
           <button className="boton" onClick={()=> this.quitarDeFavoritos(id) }>Quitar de favoritos</button>
           :
           <button className="boton" onClick={() => this.agregarAFavoritos(id)}>Agregar a favoritos</button>
         }
      </article>
    );
  }
}

export default PeliculasInfo;