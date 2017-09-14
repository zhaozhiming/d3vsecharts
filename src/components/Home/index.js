import React, { Component } from 'react';
import Official from '../Official';
import Internet from '../Internet';
import Synthesize from '../Synthesize';
import './style.css';

export default class Home extends Component {
  state = {
    charts: 'init',
  };

  goback = () => {
    this.setState({ charts: 'init' });
  }

  render() {
    switch (this.state.charts) {
      case 'official':
        return <Official goback={this.goback} />;
      case 'internet':
        return <Internet goback={this.goback} />;
      case 'synthesize':
        return <Synthesize goback={this.goback} />;
      default:
        return (
          <div className="home">
            <ul className="home-buttons">
              <li className="home-button">
                <button
                  className="home-button-item"
                  onClick={() => this.setState({ charts: 'official' })}
                >
                  Official
                </button>
              </li>
              <li className="home-button">
                <button
                  className="home-button-item"
                  onClick={() => this.setState({ charts: 'internet' })}
                >
                  Internet
                </button>
              </li>
              <li className="home-button">
                <button
                  className="home-button-item"
                  onClick={() => this.setState({ charts: 'synthesize' })}
                >
                  Synthesize
                </button>
              </li>
            </ul>
          </div>
        );
    }
  }
}
