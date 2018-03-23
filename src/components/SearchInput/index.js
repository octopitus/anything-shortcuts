import React, {Component} from 'preact'

import style from './style'

class SearchInput extends Component {
  static defaultProps = {
    value: '',
    onChange: () => {}
  }

  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value
  }

  _onchange = e => {
    this.props.onChange(e.target.value)
  }

  render(props) {
    return (
      <div className="container">
        <div className={style.inputWrapper}>
          <input
            type="search"
            value={props.value}
            placeholder="Search..."
            onInput={this._onchange}
            className={style.input}
            autoFocus
          />
        </div>
      </div>
    )
  }
}

export default SearchInput
