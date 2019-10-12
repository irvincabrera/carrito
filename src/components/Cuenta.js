import React, {Component} from 'react';
import {connect} from "react-redux";
import {addShipping, subShipping} from "../actions";

export class Cuenta extends Component {

    constructor(props) {
        super(props);
        this.shipping= React.createRef();
    }

    componentWillUnmount() {
        if (this.shipping.checked) {
            this.props.substractShipping(150)
        }
    }

    // Suma o resta de cantidad de envio
    handleChecked = (e) => {
        const precioEnvio = 150;
        if(e.target.checked) {
            this.props.addShipping(precioEnvio);
        } else {
            this.props.substractShipping(precioEnvio);
        }
    };

    render() {
        // visualizacion de la parte de cantidad a pagar
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref={this.shipping} onChange={this.handleChecked}/>
                            <span>Envio($150)</span>
                        </label>
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
