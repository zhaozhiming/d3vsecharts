import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EchartsSynthesize from '../../echarts/Synthesize';
import D3Synthesize from '../../d3/Synthesize';
import './style.css';

const data = {
  last24HoursAlertInfo: [
    { name: '2017-01-11 00', value: ['2017-01-11 00', 100] },
    { name: '2017-01-11 01', value: ['2017-01-11 01', 200] },
    { name: '2017-01-11 02', value: ['2017-01-11 02', 150] },
    { name: '2017-01-11 03', value: ['2017-01-11 03', 110] },
    { name: '2017-01-11 04', value: ['2017-01-11 04', 400] },
    { name: '2017-01-11 05', value: ['2017-01-11 05', 220] },
    { name: '2017-01-11 06', value: ['2017-01-11 06', 810] },
    { name: '2017-01-11 07', value: ['2017-01-11 07', 400] },
    { name: '2017-01-11 08', value: ['2017-01-11 08', 220] },
    { name: '2017-01-11 09', value: ['2017-01-11 09', 210] },
    { name: '2017-01-11 10', value: ['2017-01-11 10', 230] },
    { name: '2017-01-11 11', value: ['2017-01-11 11', 240] },
    { name: '2017-01-11 12', value: ['2017-01-11 12', 100] },
    { name: '2017-01-11 13', value: ['2017-01-11 13', 200] },
    { name: '2017-01-11 14', value: ['2017-01-11 14', 400] },
    { name: '2017-01-11 15', value: ['2017-01-11 15', 220] },
    { name: '2017-01-11 16', value: ['2017-01-11 16', 810] },
    { name: '2017-01-11 17', value: ['2017-01-11 17', 400] },
    { name: '2017-01-11 18', value: ['2017-01-11 18', 220] },
    { name: '2017-01-11 19', value: ['2017-01-11 19', 210] },
    { name: '2017-01-11 20', value: ['2017-01-11 20', 230] },
    { name: '2017-01-11 21', value: ['2017-01-11 21', 240] },
    { name: '2017-01-11 22', value: ['2017-01-11 22', 240] },
    { name: '2017-01-11 23', value: ['2017-01-11 23', 240] },
  ],
};

class Synthesize extends Component {
  render() {
    return (
      <div className="synthesize">
        <button className="synthesize-header" onClick={this.props.goback}>
          back
        </button>
        <div className="synthesize-container">
          <div className="synthesize-echarts">
            <h1>Echarts</h1>
            <EchartsSynthesize data={data} />
          </div>
          <div className="synthesize-d3">
            <h1>D3</h1>
            <D3Synthesize data={data} />
          </div>
        </div>
      </div>
    );
  }
}

Synthesize.propTypes = {
  goback: PropTypes.func.isRequired,
};

export default Synthesize;
