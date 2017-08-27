import React, { Component } from 'react';
import D3Official from './d3/Official';
import EchartsOfficial from './echarts/Official';
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
      <div className="container">
        <div className="echarts">
          <h1>Echarts</h1>
          <EchartsOfficial data={data} />
        </div>
        <div className="d3">
          <h1>D3</h1>
          <D3Official data={data} />
        </div>
      </div>
    );
  }
}

export default App;
