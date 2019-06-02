import React, { Component } from 'react';
import './styles/SearchHistory.css';

class SearchHistory extends Component {
    render() {
        return (
            <div className="searchHistory">
                <h3>Mis búsquedas</h3>
                <div className="itemsSearched__container">
                    <div className="item__container">
                        <span>item 1</span>
                        <div className="itemSearched__btns__container">
                            <button className="itemSeachedBtn">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                            <button className="itemSeachedBtn">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div className="item__container">
                        <span>item 1</span>
                        <div className="itemSearched__btns__container">
                            <button className="itemSeachedBtn">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                            <button className="itemSeachedBtn">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div className="item__container">
                        <span>item 1</span>
                        <div className="itemSearched__btns__container">
                            <button className="itemSeachedBtn">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                            <button className="itemSeachedBtn">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <button id="deleteBtn">
                        Borrar historial <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchHistory;