import React, {Component, PropTypes} from 'react'
import cn from 'classnames';

export default class Term extends Component {
  static propTypes = {
    term: PropTypes.string,
    on: PropTypes.func,
    off: PropTypes.func,
    aff: PropTypes.bool,
  }

  constructor(props) {
    super(props);
  }

  _on() {
    // console.log(15);
    let obj = {red: true}
    if(this.props.aff){
      obj = {green: true};
    }
    this.props.on(obj);
  }

  _off() {
    this.props.off();
  }

  render() {
    let {aff} = this.props;
    return (
      <span className={cn('term', {aff, neg: !aff})}
        onMouseEnter={::this._on}
        onMouseLeave={::this._off}
        >
        {this.props.term}
      </span>
    );
  }
}
