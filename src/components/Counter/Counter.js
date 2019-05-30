import React, { Component } from 'react'
import { connect } from 'react-redux';
import './actions';

import { increaseCounter, decreaseCounter } from './actions';

class Counter extends Component {
  render() {
    const number = this.props.counter.number;
    return (
        <div>
            <h2>Counter is equal {number}</h2>
            <button onClick={e => { e.preventDefault(e); this.props.increaseCounter() }}>+</button>
            <button onClick={e => { e.preventDefault(e); this.props.decreaseCounter() }}>-</button>
        </div>
    )
  }
}

export default connect(state => ({
    counter: state.counter,
}), dispatch => ({
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
}) )(Counter)