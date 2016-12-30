'use strict'
import React from 'react'
import { render } from 'react-dom';
import Cursor from './components/Cursor'
import GenericBG from './components/GenericBG'
render(
  <div>
    <GenericBG />
    <Cursor />
  </div>,
  document.getElementById('app')
);
