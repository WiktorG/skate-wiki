import React, { Component } from 'react'

class NotFound extends Component {
  render() {
    return (
        <h2 style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: '90%',
        }}>404 - Woops..<br/>I didn't find the page you look for</h2>        
    )
  }
}

export default NotFound