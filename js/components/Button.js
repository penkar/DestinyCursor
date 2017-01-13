import React, {Component, PropTypes} from 'react'

export default class Button extends Component{
  static propTyps = {
    title: PropTypes.string,
  }

  render() {
    return (
      <div className='button'>
        <span>{this.props.title}</span>
      </div>
    )
  }
}
