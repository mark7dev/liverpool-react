import React, { Component } from 'react';
import './styles/Products.css';

class Products extends Component {
    render() {
        return (
            <div className="products">
                <div className="cardsItem__container">
                    <div className="cardItem">
                        <p className="information">Artículo</p>
                        <p className="information price">$Precio</p>
                    </div>
                    <div className="cardItem">
                        <p className="information">Artículo</p>
                        <p className="information price">$Precio</p>
                    </div>
                    <div className="cardItem">
                        <p className="information">Artículo</p>
                        <p className="information price">$Precio</p>
                    </div>
                    <div className="cardItem">
                        <p className="information">Artículo</p>
                        <p className="information price">$Precio</p>
                    </div>
                    <div className="cardItem">
                        <p className="information">Artículo</p>
                        <p className="information price">$Precio</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;