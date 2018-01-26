
import React, { Component } from 'react';

import Child from "./child";
import Counter from "./Counter";

class Parent extends Component {
   
    render() {
        const children = [
            {
                name: "Luke",
              title: "New Hope",  
            },
            {
                name: "Leia",
              title: "Princess of Alderann",  
          },  
        ]
            .map((child, i) => (
                <li class key={'children-${this.props.name}-{i}'}>
                    <child name={child.name} title={child.title} />
              </li>
                    
      ));
    return (
      <div className="Parent">
            <h2>{this.props.name}</h2>  
            
            <h3>Children:</h3>
            <ul>
                <li><Child name="Luke" title="New Hope" /></li>
                <li><Child name="Leia" title="Princess of Alderaan" /></li>
        
            </ul>

            <h3>Enemies Defeated:</h3>
            <Counter />
      </div>
    );
  }
}

export default Parent;