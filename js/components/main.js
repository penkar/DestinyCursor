import React, {Component, PropTypes} from 'react'
require('../style/main.scss')

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
      <div id='cursor' className='shared' style={style}>
        <div className='shared child' style={style}>
          <div className='shared' style={style}>
            <div className='shared' style={style}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
