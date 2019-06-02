
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import SearchHistory from './components/SearchHistory';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <SearchHistory />
      </Provider>
    );
  }
}

export default App;
