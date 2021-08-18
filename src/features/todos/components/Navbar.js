import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../styles/images/logo.png'
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="nav-wrapper blue lighten-2 ">
            <div className="container black-text">
                <a href='#/' className="brand-logo center"><img src={logo} alt="To do List" className="logo hoverable"/> </a>
                <ul className="right">
                    <li><Link to="/"><p>TO-DO LIST</p></Link></li>
                    <li><Link to="/done"><p>FINISHED TO-DO</p></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
