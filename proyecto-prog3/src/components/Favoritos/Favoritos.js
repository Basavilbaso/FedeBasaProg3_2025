import React from "react";
import { Component } from "react";

class Favoritos extends Component{7
    constructor(props){
        super(props);
        this.state = {
            favorito: false
        }
    }

    componentDidMount(){
        const storage = localStorage.getItem(`favoritos`);
        if(storage !== null){
            let storageParseado = JSON.parse(storage);
            let estaFavorito = storageParseado.includes(this.props.id);
            if(estaFavorito){
                this.setState({favorito: true})
            }
        }
    }

    agregarAFavoritos(){
        const storage = localStorage.getItem(`favoritos`);
        if(storage !== null){
            let parsedStorage = JSON.parse(storage);
            parsedStorage.push(this.props.id);
            let stringStorage =JSON.stringify(parsedStorage);
            localStorage.setItem(`favoritos`, stringStorage);
        }else{
            let primerID = [this.props.id];
            let stringStorage = JSON.stringify(primerID);
            localStorage.setItem(`favoritos`, stringStorage);
        }
        this.setState({favorito: true})
    }

    quitarDeFavoritos(){
        const storage = localStorage.getItem(`favoritos`);
        const storageParseado = JSON.parse(storage);
        const filtrarStorage = storageParseado.filter((data) => data !== this.props.id);
        const storageStringificado = JSON.stringify(filtrarStorage);
        localStorage.setItem(`favoritos`, storageStringificado);
        this.setState({favorito: false});
        if(this.props.borrarDeFavoritos !== undefined){
            this.props.borrarDeFavoritos(this.props.id)
        }
    }

    render(){
        return(
            <button className="boton" onClick={() => !this.state.favorito ? this.agregarAFavoritos(): this.quitarDeFavoritos()}>
                {!this.state.favorito ? "Agregar a favoritos" : "Quitar de favoritos"}
            </button>
        )
    }
}
export default Favoritos;

