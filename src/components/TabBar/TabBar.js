import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { Icon } from 'antd'

import { TabBar as AntTabBar } from 'antd-mobile';
import 'antd-mobile/lib/tab-bar/style/css';

class TabBar extends Component {
  state = {
      activeTab:  'home'
  }

  render() {
    
    return (
        <div className="tab-bar">
        <AntTabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={false}
        >
            <AntTabBar.Item 
                selected={this.props.location.pathname === "/"}
                title="Home"
                key="home"
                icon={(
                    <Link to="/" style={{color: 'inherit'}}>
                       <Icon type="home"/>
                    </Link>
                )}
                selectedIcon={(
                    <Link to="/" style={{color: 'inherit'}}>
                       <Icon type="home"/>
                    </Link>
                )}
            />
            <AntTabBar.Item 
                selected={this.props.location.pathname === "/fav"}
                title="Favourites"
                key="fav"
                icon={(
                    <Link to="/fav" style={{color: 'inherit'}}>
                       <Icon type="star"/>
                    </Link>
                )}
                selectedIcon={(
                    <Link to="/fav" style={{color: 'inherit'}}>
                       <Icon type="star"/>
                    </Link>
                )}
            />
        </AntTabBar>
        </div>
    )
  }
}

export default withRouter(TabBar)