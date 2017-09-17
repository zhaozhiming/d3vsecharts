import PropTypes from 'prop-types';
import * as d3 from 'd3';
import D3blackbox from '../../../../components/D3blackbox';
import './style.css';

const SynthesizeLine = D3blackbox(function() {
  const { selector, data } = this.props;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const node = d3.select(`.${selector}`);
  const width = node.node().offsetWidth - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;
  const x = d3
    .scaleTime()
    .rangeRound([0, width])
    .domain(d3.extent(data, d => d.name));
  const y = d3
    .scaleLinear()
    .rangeRound([height, 0])
    .domain([0, d3.max(data, d => d.value + 200)]);
  const g = node
    .append('svg')
    .attr('width', width + 12)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(10, ${margin.top})`);

  g
    .append('g')
    .attr('class', 'd3-synthesize-x-axis')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(x).ticks(5).tickSize(-height).tickFormat(''));

  g
    .append('g')
    .attr('class', 'd3-synthesize-y-axis')
    .call(d3.axisLeft(y).ticks(5).tickSize(-width).tickFormat(''));

  const line = d3.line().x(d => x(d.name)).y(d => y(d.value));
  const path = g
    .append('path')
    .datum(data)
    .attr('stroke-dashoffset', 0)
    .attr('fill', 'none')
    .attr('stroke', '#ed5700')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.8)
    .attr('d', line);
  const totalLength = path.node().getTotalLength();
  path
    .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
    .attr('stroke-dashoffset', totalLength)
    .transition()
    .duration(1000)
    .ease(d3.easeLinear)
    .attr('stroke-dashoffset', 0);

  g
    .selectAll('dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('r', 0)
    .attr('fill', '#ed5700')
    .attr('cx', d => x(d.name))
    .attr('cy', d => y(d.value))
    .transition()
    .duration(1000)
    .ease(d3.easeLinear)
    .attr('r', 3.5);
});

SynthesizeLine.propTypes = {
  data: PropTypes.array.isRequired,
};

SynthesizeLine.defaultProps = {
  data: [],
};

export default SynthesizeLine;
