import React, { Component } from 'react'
import { connect } from 'react-redux'
import './../../components/Gifs/actions'

import 'antd-mobile/lib/list-view/style/css';

import { fetchFavouriteGifs } from './../../components/Gifs/actions'

import GifList from './../../components/Gifs/List'

class Favourites extends Component {
  componentDidMount() {
      this.props.fetchFavouriteGifs();
  }

  render() {
    return (
      <div className="gif-list">
        {
          this.props.gifs.fav.gifs.length === 0 ? 
          <div className="gif-list__empty">
            <h1>No favourite gifs :(</h1>
          </div>
          : 
          <GifList gifs={this.props.gifs.fav.gifs} />
        }
      </div>  
    )
  }
}

export default connect(state => ({
  gifs: state.gifs,
}), dispatch => ({
  fetchFavouriteGifs: (params) => dispatch(fetchFavouriteGifs(params)),
}) )(Favourites)