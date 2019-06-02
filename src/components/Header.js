import React, { Component } from 'react';
import './styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img id="logo" src="https://assets.liverpool.com.mx/assets/web/logos/liverpool_logo.gif" alt="Liverpool"></img>
                <div className="search__container">
                    <input id="search__input" type="text" placeholder="¿Qué está buscando?"></input>
                    <button>Agregar a historial 
                    <i id="iconAdd" class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;