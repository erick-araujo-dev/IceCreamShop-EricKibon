import React from "react";
import {Link} from "react-router-dom"
import logo from "../../assets/images/logo.png"
import './style.css'

const Header = () =>{
    return(
        <header>
            <div className="limit-width header-logo-nav">
                <Link to="/"><img className="logo-header" src={logo} alt="Logo" /></Link>
                <nav>
                    <Link className="link-header" to="/">Home</Link>
                    <Link className="link-header" to="/Sabores">Sabores</Link>
                    <Link className="link-header" to="/Sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;