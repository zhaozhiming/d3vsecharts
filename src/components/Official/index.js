import React, { Component } from 'react';
import PropTypes from 'prop-types';
import D3Official from '../../d3/Official';
import EchartsOfficial from '../../echarts/Official';
import './style.css';

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

class Official extends Component {
  render() {
    return (
      <div className="official">
        <button className="official-header" onClick={this.props.goback}>
          back
        </button>
        <div className="official-container">
          <div className="official-echarts">
            <h1>Echarts</h1>
            <EchartsOfficial data={data} />
          </div>
          <div className="official-d3">
            <h1>D3</h1>
            <D3Official data={data} />
          </div>
        </div>
      </div>
    );
  }
}

Official.propTypes = {
  goback: PropTypes.func.isRequired,
};

export default Official;
