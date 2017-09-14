import React, { Component } from 'react';
import PropTypes from 'prop-types';
import titleBar from '../../images/left-bar.svg';
import SynthesizeLine from './components/SynthesizeLine';
import './style.css';

class Synthesize extends Component {
  render() {
    const { last24HoursAlertInfo } = this.props.data;

    return (
      <div className="echarts-synthesize">
        <div className="echarts-synthesize-title">Synthesize</div>
        <img src={titleBar} alt="" />
        <SynthesizeLine data={last24HoursAlertInfo} />
      </div>
    );
  }
}

Synthesize.propTypes = {
  data: PropTypes.object.isRequired,
};

Synthesize.defaultProps = {
  data: {
    last24HoursAlertInfo: [],
  },
};

export default Synthesize;
