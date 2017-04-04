import React from 'react';
import logo from '../logo.svg'
import '../App.css';
import {Link} from 'react-router';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Timer">
                  <img src={logo} className="App-logo" alt="logo" />

        <h1>Seconds Elapsed: {this.state.secondsElapsed}
          </h1>
          <Link to="/" >Home</Link>
          <br/> <br/>
            <Link to="/Todo" >Todo</Link>
        </div>
    
    );
  }
}
export default Timer;