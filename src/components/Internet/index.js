import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EchartInternet from '../../echarts/Internet';
import D3Internet from '../../d3/Internet';
import './style.css';

const data = {
  index: 86.1,
  highRiskSite: 1000,
  totalSite: 1200,
};

class Internet extends Component {
  render() {
    return (
      <div className="internet">
        <button className="internet-header" onClick={this.props.goback}>
          back
        </button>
        <div className="internet-container">
          <div className="internet-echarts">
            <h1>Echarts</h1>
            <EchartInternet data={data} />
          </div>
          <div className="internet-d3">
            <h1>D3</h1>
            <D3Internet data={data} />
          </div>
        </div>
      </div>
    );
  }
}

Internet.propTypes = {
  goback: PropTypes.func.isRequired,
};

export default Internet;
