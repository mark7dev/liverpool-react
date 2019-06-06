import React, { Component } from 'react';
import './styles/CardItem.css';

class CardItem extends Component {
    render() {
        console.log(this.props.info)
        const { productDisplayName, productPrice } = this.props.info;
        return (
            <div className="cardItem">
                <img className="img" src={this.props.info["sku.thumbnailImage"]} alt=""/>
                <p className="information">{productDisplayName}</p>
                <p className="information price">${productPrice}</p>
            </div>
        );
    }
}

export default CardItem;