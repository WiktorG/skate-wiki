import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import { handleFavouriteGifAddRemove } from './actions'
class ListEl extends Component {
  state = {
      isGifFavourite: false
  }

  componentDidMount() {
    const isGifFavourite = (() => {
        try {
            let favouriteGifs = JSON.parse(localStorage.getItem('favouriteGifs'));
            if (favouriteGifs === null) {
                return false
            } else {
                let found = false;
                favouriteGifs.forEach((gif) => {
                    if (gif.id === this.props.gif.id) {
                        found = gif.id === this.props.gif.id;
                    }
                });
                return found;
            }
        } catch {
            return false;
        }
    })();
    this.setState({isGifFavourite: isGifFavourite});
  }

  handleStarClick = (gif) => {
    if (this.props.match.url === '/fav') {
        this.setState({isGifFavourite: true});
    } else {
        this.setState({isGifFavourite: !this.state.isGifFavourite});
    }
    this.props.handleFavouriteGifAddRemove(gif);
  }

  render() {
    return (
        <div className="gif-list__el" key={this.props.gif.id} >
            <div className="gif-container">
                <img src={this.props.gif.images.downsized_medium.url} alt={this.props.gif.title}/>
            </div>
            <div className="gif-info">
                <Icon 
                    type="star" 
                    className="gif-info__star" 
                    onClick={(e) => { e.preventDefault(); this.handleStarClick(this.props.gif);  } }  
                    theme={this.state.isGifFavourite ? 'filled' : 'outlined' }
                />
            </div>
        </div>
    )
  }
}

export default withRouter(connect(state => ({

}), dispatch => ({
    handleFavouriteGifAddRemove: gif => dispatch(handleFavouriteGifAddRemove(gif)),
}))(ListEl))
