// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(previousState => ({count: previousState.count + 1}))
  }
  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <span>{count}</span>times
        </h1>

        <p>Click the button to increase the count!</p>
        <button className="button-styles" onClick={this.onIncrement}>
          Click me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
