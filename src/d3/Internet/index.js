import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InternetPie from './components/InternetTotalIndexPie';
import titleBar from '../../images/left-bar.svg';
import './style.css';

class D3Internet extends Component {
  render() {
    const { index, highRiskSite, totalSite } = this.props.data;
    const totalData = [
      { value: index, name: 'rate' },
      { value: 100 - index, name: 'empty' },
    ];
    const highRiskData = [
      { value: highRiskSite, name: 'rate' },
      { value: totalSite - highRiskSite, name: 'empty' },
    ];
    return (
      <div className="d3-internet">
        <div className="d3-internet-title">Internet</div>
        <img src={titleBar} alt="" />
        <div className="d3-internet-content">
          <div className="d3-internet-content-total-state">
            <div className="d3-internet-content-index-count">
              <InternetPie
                title="Total"
                data={totalData}
                selector="d3-internet-total-index"
              />
            </div>
            <div className="d3-internet-content-high-risk">
              <InternetPie
                title="High Risk"
                data={highRiskData}
                selector="d3-internet-high-risk"
                color="#ed5700"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

D3Internet.propTypes = {
  data: PropTypes.object.isRequired,
};

D3Internet.defaultProps = {
  data: {
    index: 0,
    highRiskSite: 1,
    totalSite: 10,
  },
};

export default D3Internet;
