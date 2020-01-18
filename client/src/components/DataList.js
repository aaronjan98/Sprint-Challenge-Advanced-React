import React, { Component } from 'react';
import Data from '../data/data';

class DataList extends Component {

  render (){
    return (
      <div className="DataList" data-testid="datalist" >
        { Data.data.map((individual, index) => {
            return (
              <div className="DataList" data-testid="datalist-items" key={index}>
                <div className="DataInfo">
                    <h4>{individual.name}</h4>
                    <p>Country: {individual.country}</p>
                    <p>Searches: {individual.searches}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default DataList;
