import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

export class NavBar extends Component{

    render() {
        // Navbar redireccionamiento
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <Link to="/carrito/"><h5>Ventas</h5></Link>
                    <ul className="right">
                        <li><Link to="/carrito/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        {this.props.totalElementos > 0 ? (
                            <li><h5>{this.props.totalElementos}</h5></li>
                        ) : (
                            <li><h5>0</h5></li>
                        )}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        totalElementos: state.totalElementos
    }
};

export default connect(mapStateToProps)(NavBar);
