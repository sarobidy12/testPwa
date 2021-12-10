import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    window.addEventListener('appinstalled', (evt) => {
      console.log('a2hs installed');
    })
  }

  render() {
    return (
      <h1>Hello word</h1>
    );
  }
}

export default App;
