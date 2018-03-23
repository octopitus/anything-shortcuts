import React, {Component} from 'preact'

import {getWorkers} from '../../workers'

import SupportedApplication from '../SupportedApplication'
import ShortcutList from './ShortcutList'

import style from './style'

const getIcon = application => {
  return require(`../../assets/icons/${application}.png`)
}

class ShortcutSectionList extends Component {
  state = {
    items: {}
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.pattern !== nextProps.pattern ||
      this.props.application !== nextProps.application
    ) {
      this._handleOnChange(nextProps.pattern, nextProps.application)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.items !== nextState.items
  }

  _handleOnChange = (pattern, application) => {
    getWorkers()
      .search.search(pattern, application)
      .then(items => this.setState({items: this._transform(items)}))
  }

  _transform = items => {
    return items.reduce((result, item) => {
      result[item.category] = result[item.category] || {}
      result[item.category][item.application] =
        result[item.category][item.application] || []
      result[item.category][item.application].push(item)

      return result
    }, {})
  }

  render(props, state) {
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
