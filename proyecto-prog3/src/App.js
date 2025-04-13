import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos"
import PeliculasEnCartel from "./pages/En-Cartel";
import PeliculasMasValor from "./pages/Mejor-Valoracion";
import Detalle from "./pages/Detalle";
import SearchResults from "./pages/Search-Results";
import NotFound from "./pages/Not-Found";


function App() {
  return (
   <>
   <Header />
   <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/favorites" component={Favoritos}/>
    <Route path="/Top-Rated" component={PeliculasMasValor}/>
    <Route path="/Now-Playing" component={PeliculasEnCartel}/>
    <Route path="/detail/id/:id" component={Detalle}/>
    <Route path="/search" component={SearchResults} />
    <Route component={NotFound} />
   </Switch>

   <Footer />
   </>
  );
}

export default App;
