import React, { Component } from 'react';
import Data from './data';
import './App.css';

class App extends Component {

  render (){
    return (
      <div className="App">
        { Data.data.map((individual, index) => {
            return (
              <div key={index}>
                <h4>{individual.name}</h4>
                <p>Country: {individual.country}</p>
                <p>Searches: {individual.searches}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
