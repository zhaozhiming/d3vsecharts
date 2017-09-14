import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts';

const option = data => ({
  color: ['#ed5700'],
  tooltip: {
    trigger: 'axis',
    formatter: params => {
      const { name, value } = params[0];
      return `${name}:${value[1]}`;
    },
  },
  grid: {
    top: '5%',
    left: 10,
    right:10,
    bottom: '5%',
  },
  xAxis: {
    show: true,
    type: 'time',
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: '#235ee9',
      },
    },
    axisPointer: {
      show: true,
    },
    splitLine: {
      lineStyle: {
        color: ['#0e2256'],
        width: 3,
      },
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: '#235ee9',
      },
    },
    splitLine: {
      lineStyle: {
        color: ['#0e2256'],
      },
    },
  },
  series: [
    {
      type: 'line',
      symbol: 'circle',
      symbolSize: 6,
      data,
    },
  ],
});

export default class SynthesizeLine extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  static defaultProps = {
    data: [],
  };

  render() {
    return (
      <ReactEchartsCore option={option(this.props.data)} echarts={echarts} />
    );
  }
}
