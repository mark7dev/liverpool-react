import React, { Component } from 'react';
import './styles/Header.css';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <a href='/'>
                    <img id="logo" src="https://assets.liverpool.com.mx/assets/web/logos/liverpool_logo.gif" alt="Liverpool"></img>
                </a>
            </div>
        );
    }
}

export default Header;