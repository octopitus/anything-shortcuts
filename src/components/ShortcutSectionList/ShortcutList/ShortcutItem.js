import React, {Component} from 'preact'
import classnames from 'classnames'

import style from './style'

class ShortcutItem extends Component {
  shouldComponentUpdate() {
    return false
  }

  render(props) {
    const titleClasses = classnames(
      style.shortcutTitle,
      style.noMargin,
      style.textCenterVertical
    )

    const shortcutClasses = classnames(
      style.shortcut,
      style.noMargin,
      style.textCenterVertical
    )

    return (
      <li className={style.shortcutItem}>
        <p className={titleClasses}>{props.title}</p>
        <p
          className={shortcutClasses}
          dangerouslySetInnerHTML={{__html: props.shortcut}}
        />
      </li>
    )
  }
}

export default ShortcutItem
