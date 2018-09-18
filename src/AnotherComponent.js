import React, { Component } from 'react'

export default class AnotherComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      val: "Click me to change me"
    }
  }

  componentDidMount() {

    
  }

  render() {
    const { val } = this.state;

    return (
      <div>
        Another component here...
        <h2 onClick={(e) => this.setState({val: "You changed me!"})}>{val}</h2>
      </div>
    )
  }
}
