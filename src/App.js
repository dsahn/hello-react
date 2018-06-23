import React, { Component, fragment } from 'react';
import './app.css';
import MyName from './MyName';
import Counter from './Counter';

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
        <MyName name="dongsu" />
        {/* using defaultProps */}
        <MyName />
        <Counter />
      </fragment>
    );
  }
}

export default App;
