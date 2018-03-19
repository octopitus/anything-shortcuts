//@flow
import React, {Component} from 'preact'

// $FlowFixMe
import {getWorkers} from '../../workers'

import SearchInput from './SearchInput'
import ShortcutList from './ShortcutList'

import style from './style'

const getIcon = (application: string) => {
  // $FlowFixMe
  return require(`../../assets/icons/${application}.png`)
}

type Props = {
  //
}

type State = {
  searchTerm: string,
  items: Array<*>
}

class SearchContentWrapper extends Component<Props, State> {
  state = {
    searchTerm: '',
    items: []
  }

  _handleOnChange = (value: string): void => {
    this.setState({searchTerm: value})

    getWorkers()
      .search.search(value)
      .then(items => this.setState({items}))
  }

  _transform(items: Array<*>): Object {
    return items.reduce((result, item) => {
      result[item.category] = result[item.category] || {}
      result[item.category][item.application] =
        result[item.category][item.application] || []
      result[item.category][item.application].push(item)

      return result
    }, {})
  }

  render(props: Props, state: State) {
    const sections = this._transform(state.items)

    const sectionList = Object.keys(sections).map(category => {
      return Object.keys(sections[category]).map(application => (
        <div key={category + application} className={style.shortcutSection}>
          <div className={style.shortcutSectionHeader}>
            <img src={getIcon(application)} />
            <h5>{category}</h5>
          </div>
          <ShortcutList items={sections[category][application]} />
        </div>
      ))
    })

    return (
      <div className="container">
        <SearchInput value={state.searchTerm} onChange={this._handleOnChange} />
        {sectionList}
      </div>
    )
  }
}

export default SearchContentWrapper
