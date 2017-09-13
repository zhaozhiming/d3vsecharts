import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts';

const option = data => {
  const { highRiskSite, totalSite } = data;
  const highRiskRate = highRiskSite / totalSite;
  const rate = Math.round(highRiskRate * 100);
  return {
    color: ['#ed5700', '#515c61', 'transparent'],
    series: [
      {
        name: 'progress',
        type: 'pie',
        radius: ['88%', '98%'],
        center: ['50%', '50%'],
        startAngle: 240,
        data: [
          { value: rate, name: 'rate' },
          { value: 100 - rate, name: 'empty' },
          { value: 20, name: 'nothing' },
        ],
        roseType: false,
        label: {
          normal: {
            show: false,
          },
        },
        silent: true,
      },
    ],

    graphic: [
      {
        type: 'text',
        left: 'center',
        top: '34%',
        z: 10,
        silent: true,
        style: {
          text: 'High Risk',
          textAlign: 'center',
          fill: '#feffff',
        },
      },
      {
        type: 'text',
        left: 'center',
        top: '50%',
        z: 10,
        silent: true,
        style: {
          text: `${highRiskSite}`,
          font: 'normal 32px digital-counter',
          textAlign: 'center',
          fill: '#feffff',
        },
      },
    ],
  };
};

export default class InternetHighRiskPie extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  static defaultProps = {
    data: {
      highRiskSite: 0,
      totalSite: 100,
    },
  };

  render() {
    return <ReactEchartsCore option={option(this.props.data)} echarts={echarts}/>;
  }
}
