import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Spin } from 'antd';

import './../../components/Gifs/actions'

import 'antd-mobile/lib/list-view/style/css';
import 'antd/lib/spin/style/css';

import { fetchHomeGifs } from './../../components/Gifs/actions'

import GifList from './../../components/Gifs/List'

class Home extends Component {

  componentDidMount() {
    this.props.fetchHomeGifs();
  }

  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.home.fetching && this.props.gifs.home.gifs.length === 0 ? 
        <Spin style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }} />
        :
        <GifList gifs={this.props.gifs.home.gifs} />        
        }
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