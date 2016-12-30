import React, {Component, PropTypes} from 'react'
require('../style/main2.scss');

export default class Main extends Component {
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
    let style={top:clientY, left:clientX};
    return (
      <ul className='circle'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
  }
}
