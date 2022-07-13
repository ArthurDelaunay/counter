import React from 'react'

class Counter extends React.Component {
render() {
    return (
        <div>
            <h3>{this.props.count}</h3>
            <button type="button" onClick={this.props.increment} class="btn btn-outline-success">+</button>
            <button type="button" onClick={this.props.substract} class="btn btn-outline-danger">-</button>
        </div>
    )
}
}

export default Counter