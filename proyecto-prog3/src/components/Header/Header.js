import React from "react";
import "./Header.css"
import NavBar from "../NavBar/NavBar";

function Header() {
 
  return (
    <React.Fragment>
    <div className="logo"><img className="tm" src="/img/logo.jpg" alt="logo" /></div>
    <nav>
        <NavBar />
    </nav>
    </React.Fragment>
    
    
  );
}

export default Header