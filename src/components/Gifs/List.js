import React, { Component } from 'react'
import { ListView } from 'antd-mobile';

import ListEl from './ListEl';

class GifList extends Component {
  render() {
    let dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
    dataSource = dataSource.cloneWithRows(this.props.gifs);
    return (
      <ListView 
        ref={el => this.lv = el}
        dataSource={dataSource}
        pageSize={25}
        renderSeparator={(sectionID, rowID) => (
            <span 
                key={`${sectionID}-${rowID}`} 
                className="gif-list__separator"
            />)}
        renderRow={(data) => {
            return (
                <ListEl gif={data} />
            )
        }}
        useBodyScroll
      />
    )
  }
}

export default GifList
