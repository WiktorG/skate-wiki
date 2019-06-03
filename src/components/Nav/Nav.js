import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import 'antd-mobile/lib/nav-bar/style/css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <NavBar
            mode="light"
        >
            Skate Wiki - ReactSzn #2
        </NavBar>
      </div>
    )
  }
}

export default Nav