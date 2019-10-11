import React, {Component} from 'react';
import {connect} from "react-redux";
import {addShipping, subShipping} from "../actions";

export class Cuenta extends Component {

    componentWillUnmount() {
        if(this.refs.shipping.checked) {
            this.props.substractShipping(150)
        }
    }

    handleChecked = (e) => {
        const precioEnvio = 150;
        if(e.target.checked) {
            this.props.addShipping(precioEnvio);
        } else {
            this.props.substractShipping(precioEnvio);
        }
    };

    render() {
        console.log(this.props.total);

        const envio = this.props.total < 1500 ? (
            <label>
                <input type="checkbox" ref="shipping" onChange={this.handleChecked}/>
                <span>Envio($150)</span>
            </label>
        ) : (
            <label>
                <h6><b>Envío Gratis</b></h6>
            </label>
        );

        return(
            <div className="container">
                <div className="collection">
                    <label>En una compra mayor a $1500 el envío es gratis.</label>
                    <li className="collection-item">
                        {envio}
                    </li>
                    <li className="collection-item"><b>Total: ${this.props.total}</b></li>
                </div>
                <div className="checkout">
                    <button className="waves-effect waves-light btn">Comprar</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        addItems: state.addItems,
        total: state.total
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        addShipping: (precioEnvio) => {dispatch(addShipping(precioEnvio))},
        substractShipping: (precioEnvio) => {dispatch(subShipping(precioEnvio))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Cuenta);