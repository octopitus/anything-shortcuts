//@flow
import React, {Component} from 'preact'

import {getWorkers} from '../../workers'

import SupportedApplication from '../SupportedApplication'
import ShortcutList from './ShortcutList'

import style from './style'

const getIcon = (application: string) => {
  // $FlowFixMe
  return require(`../../assets/icons/${application}.png`)
}

type Props = {
  pattern: string,
  application: string
}

type State = {
  items: Object
}

class ShortcutSectionList extends Component<Props, State> {
  state = {
    items: Object
  }

  componentWillReceiveProps(nextProps: Props) {
    if (
      this.props.pattern !== nextProps.pattern ||
      this.props.application !== nextProps.application
    ) {
      this._handleOnChange(nextProps.pattern, nextProps.application)
    }
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return this.state.items !== nextState.items
  }

  _handleOnChange = (pattern: string, category: string): void => {
    getWorkers()
      .search.search(pattern, {category})
      .then(items => this.setState({items: this._transform(items)}))
  }

  _transform(items: Array<*>): Object {
    return items.reduce((result, item) => {
      result[item.application] = result[item.application] || {}
      result[item.application][item.application] =
        result[item.application][item.application] || []
      result[item.application][item.application].push(item)

      return result
    }, {})
  }

  render(props: Props, state: State) {
    const sections = Object.keys(state.items).map(category => {
      return Object.keys(state.items[category]).map(application => (
        <div key={category + application} className={style.shortcutSection}>
          <div className={style.shortcutSectionHeader}>
            <img src={getIcon(application)} />
            <h5>{category}</h5>
          </div>
          <ShortcutList items={state.items[category][application]} />
        </div>
      ))
    })

    return (
      <div className="container">
        {sections.length > 0 ? sections : <SupportedApplication />}
      </div>
    )
  }
}

export default ShortcutSectionList
