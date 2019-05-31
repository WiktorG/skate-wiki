import React, { Component } from 'react'
import { connect } from 'react-redux'
class Favourites extends Component {
  render() {
    return (
      <div>
        <h2>Favourites</h2>   
      </div>  
    )
  }
}

export default connect(state => ({
}), dispatch => ({
}) )(Favourites)