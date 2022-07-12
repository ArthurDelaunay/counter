import React from 'react'
import './App.css'
import Counter from "./components/Counter"

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
          <Counter 
            count={this.state.count}
            increment={this.handleClickIncrement}
            decrement={this.handleClickDecrement}
          />
        </div>  
    )
 }
}

export default App
