// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <>
        <div className="app-container">
          <div className="container">
            <h1 className="heading">FAQs</h1>
            <ul className="list-container">
              {faqsList.map(eachFaq => (
                <FaqItem faqListDetails={eachFaq} key={eachFaq.id} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default Faqs
