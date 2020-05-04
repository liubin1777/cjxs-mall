import React from 'react';
import './index.css';

class Banner extends React.Component{
  render () {
    return (
      <div className="banner-cmp">
        {this.props.title}
      </div>
    )
  }
}

export default Banner;
