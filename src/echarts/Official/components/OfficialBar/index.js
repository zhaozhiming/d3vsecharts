import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts';

const option = data => ({
  color: ['#235ee9'],
  grid: {
    left: 0,
    right: 0,
    top: '10%',
    bottom: '4%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: data.name,
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: '#98a8b4',
          fontSize: 13,
        },
      },
      axisLine: {
        lineStyle: {
          color: '#235ee9',
        },
      },
    },
  ],
  yAxis: { show: false },
  series: [
    {
      type: 'bar',
      barWidth: '11px',
      label: {
        normal: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#98a8b4',
          },
        },
      },
      data: data.value,
    },
  ],
});

class OfficialBar extends Component {
  render() {
    return (
      <ReactEchartsCore option={option(this.props.data)} echarts={echarts} />
    );
  }
}

OfficialBar.propTypes = {
  data: PropTypes.object.isRequired,
};

OfficialBar.defaultProps = {
  data: {
    name: [],
    value: [],
  },
};

export default OfficialBar;
