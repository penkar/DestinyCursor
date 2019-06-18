import * as React from 'react';
import cn from 'classnames';
import Body from './Body.js';
import Cursor from './Cursor.js';
require('../style/body.scss');

export default class GenericBG extends React.Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      green: false,
    }
  }
  render() {
    const {red, green} = this.state;
    return (
      <div className={cn({red, green})}>
        <div className='header'>
          Custom Cursor Example Site
        </div>
        { Body(this.change) }
        <Cursor />
      </div>
    )
  }
  change = (data) => this.setState(data);
}
