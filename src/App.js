import React from 'react'
import './App.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
}
  handleClickIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleClickDecrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
 render () {
    return (
        <div>
          <h1>Counter</h1>
          <h2>{this.state.count}</h2>
          <button type="button" onClick={this.handleClickIncrement} class="btn btn-outline-success">+</button>
          <button type="button" onClick={this.handleClickDecrement} class="btn btn-outline-danger">-</button>
        </div>  
    )
 }
}

export default App
