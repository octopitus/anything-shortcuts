//@flow
import React, {Component} from 'preact'
import classnames from 'classnames'

import style from './style'

type Props = {
  title: string,
  shortcut: string
}

class ShortcutItem extends Component<Props> {
  shouldComponentUpdate() {
    return false
  }

  render(props: Props) {
    const liClasses = classnames('row', style.shortcutItem)

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
      <li className={liClasses}>
        <p
          className={shortcutClasses}
          dangerouslySetInnerHTML={{__html: props.shortcut}}
        />
        <p className={titleClasses}>{props.title}</p>
      </li>
    )
  }
}

export default ShortcutItem
