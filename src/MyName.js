import React, { Component } from 'react';

class MyName extends Component {
  // using default properties
  static defaultProps = {
    name: 'hoho'
  };

  render() {
    return (
      <div>
        hehe my name is <b>{this.props.name}</b>.
      </div>
    );
  }
}
// defaultProps can be written also
// MyName.defaultProps = { name : 'haha' };

/*
// 함수형 컴포넌트
const MyName = ({ name }) => {
  return (
    <div>
      -hehe my name is <b>{name}</b>.
    </div>
  );
};
*/

export default MyName;
