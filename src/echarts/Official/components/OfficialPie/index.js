import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts';

const option = (title, data, color) => ({
  color: ['#515c61', color],
  title: {
    text: `${data.map(x => x.value).reduce((a, b) => a + b, 0)}`,
    top: 'middle',
    left: 'center',
    textStyle: {
      color: '#ffffff',
      fontSize: 14,
    },
  },
  tooltip: {
    position: [10, 10],
  },
  series: [
    {
      type: 'pie',
      radius: ['60%', '75%'],
      clockwise: false,
      label: {
        normal: {
          show: false,
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      hoverAnimation: false,
      data,
    },
  ],
});

class OfficialSitePie extends Component {
  render() {
    const { title, data, color } = this.props;
    return (
      <div>
        <ReactEchartsCore
          option={option(title, data, color)}
          echarts={echarts}
        />
        <p>
          {title}
        </p>
      </div>
    );
  }
}

OfficialSitePie.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  color: PropTypes.string,
};

OfficialSitePie.defaultProps = {
  title: '',
  data: [],
  color: ['#515c61', '#235ee9'],
};

export default OfficialSitePie;
