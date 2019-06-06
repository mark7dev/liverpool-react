import React, { Component } from 'react';
import './styles/Products.css';
import CardItem from './CardItem';
import { connect } from 'react-redux';
import { showProducts } from '../actions/productsActions';

class Products extends Component {

    render() {
        console.log(this.props)
        const { products } = this.props;
        return (
            <div className="products">

            {
                products.length === 0 ? "" :
                (
                    <div>
                        <h1>Total de artículos {this.props.products.length}</h1>
                        <div className="cardsItem__container">
                        
                            {
                                products.map((product, id) => (
                                    <CardItem 
                                        key={id}
                                        info={product}
                                    />
                                ))
                            }

                        </div>
                    </div>
                )  
            }
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products
})

export default connect(mapStateToProps, { showProducts }) (Products);