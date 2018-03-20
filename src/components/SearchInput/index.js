// @flow
import React, {Component} from 'preact'

import style from './style'

// const onChange

type Props = {
  pattern: string,
  onChange: string => void
}

class SearchInput extends Component {
  static defaultProps = {
    pattern: '',
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
            value={props.pattern}
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
