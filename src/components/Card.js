import React, { Component } from 'react';

const style1 = { height: '35.77px' };
const style2 = { fontSize: '10px', color: 'rgb(234, 34, 35)', fontWeight: 'bold', height: '22px'};

export class Card extends Component {

    render() {
        let item = this.props.item;
        return (
            <div className="col-12 col-sm-6 col-lg-3 col-xl-3 product-card--container">
                <div className="product-card pt-1">
                    <div className="row">
                        <div className="col-6 col-sm-12">
                            <div className="image-container">
                                <img src={item.thumbnail} alt="Neceser Rose Gold Mimosa-2500001312181P" className="imgWidthProduct"></img>
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <div className="product-card--detailsContainer">
                                <h2 className="product-card--name">{item.name}</h2>
                                <div style={style1}></div>
                                {item.Price ? (
                                    <div>
                                        <p className="product-card--listPrice"><span className="helvetica">$ {item.Price[0].priceValue}</span></p>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="product-card--offerPrice"><span className="helvetica">No Disponible por el momento</span></p>
                                    </div>
                                )}
                                <div style={style2}></div>
                                <div className="product-card--footer col-12">
                                    <div className="row">
                                        <div className="col-6 col-sm-12">
                                            {item.Price ? (
                                                <button id="2500001312181P" className="buttonGenericoRojo">
                                                    <span>Comprar</span>
                                                </button>
                                            ) : (
                                                <button id="2500001312181P" className="buttonGenericoRojo" disabled={true}>
                                                    <span>Comprar</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;