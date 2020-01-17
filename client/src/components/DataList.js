import React, { Component } from 'react';
import Data from '../data/data';

class DataList extends Component {

  render (){
    return (
      <div className="DataList">
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

export default DataList;
