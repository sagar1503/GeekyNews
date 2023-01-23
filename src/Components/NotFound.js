import React, { Component } from 'react'

export class NotFound extends Component {
  render() {
    return (
      <div className='NotFound'>
        <h1 style={{padding:"10px"}}>Oops... </h1>
        <p>Looks like page is not found</p>
        <p>Please check your url or contact us.</p>
      </div>
    )
  }
}

export default NotFound