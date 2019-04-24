import React, { Component } from 'react' 
import logo from '../images/noom_logo.png'

class TopBar extends Component {
  render() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span
            className="App-link"
            href="#"
            >
            Welcome Nancy!
            </span>
        </header>
    );
  }
}

export default TopBar;
