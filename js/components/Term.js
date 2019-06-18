import * as React from 'react'
import cn from 'classnames';
type Props = {change:Function}
export default class Term extends React.Component<Props> {
  on = () => this.props.change({green: this.props.aff, red:!this.props.aff})
  off = () => this.props.change({green: false, red: false});
  render() {
    const {aff} = this.props;
    return (
      <span className={cn('term', {aff, neg:!aff})}
        onMouseEnter={this.on}
        onMouseLeave={this.off}>
        { this.props.term }
      </span>
    );
  }
}
