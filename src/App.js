import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '33px'
    };
    return (
      <div style={style}>
        <h1>안녕하세요 리액트</h1>
      </div>
    );
  }
}

export default App;
