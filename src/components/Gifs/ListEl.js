import React, { Component } from 'react'
import { connect } from 'react-redux'

class ListEl extends Component {
  render() {
    console.log(this.props.gif.user);
    return (
        <div className="gif-list__el" key={this.props.gif.id} >
            <div className="gif-container">
                <img src={this.props.gif.images.downsized_medium.url} alt={this.props.gif.title}/>
            </div>
            <div className="gif-info">
                <h3>{this.props.gif.title}</h3>
                <span className="author">{(this.props.gif.user !== undefined) ? (
                    <React.Fragment>
                        Author:&nbsp;
                        <a href={this.props.gif.user.profile_url} target="_blank" rel="nofollow"> 
                            {this.props.gif.user.display_name}
                        </a>
                    </React.Fragment>
                    ) : ''} 
                </span>
            </div>
        </div>
    )
  }
}

export default connect(state => ({

}), dispatch => ({

}))(ListEl)
