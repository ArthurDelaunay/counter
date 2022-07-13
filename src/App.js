import React from 'react'
import './App.css'
import Counter from "./components/Counter"

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      count1: 0,
      count2: 0
    }
  }
  handleClickIncrementCount1 = () => {
    if (this.state.count1 < 100) {
      if (this.state.count1 === this.state.count2) {
        this.setState({
          count1: this.state.count1 + 1,
          count2: this.state.count2 + 1
        })
      } else {
        this.setState({
          count1: this.state.count1 +1
        })
      }
    }
  }
  handleClickDecrementCount1 = () => {
    if (this.state.count1 > 0){
      this.setState({
       count1: this.state.count1 - 1
      })
    }
  }
  handleClickIncrementCount2 = () => { 
    if (this.state.count2 < 100) {
      this.setState({
        count2: this.state.count2 + 1
      })
    }
  }
  handleClickDecrementCount2 = () => {
    if (this.state.count2 > 0){
      if (this.state.count2 === this.state.count1){
        this.setState({
          count2: this.state.count2 - 1,
          count1: this.state.count1 -1
        })
      } else {
        this.setState({
          count2: this.state.count2 -1
        })
      }
            
    }
  }

 render () {
    return (
        <div>
          <h1>Double Counter</h1>
          <h2>Counter 1</h2>
          <Counter 
            count={this.state.count1}
            increment={this.handleClickIncrementCount1}
            substract={this.handleClickDecrementCount1}
          />
          <h2>Counter 2</h2>
          <Counter 
            count={this.state.count2}
            increment={this.handleClickIncrementCount2}
            decrement={this.handleClickDecrementCount2}
          />
        </div>
    )
 }
}

export default App
