import React, {Component} from 'react';
import cn from 'classnames';
import {Header, Body, Cursor} from './index'
require('../style/HTML.scss');

export default class GenericBG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      green: false,
    }
  }

  on(data) {
    this.setState(data);
  }

  off() {
    this.setState({red: false, green: false});
  }

  render() {
    let {red, green} = this.state;
    let body = {on: ::this.on, off: ::this.off};
    return (
      <div className={cn({red, green})}>
        <Header />
        <Body {...body} />
        <Cursor />
      </div>
    )
  }
}
