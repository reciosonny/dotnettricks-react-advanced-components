import React, { Component } from 'react';
// import axios from 'axios';

import AnotherComponent from './AnotherComponent';
import Todo from './Todo';
import ParentComponent from './ParentComponent';

export default class App extends ParentComponent {

  constructor(props) {
    super(props);
    this.state = {
      val: "Click me to change me"
    }

    console.log("constructor executed");
  }

  componentDidMount = () => {
    throw "error";
  }
  
  componentWillUnmount = () => {
    console.log("component unmounted...");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps() executed", nextProps, prevState);

    return null;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("getSnapshotBeforeUpdate() executed", prevProps, prevState);
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDidUpdate() executed", prevProps, prevState);
  }
  
  render() {
    console.log("component rendered..");
    
    return (
      <div>
        <h2>
          This component will not be rendered because the error was thrown during mount...
        </h2>
      </div>
    )
  }
}

