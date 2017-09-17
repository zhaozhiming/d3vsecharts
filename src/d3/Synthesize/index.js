import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import titleBar from '../../images/left-bar.svg';
import SynthesizeLine from './components/SynthesizeLine';
import './style.css';

class Synthesize extends Component {
  render() {
    const { last24HoursAlertInfo } = this.props.data;
    const linedata = last24HoursAlertInfo.map(x => ({
      name: d3.timeParse('%Y-%m-%d %H')(x.name),
      value: x.value[1],
    }));
    return (
      <div className="d3-synthesize">
        <div className="d3-synthesize-title">Synthesize</div>
        <img src={titleBar} alt="" />
        <SynthesizeLine selector="d3-synthesize-line" data={linedata} />
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
