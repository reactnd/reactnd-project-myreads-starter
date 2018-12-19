import React, { Component } from 'react'

export default class CloseSearch extends Component {
  render() {
    return (
      <a className="close-search" onClick={this.props.onNavigation}>Close</a>
    )
  }
}
