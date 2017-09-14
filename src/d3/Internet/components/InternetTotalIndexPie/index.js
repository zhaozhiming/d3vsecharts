import PropTypes from 'prop-types';
import * as d3 from 'd3';
import D3blackbox from '../../../../components/D3blackbox';
import './style.css';

const DEFAULT_COLOR = '#515c61';

const InternetTotalIndexPie = D3blackbox(function() {
  const { selector, color, data, title } = this.props;
  const pieValue = `${data.find(x => x.name === 'rate').value}`;
  const node = d3.select(`.${selector}`);
  const width = node.node().offsetWidth;
  const height = 300;
  const radius = Math.min(width, height) / 2;
  const pieColor = d3
    .scaleOrdinal()
    .domain(data.map(x => x.value))
    .range([color, DEFAULT_COLOR]);
  const arc = d3.arc().outerRadius(radius).innerRadius(radius - 15);
  const pie = d3
    .pie()
    .sort(null)
    .value(d => d.value)
    .startAngle(-150 * (Math.PI / 180))
    .endAngle(150 * (Math.PI / 180));
  const svg = node
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

  const g = svg
    .selectAll('.arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', `d3-internet-arc`);
  const path = g
    .append('path')
    .attr('d', arc)
    .style('fill', d => pieColor(d.data.value))
    .style('stroke', d => pieColor(d.data.value));
  svg
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '5px')
    .text(pieValue)
    .attr('class', 'd3-internet-arc-text');
  node.append('p').text(title).attr('class', 'd3-internet-arc-label');
  const attrTween = b => {
    b.innerRadius = 0;
    const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, b);
    return t => arc(interpolate(t));
  };
  path.transition().duration(750).attrTween('d', attrTween);
});

InternetTotalIndexPie.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  color: PropTypes.string,
};

InternetTotalIndexPie.defaultProps = {
  title: '',
  data: [],
  color: '#235ee9',
};

export default InternetTotalIndexPie;
