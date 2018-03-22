// @flow
import React from 'preact'

import style from './style'

const Header = () => (
  <div className="container">
    <div className={style.header}>
      <h1 className={style.title}>
        Anything <em>shortcuts</em>
      </h1>
      <h5>Instantly search for shortcuts of any apps</h5>
    </div>
  </div>
)

export default Header
