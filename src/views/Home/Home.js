import React, { Component } from 'react'
import { connect } from 'react-redux'
import './../../components/Gifs/actions'

import 'antd-mobile/lib/list-view/style/css';

import { fetchHomeGifs } from './../../components/Gifs/actions'

import GifList from './../../components/Gifs/List'

class Home extends Component {

  componentDidMount() {
    if (this.props.gifs.home.nextPage === 0) {
      this.props.fetchHomeGifs();
    }
  }

  render() {
    return (
      <div className="gif-list">
        <GifList />
      </div>
    )
  }
}

export default connect((state) => ({
    gifs: state.gifs,
}),
(dispatch) => ({
    fetchHomeGifs: (params) => dispatch(fetchHomeGifs(params)),
}))(Home)