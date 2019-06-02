
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import SearchHistory from './components/SearchHistory';
import Products from './components/Products';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Header />
          <div className="body">
            <SearchHistory />
            <Products />
          </div>
      </Provider>
    );
  }
}

export default App;
