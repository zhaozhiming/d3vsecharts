import PropTypes from 'prop-types';
import * as d3 from 'd3';
import D3blackbox from '../D3blackbox';
import './style.css';

const DEFAULT_COLOR = '#515c61';

const OfficialSitePie = D3blackbox(function() {
  const { selector, color, data, title } = this.props;
  const pieValue = `${data.map(x => x.value).reduce((a, b) => a + b, 0)}`;
  const node = d3.select(`.${selector}`);
  const width = node.node().offsetWidth;
  const height = 300;
  const radius = Math.min(width, height) / 2;
  const pieColor = d3
    .scaleOrdinal()
    .domain(data.map(x => x.value))
    .range([DEFAULT_COLOR, color]);
  const arc = d3.arc().outerRadius(radius - 20).innerRadius(radius - 30);
  const pie = d3.pie().sort(null).value(d => d.value);
  const tooltip = node.append('div').style('display', 'none').attr('class', 'tip');
  const tipContainer = tooltip.append('div').attr('class', 'tip-container');
  tipContainer.append('div').attr('class', 'tip-icon');
  tipContainer.append('div').attr('class', 'tip-content');
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
    .attr('class', 'arc');
  const path = g
    .append('path')
    .attr('d', arc)
    .style('fill', d => pieColor(d.data.value))
    .style('stroke', d => pieColor(d.data.value))
    .style('cursor', 'pointer');
  path.on('mouseover', (d) => {
    const content = `${d.data.name}: ${d.data.value}`;
    tooltip.select('.tip-icon').style('background-color', pieColor(d.data.value));
    tooltip.select('.tip-content').html(content);
    tooltip.style('display', 'block');
  });
  path.on('mouseout', () => tooltip.style('display', 'none'));
  svg
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '5px')
    .text(pieValue)
    .attr('class', 'arc-text');
  node.append('p').text(title).attr('class', 'arc-label');
});

OfficialSitePie.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  color: PropTypes.string,
};

OfficialSitePie.defaultProps = {
  title: '',
  data: [],
  color: '#235ee9',
};

export default OfficialSitePie;
