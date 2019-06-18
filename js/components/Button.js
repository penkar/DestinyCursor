import * as React from 'react'
type Props = {title:string}
export default class Button extends React.Component<Props>{
  render() {
    return (
      <div className='button'>
        <span>{this.props.title}</span>
      </div>
    )
  }
}
