import React, { Component } from 'react';
import './styles/SearchHistory.css';
import { connect } from 'react-redux';
import { showProducts } from '../actions/productsActions';

class SearchHistory extends Component {

    constructor() {
        super();
        this.state = {
            listItems: JSON.parse(localStorage.getItem('items')),
            itemSearched: '',
        }
    }


    onChangeItem = e => {
        console.log(e.target.value);
        this.setState({itemSearched: e.target.value})
    }

    searchItem = () => {
        this.props.showProducts(this.state.itemSearched)
    }

    addItem = () => {
        let item = this.state.itemSearched;
        if(localStorage.getItem('items') == null) {
            let items = [];
            items.push(item);
            localStorage.setItem('items', JSON.stringify(items));
        } else {
            let items = JSON.parse(localStorage.getItem('items'));
            items.push(item);
            localStorage.setItem('items', JSON.stringify(items));
        }
        this.setState({
            listItems: JSON.parse(localStorage.getItem('items'))
        })
    }

    searchListItem = (e) => {
        let itemForSearch = e.target.getAttribute('data-name');
        this.props.showProducts(itemForSearch)
    }

    deleteItem = (e) => {
        let index = e.target.getAttribute('data-key');
        let newListItems = JSON.parse(localStorage.getItem('items'));
        newListItems.splice(index, 1);
        this.setState({
            listItems: newListItems
        });
        localStorage.setItem('items', JSON.stringify(newListItems));
    }

    deleteListItems = () => {
        this.setState({listItems: []})
        localStorage.removeItem('items');
    }


    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <div className="searchHistory">
                <div className="search__container">
                    {/* <input id="search__input" type="text" placeholder="¿Qué estas buscando?" onChange={this.onChangeItem} ref="item"/> */}
                    <input id="search__input" type="text" placeholder="¿Qué estas buscando?" onChange={this.onChangeItem}/>
                    <button onClick={this.searchItem} disabled={!this.state.itemSearched}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                    {/* <button onClick={this.addItemSearched}>Agregar a historial</button> */}
                    <button onClick={this.addItem} name="addBtn" disabled={!this.state.itemSearched}>Agregar a historial</button>
                </div>
                
                <h3>Mis búsquedas</h3>
                <div className="itemsSearched__container">
                    {
                        this.state.listItems == null ? "" :
                        (
                            this.state.listItems.map((item, index ) => {
                            return (
                                <div key={index} className="itemSearched__container">
                                    <span id="itemSearched" data-key={index}>{item}</span>
                                    <div className="itemSearched__btns__container">
                                        <button className="itemSeachedBtn" onClick={this.searchListItem} data-key={index} data-name={item}>
                                            <i className="fa fa-search" aria-hidden="true" data-key={index} data-name={item}></i>
                                        </button>
                                        <button className="itemSeachedBtn" onClick={this.deleteItem} data-key={index}>
                                            <i className="fa fa-trash" aria-hidden="true" data-key={index}></i>
                                        </button>
                                    </div>
                                </div>
                            )
                            })
                        )
                    }
                    <button id="deleteBtn" onClick={this.deleteListItems}>
                        Borrar historial <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null, { showProducts }) (SearchHistory);