import React from 'react';
import cn from 'classnames';

export default class Cursor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientY: 100,
      clientX: 100,
      clicked: false,
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mousedown', this.mouseDown);
    window.addEventListener('mouseup', this.mouseUp);
  }
  render() {
    const {clientY, clientX, clicked} = this.state;
    const style={top:clientY-28, left:clientX-28};
    return (
      <div id='cursor' style={style} className={cn({clicked})}>
        <ul>
          <li/><li/><li/><li/>
        </ul>
      </div>
    )
  }

  mouseDown = () => this.setState({clicked:true});
  mouseUp = () => this.setState({clicked:false});
  mouseMove = ({clientX, clientY}) => this.setState({clientY, clientX});
}
