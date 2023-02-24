// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onClickSubscribeButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  renderSubscribeButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === false) {
      return (
        <button
          type="button"
          className="btn"
          onClick={this.onClickSubscribeButton}
        >
          Subscribe
        </button>
      )
    }
    return (
      <button
        type="button"
        className="btn"
        onClick={this.onClickSubscribeButton}
      >
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {this.renderSubscribeButton()}
      </div>
    )
  }
}

export default Welcome
