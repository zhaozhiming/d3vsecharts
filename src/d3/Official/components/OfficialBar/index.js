import PropTypes from 'prop-types';
import * as d3 from 'd3';
import D3blackbox from '../D3blackbox';
import './style.css';

const OfficialSiteBar = D3blackbox(function() {
  const { selector, data } = this.props;
  const margin = { top: 20, right: 0, bottom: 30, left: 20 };
  const node = d3.select(`.${selector}`);
  const width = node.node().offsetWidth - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;
  const x = d3
    .scaleBand()
    .rangeRound([0, width - margin.left - margin.right])
    .padding(0.1)
    .domain(data.map(x => x.name));
  const y = d3
    .scaleLinear()
    .rangeRound([height, 0])
    .domain([0, d3.max(data, d => d.value)]);
  const svg = node
    .append('svg')
    .attr('width', width)
    .attr('height', height + 40)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  svg
    .append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(-10,${height})`)
    .call(d3.axisBottom(x));

  const bar = svg.selectAll('.bar').data(data).enter();
  bar
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => x(d.name) + x.bandwidth() / 2 - 15)
    .attr('y', d => height)
    .attr('width', 10)
    .attr('height', 0)
    .transition()
    .duration(500)
    .ease(d3.easeLinear)
    .attr('height', d => height - y(d.value))
    .attr('y', d => y(d.value));

  bar
    .append('text')
    .attr('class', 'bar-label')
    .text(d => d.value)
    .attr('x', d => x(d.name) + x.bandwidth() / 2 - 15)
    .attr('y', d => height)
    .attr('dx', '5px')
    .attr('dy', '-5px')
    .transition()
    .duration(500)
    .ease(d3.easeLinear)
    .attr('y', d => y(d.value));
});

OfficialSiteBar.propTypes = {
  data: PropTypes.array.isRequired,
};

OfficialSiteBar.defaultProps = {
  data: [],
};

export default OfficialSiteBar;
