import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OfficialBar from './components/OfficialBar';
import OfficialPie from './components/OfficialPie';
import titleBar from '../../images/left-bar.svg';
import './style.css';

class OfficialSite extends Component {
  render() {
    const {
      totalView,
      totalIp,
      totalAttack,
      todayAttack,
      sensitiveArea,
    } = this.props.data;

    return (
      <div className="echarts-official-site">
        <div className="echarts-title">Official</div>
        <img src={titleBar} alt="" />
        <div className="echarts-site-info">
          <OfficialPie title="Total Views" data={totalView} color="#235ee9" />
          <OfficialPie title="Total IPs" data={totalIp} color="#235ee9" />
          <OfficialPie title="Attacks" data={totalAttack} color="#ed5700" />
          <OfficialPie title="Today Attacks" data={todayAttack} color="#ed5700" />
        </div>
        <h5 className="echarts-sensitive-title">Area</h5>
        <div className="echarts-sensitive-area">
          <OfficialBar data={sensitiveArea} />
        </div>
      </div>
    );
  }
}

OfficialSite.propTypes = {
  data: PropTypes.object.isRequired,
};

OfficialSite.defaultProps = {
  data: {
    totalView: [],
    totalIp: [],
    totalAttack: [],
    todayAttack: [],
    sensitiveArea: {
      name: [],
      value: [],
    },
  },
};

export default OfficialSite;
