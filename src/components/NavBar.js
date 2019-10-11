import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class NavBar extends Component{
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <Link to="/"><h5>Ventas</h5></Link>
                    <ul className="right">
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        <li><h5>0</h5></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;