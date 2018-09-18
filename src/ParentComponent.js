import React, { Component } from 'react'

export default class ParentComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    console.log("constructor");
  }

  componentDidMount = () => {
    console.log("componentDidMount() from parent component");
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps() from parent...");
  }
  
  render() {
    console.log("render parent");

    return (
      <div>
        <h1>Rendering parent component...</h1>
      </div>
    )
  }
}
