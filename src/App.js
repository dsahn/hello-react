import React, { Component, fragment } from 'react';
import './app.css';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '33px'
    };
    return (
      <fragment>
        <div style={style}>
          <h1>안녕하세요 리액트</h1>
        </div>
        <div className="box">yoyo</div>
      </fragment>
    );
  }
}

export default App;
