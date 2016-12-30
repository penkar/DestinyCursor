import React, {Component} from 'react';
import Header from './Header';
import Body from './Body';
require('../style/HTML.scss');

export default class GenericBG extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}
