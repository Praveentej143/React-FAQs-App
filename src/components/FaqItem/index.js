import {Component} from 'react'
import './index.css'

const PLUS_IMG =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMG =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isToggled: false}

  onClickChange = () => {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled,
    }))
  }

  render() {
    const {faqListDetails} = this.props
    const {isToggled} = this.state
    const {questionText, answerText} = faqListDetails
    const imgUrl = isToggled ? MINUS_IMG : PLUS_IMG
    const imgAltLabel = isToggled ? 'minus' : 'plus'

    return (
      <li className="list-items">
        <div className="header-container">
          <h1 className="question">{questionText}</h1>
          <button className="toggle-btn" onClick={this.onClickChange}>
            <img className="toggle-img" src={imgUrl} alt={imgAltLabel} />
          </button>
        </div>
        <hr />
        {isToggled && <p className="answer-text">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
