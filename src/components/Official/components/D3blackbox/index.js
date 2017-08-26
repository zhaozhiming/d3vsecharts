import React from 'react';

function D3blackbox(D3render) {
  return class Blackbox extends React.Component {
    componentDidMount() {
      D3render.call(this);
    }

    componentDidUpdate() {
      D3render.call(this);
    }

    render() {
      return <div className={this.props.selector} />;
    }
  };
}

export default D3blackbox;
