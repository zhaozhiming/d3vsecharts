import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OfficialBar from './components/OfficialBar';
import OfficialPie from './components/OfficialPie';
import titleBar from '../../images/left-bar.svg';
import './style.css';

class Official extends Component {
  render() {
    const {
      totalView,
      totalIp,
      totalAttack,
      todayAttack,
      sensitiveArea,
    } = this.props.data;

    return (
      <div className="echarts-official">
        <div className="echarts-official-title">Official</div>
        <img src={titleBar} alt="" />
        <div className="echarts-official-info">
          <OfficialPie title="Total Views" data={totalView} color="#235ee9" />
          <OfficialPie title="Total IPs" data={totalIp} color="#235ee9" />
          <OfficialPie title="Attacks" data={totalAttack} color="#ed5700" />
          <OfficialPie title="Today Attacks" data={todayAttack} color="#ed5700" />
        </div>
        <h5 className="echarts-official-sensitive-title">Area</h5>
        <div className="echarts-official-sensitive-area">
          <OfficialBar data={sensitiveArea} />
        </div>
      </div>
    );
  }
}

Official.propTypes = {
  data: PropTypes.object.isRequired,
};

Official.defaultProps = {
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

export default Official;
