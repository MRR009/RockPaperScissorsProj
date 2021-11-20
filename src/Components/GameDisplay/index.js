import {Component} from 'react'

import Header from '../Header'
import Footer from '../Footer'
import GameResultView from '../GameResultView'
import PlayGame from '../PlayGame'

import './index.css'

import {GameDisplayContainer} from './styledComponents'

class GameDisplay extends Component {
  state = {
    score: 0,
    myChoiceImage: '',
    opponentChoice: {},
    isClicked: false,
    result: '',
  }

  playAgain = () => {
    this.setState({isClicked: false})
  }

  getMyChoice = id => {
    const {choicesList} = this.props
    const {isClicked} = this.state
    let myImg = ''
    choicesList.map(each => {
      if (id === each.id) {
        myImg = each.imageUrl
      }
      return myImg
    })

    // My Choices
    // this.setState({myChoiceImage: src, isClicked: !isClicked})
    this.setState({myChoiceImage: myImg, isClicked: !isClicked})
    // Opponents Choice
    const randNum = Math.floor(Math.random() * 3)
    const oppChoice = choicesList[randNum]

    this.setState({opponentChoice: {...oppChoice}})

    // get Result

    if (id === 'ROCK' && oppChoice.id === 'SCISSORS') {
      this.setState({result: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (id === 'ROCK' && oppChoice.id === 'PAPER') {
      this.setState({result: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else if (id === 'SCISSORS' && oppChoice.id === 'PAPER') {
      this.setState({result: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (id === 'SCISSORS' && oppChoice.id === 'ROCK') {
      this.setState({result: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else if (id === 'PAPER' && oppChoice.id === 'ROCK') {
      this.setState({result: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (id === 'PAPER' && oppChoice.id === 'SCISSORS') {
      this.setState({result: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else {
      this.setState({result: 'IT IS DRAW'})
    }
  }

  render() {
    const {choicesList} = this.props
    const {score, result, opponentChoice, myChoiceImage, isClicked} = this.state
    // console.log(`myChoice: ${myChoiceId}`)
    // console.log(`opponentChoice: ${opponentChoice.id}`)

    return (
      <GameDisplayContainer>
        <Header score={score} />
        {isClicked ? (
          <GameResultView
            opponentChoice={opponentChoice}
            myChoiceImage={myChoiceImage}
            playAgain={this.playAgain}
            result={result}
          />
        ) : (
          <PlayGame choicesList={choicesList} getMyChoice={this.getMyChoice} />
        )}

        <Footer />
      </GameDisplayContainer>
    )
  }
}

export default GameDisplay
