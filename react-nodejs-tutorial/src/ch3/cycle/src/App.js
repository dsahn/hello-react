import React, { Component } from 'react';
import Stopwatch from './Stopwatch'
import SimpleForm from './SimpleForm'
import NumberForm from './NumberForm'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    console.log('constructor')
  }
  componentWillMount () {
    console.log('componentWillMount')
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
   // modify
   componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  // unmount
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  render () {
    console.log('render')
    const setStateHandler = (e) => {
      console.log('* call setState()')
      this.setState({r: Math.random()})
    }
    return (<div>
      <button onClick={setStateHandler}>setState</button>
      <Stopwatch />
      <SimpleForm />
      <NumberForm />
      </div>)
  }
}

export default App;
