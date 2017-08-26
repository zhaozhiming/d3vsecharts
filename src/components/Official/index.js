import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OfficialSitePie from './components/OfficialPie';
import OfficialSiteBar from './components/OfficialBar';
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
      <div className="d3-official-site">
        <div className="d3-title">Official</div>
        <img src={titleBar} alt="" />
        <div className="d3-site-info">
          <OfficialSitePie
            selector="d3-official-total-view-pie"
            title="Total Views"
            data={totalView}
            color="#235ee9"
          />
          <OfficialSitePie
            selector="d3-official-total-ip-pie"
            title="Total Ips"
            data={totalIp}
            color="#235ee9"
          />
          <OfficialSitePie
            selector="d3-official-total-attack-pie"
            title="Attacks"
            data={totalAttack}
            color="#ed5700"
          />
          <OfficialSitePie
            selector="d3-official-today-attack-pie"
            title="Today Attacks"
            data={todayAttack}
            color="#ed5700"
          />
        </div>
        <h5 className="d3-sensitive-title">Area</h5>
        <div className="d3-sensitive-area">
          <OfficialSiteBar
            selector="d3-official-bar"
            data={sensitiveArea.name.map((x, i) => ({
              name: x,
              value: sensitiveArea.value[i],
            }))}
          />
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
