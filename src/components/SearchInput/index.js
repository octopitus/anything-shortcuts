// @flow
import React, {Component} from 'preact'

import style from './style'

// const onChange

type Props = {
  value: string,
  onChange: string => void
}

class SearchInput extends Component {
  static defaultProps = {
    value: '',
    onChange: () => {}
  }

  _onchange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value)
  }

  render(props: Props) {
    return (
      <div className={style.inputWrapper}>
        <div className="container">
          <input
            type="search"
            value={props.value}
            placeholder="Search for any shortcuts..."
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
