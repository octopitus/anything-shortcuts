// @flow
import React from 'preact'

import style from './style'

const Header = () => (
  <header className={style.header}>
    <nav />
    <div className="container">
      <h1>{"Anything's shortcuts"}</h1>
      <h5>{'Offlineable. Instantly search for shortcuts of any apps.'}</h5>
    </div>
  </header>
)

export default Header
