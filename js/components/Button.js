import * as React from 'react'
export default function(title:string) {
  return (
    <div key={title} className='button'>
      <span>{ title }</span>
    </div>
  );
}
