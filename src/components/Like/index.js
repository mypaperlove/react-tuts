import React, { Component } from 'react'

export default class Like extends Component {
  constructor() {
    super()
    this.state = {
      isShow: true
    }
  }
  handLikedClick = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render () {
    return (
      <div onClick={this.handLikedClick}>
        {this.state.isShow ? '喜欢💓' : '不喜欢🖤'};
      </div>
    )
  }
}
