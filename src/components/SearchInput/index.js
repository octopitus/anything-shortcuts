// @flow
import React, {Component} from 'preact'

import style from './style'

// const onChange

type Props = {
  value: string,
  onChange: string => void
}

class SearchInput extends Component<Props> {
  static defaultProps = {
    value: '',
    onChange: () => {}
  }

  shouldComponentUpdate(nextProps: Props) {
    return this.props.value !== nextProps.value
  }

  _onchange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value)
  }

  render(props: Props) {
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
