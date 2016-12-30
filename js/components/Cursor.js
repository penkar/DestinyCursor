import React, {Component} from 'react';
require('../style/Cursor.scss');

export default class Cursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientY: 100,
      clientX: 100,
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', ::this._mouseMove);
  }

  _mouseMove(data) {
    let {clientY, clientX} = data;
    this.setState({clientY, clientX});
  }

  render() {
    let {clientY, clientX} = this.state;
    let style={top:clientY-28, left:clientX-28};

    return (
      <div id='cursor' style={style}>

      </div>
    )
  }
}
