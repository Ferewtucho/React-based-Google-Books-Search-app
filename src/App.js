import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import Header from "./components/Header/Header";
import Books from "./components/Books/Books";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
      </div>
    );
  }
}

export default App;
