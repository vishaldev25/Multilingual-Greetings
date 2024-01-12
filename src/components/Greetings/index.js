import {Component} from 'react'
import GreetingsCard from '../GreetingsCard'
import TabsItem from '../TabsItem'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  clickTab = id => {
    this.setState({activeTabId: id})
  }

  renderFilteredApps = () => {
    const {activeTabId} = this.state

    const filterdLang = languageGreetingsList.filter(
      each => each.id === activeTabId,
    )

    return filterdLang
  }

  render() {
    const {activeTabId} = this.state
    const filterd = this.renderFilteredApps(activeTabId)
    return (
      <div className="app-container">
        <div className="app">
          <h1 className="multi">Multilingual Greetings</h1>
          <div className="tabs-button">
            {languageGreetingsList.map(each => (
              <TabsItem
                key={each.id}
                tabsList={each}
                clickTab={this.clickTab}
                isActive={activeTabId === each.id}
              />
            ))}
          </div>
          <div className="greetings-value">
            <ul>
              {filterd.map(each => (
                <GreetingsCard greetingDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Greetings
