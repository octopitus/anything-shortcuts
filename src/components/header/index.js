// @flow
import React from 'preact'

import style from './style'

const Header = () => (
  <header className={style.header}>
    <div className={'container ' + style.titleWrapper}>
      <h1 className={style.title}>
        Anything <em>shortcuts</em>
      </h1>
      <h5>Instantly search for shortcuts of any apps</h5>
    </div>
  </header>
)

export default Header
