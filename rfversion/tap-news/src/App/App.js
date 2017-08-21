import React, { Component } from 'react';
import logo from '../assets/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      	<img className='logo' src={logo} alt='tap-news'/>
        <div className='container'>Hello Onews Project!</div>
      </div>
    );
  }
}

export default App;
