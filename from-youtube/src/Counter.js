import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  };

  constructor(props) {
    super(props);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  // 직접 변수 바꾸지 말고 setState 할 것
  // 화살표 함수가 아닌 경우 this가 뭔지 모르게 된다..!
  // 이모양이 나은듯
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  // 직접 함수로 선언해서 붙이려면 bind를 하면된다
  handleDecrease() {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>Counter : {this.state.number}</h1>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
