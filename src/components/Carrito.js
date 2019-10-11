import React, {Component} from 'react'
import Cuenta from "./Cuenta";
import {Link} from "react-router-dom";
import {addQuantity, removeItem, subtractQuantity} from "../actions";
import {connect} from "react-redux";

export class Carrito extends Component {

    removerArticulo = (id)=>{
        this.props.removeItem(id);
    };

    sumarCantidad = (id)=>{
        this.props.addQuantity(id);
    };

    restarCantidad = (id)=>{
        this.props.subtractQuantity(id);
    };

    render() {
        const articulosAgregados = this.props.items.length ? (
            this.props.items.map( item => {
                return (
                    <li className="collection-item avatar" key={item.uniqueID}>
                        <div className="item-img">
                            <img src={item.thumbnail} alt="Neceser Rose Gold Mimosa-2500001312181P" className="imgWidthProduct"/>
                        </div>
                        <div className="item-desc">
                            <span className="title">{item.name}</span>
                            <p>{item.shortDescription}</p>
                            <p><b>Precio: ${parseInt(item.Price[0].priceValue, 10)}</b></p>
                            <p>
                                <b>Cantidad: {item.cantidad}</b>
                            </p>
                            <div className="add-remove">
                                <Link to="/carrito/cart"><i className="material-icons" onClick={()=>{this.sumarCantidad(item.uniqueID)}}>arrow_drop_up</i></Link>
                                <Link to="/carrito/cart"><i className="material-icons" onClick={()=>{this.restarCantidad(item.uniqueID)}}>arrow_drop_down</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.removerArticulo(item.uniqueID)}}>Elimimar</button>
                        </div>
                    </li>
                )

            })
        ) : (
            <p>El carrito está vacio.</p>
        );

        return (
            <div className="container">
                <div className="cart">
                    <h5>Tu orden:</h5>
                    <ul className="collection">
                        {articulosAgregados}
                    </ul>
                    <Cuenta/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addItems,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Carrito);