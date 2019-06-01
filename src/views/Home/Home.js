import React, { Component } from 'react'
import { connect } from 'react-redux'
import './../../components/Gifs/actions'

import { fetchHomeGifs } from './../../components/Gifs/actions'

class Home extends Component {

  componentDidMount() {
    this.props.fetchHomeGifs();
  }

  render() {
    return (
      <React.Fragment>
        <h2>Home</h2>  
      </React.Fragment>     
    )
  }
}

export default connect((state) => ({
  
}),
(dispatch) => ({
    fetchHomeGifs: (params) => dispatch(fetchHomeGifs(params)),
}))(Home)