import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InternetTotalIndexPie from './components/InternetTotalIndexPie';
import InternetHighRiskPie from './components/InternetHighRiskPie';
import titleBar from '../../images/left-bar.svg';
import './style.css';

class EchartInternet extends Component {
  render() {
    const {
      index,
      highRiskSite,
      totalSite,
    } = this.props.data;
    return (
      <div className="echarts-internet">
        <div className="echarts-internet-title">Internet</div>
        <img src={titleBar} alt="" />
        <div className="echarts-internet-content">
          <div className="echarts-internet-content-total-state">
            <div className="echarts-internet-content-index-count">
              <InternetTotalIndexPie data={{ rate: index }} />
            </div>
            <div className="echarts-internet-content-high-risk">
              <InternetHighRiskPie data={{ highRiskSite, totalSite }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EchartInternet.propTypes = {
  data: PropTypes.object.isRequired,
};

EchartInternet.defaultProps = {
  data: {
    index: 0,
    highRiskSite: 1,
    totalSite: 10,
  },
};

export default EchartInternet;
