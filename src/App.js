import React, { Component } from 'react';
import D3Official from './components/Official';
import logo from './logo.svg';
import './App.css';

const data = {
  totalView: [
    { name: 'Core Site', value: 24688 },
    { name: 'Other', value: 98745 },
  ],
  totalIp: [{ name: 'Core Site', value: 214 }, { name: 'Other', value: 1213 }],
  totalAttack: [
    { name: 'Core Site', value: 195 },
    { name: 'Other', value: 1760 },
  ],
  todayAttack: [
    { name: 'Core Site', value: 31 },
    { name: 'Other', value: 281 },
  ],
  sensitiveArea: {
    name: [
      'Turkey',
      'Syria',
      'Iran',
      'Iraq',
      'Afghanistan',
      'Saudi Arabia',
      'Nigeria',
    ],
    value: [40, 4, 27, 19, 32, 15, 9],
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="d3">
          <D3Official data={data} />
        </div>
      </div>
    );
  }
}

export default App;
