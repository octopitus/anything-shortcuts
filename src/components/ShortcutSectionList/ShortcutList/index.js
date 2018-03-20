//@flow
import React, {Component} from 'preact'
import classnames from 'classnames'

import ShortcutItem from './ShortcutItem'
import style from './style'

type Props = {
  items: Array<*>
}

class ShortcutList extends Component<Props> {
  static defaultProps = {
    items: []
  }

  _renderItem = (item: any) => (
    <ShortcutItem key={item.id} title={item.title} shortcut={item.shortcut} />
  )

  render(props: Props) {
    const items = props.items.map(this._renderItem)
    const listClasses = classnames('column', 'column-100', style.shortcutList)

    return <ul className={listClasses}>{items}</ul>
  }
}

export default ShortcutList
