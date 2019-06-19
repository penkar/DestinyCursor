import * as React from 'react';
import cn from 'classnames';
import Body from './Body.js';
require('../style/body.scss');

export default class GenericBG extends React.Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      green: false,
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
    const {clientY, clientX, clicked, red, green} = this.state;
    const style={top:clientY-28, left:clientX-28};
    return (
      <div className={cn({red, green})}>
        <div className='header'>
          Custom Cursor Example Site
        </div>
        { Body(this.change) }
        <div id='cursor' style={style} className={cn({clicked})}>
          <ul>
            <li/><li/><li/><li/>
          </ul>
        </div>
      </div>
    )
  }
  change = (data):void => {this.setState(data)}
  mouseDown = ():void => {this.setState({clicked:true})}
  mouseUp = ():void => {this.setState({clicked:false})}
  mouseMove = ({clientX, clientY}):void => {this.setState({clientY, clientX})}
}
