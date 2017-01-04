import React, {Component} from 'react';
import cn from 'classnames';
require('../style/Cursor.scss');

export default class Cursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientY: 100,
      clientX: 100,
      clicked: false,
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', ::this._mouseMove);
    window.addEventListener('mousedown', ::this._mouseDown);
    window.addEventListener('mouseup', ::this._mouseUp);
  }

  _mouseDown() {
    this.setState({clicked: true});
  }

  _mouseUp() {
    this.setState({clicked: false});
  }

  _mouseMove(data) {
    let {clientY, clientX} = data;
    this.setState({clientY, clientX});
  }

  render() {
    let {clientY, clientX, clicked} = this.state;
    let style={top:clientY-28, left:clientX-28};
    return (
      <div id='cursor' style={style} className={cn({clicked})}>
        <ul>
          <li/>
          <li/>
          <li/>
          <li/>
        </ul>
      </div>
    )
  }
}
