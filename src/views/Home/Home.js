import React, { Component } from 'react'
import { giphyApi } from './../../services/api';

class Home extends Component {

  componentDidMount() {
    giphyApi.get('', {
      params: {
        q: 'skate+tricks+nestor+judkins',
      }
    }).then(res => {
      console.log(res);
    }) 
  }

  render() {
    
    return (
      <React.Fragment>
        <h2>Home</h2>  
      </React.Fragment>     
    )
  }
}

export default Home