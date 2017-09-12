import React, { Component } from 'react';
import Official from '../Official';
import Internet from '../Internet';
import './style.css';

export default class Home extends Component {
  state = {
    charts: 'init',
  };

  render() {
    switch (this.state.charts) {
      case 'official':
        return <Official goback={() => this.setState({ charts: 'init' })} />;
      case 'internet':
        return <Internet goback={() => this.setState({ charts: 'init' })} />;
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
            </ul>
          </div>
        );
    }
  }
}
