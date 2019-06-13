import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>The Count Is: {count}</h1>
        <button onClick={this.increment} type="button">
          Add 1
        </button>
      </div>
    );
  }
}
export default CounterClass;
