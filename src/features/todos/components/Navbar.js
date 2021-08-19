import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../../images/logo.png'
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="nav-wrapper blue lighten-2">
            <div className="container ">
                <a href='/' className="brand-logo center"><img src={logo} alt="To do List" className="logo hoverable animate__animated animate__tada animate__infinite animate__slower"/> </a>
                <ul className="right">
                    <li><Link to="/"><b className="black-text">TO-DO LIST</b></Link></li>
                    <li><Link to="/done"><b className="black-text">FINISHED TO-DO</b></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
