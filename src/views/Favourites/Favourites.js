import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter } from './../../components/Counter/actions';
class Favourites extends Component {
  render() {
    return (
      <div>
        <h2>Favourites</h2>   
        <button onClick={e => { e.preventDefault(e); this.props.increaseCounter() }}>+</button>
        <button onClick={e => { e.preventDefault(e); this.props.decreaseCounter() }}>-</button>   
      </div>  
    )
  }
}

export default connect(state => ({
}), dispatch => ({
  increaseCounter: () => dispatch(increaseCounter()),
  decreaseCounter: () => dispatch(decreaseCounter()),
}) )(Favourites)