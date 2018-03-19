// @flow
import React, {Component} from 'preact'

import style from './style'

type Props = {
  value?: string,
  onChange: string => void
}

class SearchInput extends Component<Props> {
  static defaultProps = {
    onChange: () => {}
  }

  _onChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    this.props.onChange(event.target.value)
  }

  render(props: Props) {
    return (
      <div className={style.inputWrapper}>
        <input
          type="search"
          value={props.value}
          placeholder="Search..."
          onInput={this._onChange}
          className={style.input}
          autoFocus
        />
      </div>
    )
  }
}

export default SearchInput
