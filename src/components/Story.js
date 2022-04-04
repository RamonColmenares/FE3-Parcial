import React, { Component } from 'react'



export class Story extends Component {
  
  render() {
    return (
      <h1 className='historia'>{this.props.historia}</h1>
    )
  }
}

export default Story