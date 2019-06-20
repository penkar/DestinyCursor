import React from 'react';
const Button = (title:string) => 
  <div key={title} className='button'>
    <span>{title}</span>
  </div>
export default Button;