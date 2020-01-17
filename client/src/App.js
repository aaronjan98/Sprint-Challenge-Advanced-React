import React, { Component } from 'react';
import DataList from './components/DataList';
import './App.css';

class App extends Component {

  render (){
    return (
      <div className="App">
        <h1>Women's World Cup</h1>
        <DataList />
      </div>
    );
  }
}

export default App;
