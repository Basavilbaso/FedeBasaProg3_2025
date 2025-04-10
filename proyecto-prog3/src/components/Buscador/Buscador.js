import React from "react";
import { Component } from "react";
import "./Buscador.css";

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    handleCancelSubmit(e) {
        e.preventDefault();
    }

    handleFormChange(e) {
        this.setState({ search: e.target.value })
    }

    controlarSubmit() {
        if (this.state.search !== '') {
            this.props.history.push(`/search`, { search: this.state.search })
        }
    }

    render() {
        return (
            <section>
                <div>
                    <form onSubmit={(e) => this.handleCancelSubmit(e)}>
                        <input onChange={(event) => this.handleFormChange(event)} name="search" value={this.state.search} />
                        <button type="submit" onClick={() => this.controlarSubmit()}>Search</button>
                    </form>
                </div>
            </section>
        )
    }
}
export default Buscador;