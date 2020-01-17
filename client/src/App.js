import React, { Component } from 'react';
import NavBar from './components/NavBar';
import DataList from './components/DataList';
import './App.css';

class App extends Component {

  render (){
    return (
      <div className="App">
        <NavBar />
        <DataList />
      </div>
    );
  }
}

export default App;
