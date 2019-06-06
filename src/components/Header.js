import React, { Component } from 'react';
import './styles/Header.css';
import { connect } from 'react-redux';
import { showProducts } from '../actions/productsActions';

class Header extends Component {

    constructor() {
        super()
        this.state = {
            itemSearched: ''
        }
    }

    searchItem = () => {
        this.props.showProducts(this.state.itemSearched)
        // (this.props.showProducts(this.state.itemSearched) ? 
        //     this.props.showProducts(this.state.itemSearched) : 
        //     console.log('error!!')
        // );
    }

    onChangeItem = e => {
        console.log(e.target.value);
        this.setState({itemSearched: e.target.value}) 
    }

    render() {
        console.log(this.props);
        return (
            <div className="header">
                <img id="logo" src="https://assets.liverpool.com.mx/assets/web/logos/liverpool_logo.gif" alt="Liverpool"></img>
                <div className="search__container">
                    <input id="search__input" type="text" placeholder="¿Qué estas buscando?" onChange={this.onChangeItem}/>
                    <button onClick={this.searchItem}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                    <button>Agregar a historial</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products
})

export default connect(mapStateToProps, { showProducts }) (Header);