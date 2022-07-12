import React from 'react'

class Counter extends React.Component {
render() {
    return (
        <div>
            <h2>{this.props.count}</h2>
            <button type="button" onClick={this.props.increment} class="btn btn-outline-success">+</button>
            <button type="button" onClick={this.props.decrement} class="btn btn-outline-danger">-</button>
        </div>
    )
}
}

export default Counter