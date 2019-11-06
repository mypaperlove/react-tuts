import React, {
  Component, createRef
} from 'react'

export default class TodoInput extends Component {
  constructor() {
    super()
    this.state = {
      inputvalue: 'xxx'
    }
    this.inputDom = createRef();
  }
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleAdd();
    }
  }

  handleInputChange = (e) => {
    this.setState({
      inputvalue: e.currentTarget.value
    })
    // console.log(e.currentTarget.value);
  }

  handleAdd = () => {
    console.log(this.props);
    if (this.state.inputvalue === '') {
      return
    }
    this.props.todo(this.state.inputvalue)
    this.setState({
      inputvalue: ''
    }, () => {
      this.inputDom.current.focus();
    })
  }

  render () {
    return (
      <>
        <input type="text"
          value={this.state.inputvalue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
          ref={this.inputDom} />
        <input type="button" value="确认" onClick={this.handleAdd}></input>
      </>
    )
  }
}