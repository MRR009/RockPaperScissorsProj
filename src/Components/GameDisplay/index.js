import {Component} from 'react'

import Header from '../Header'
import Footer from '../Footer'
import GameResultView from '../GameResultView'

import './index.css'

import {Image, GameContainer, Button} from './styledComponents'

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

  getMyChoice = event => {
    const {choicesList} = this.props
    const {isClicked} = this.state
    const {alt, src} = event.target

    // My Choices
    this.setState({myChoiceImage: src, isClicked: !isClicked})

    // Opponents Choice
    const randNum = Math.floor(Math.random() * 3)
    const oppChoice = choicesList[randNum]

    this.setState({opponentChoice: {...oppChoice}})

    // get Result

    if (alt === 'ROCK' && oppChoice.id === 'SCISSORS') {
      this.setState({result: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (alt === 'ROCK' && oppChoice.id === 'PAPER') {
      this.setState({result: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else if (alt === 'SCISSORS' && oppChoice.id === 'PAPER') {
      this.setState({result: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (alt === 'SCISSORS' && oppChoice.id === 'ROCK') {
      this.setState({result: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else if (alt === 'PAPER' && oppChoice.id === 'ROCK') {
      this.setState({result: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (alt === 'PAPER' && oppChoice.id === 'SCISSORS') {
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
      <>
        <Header score={score} />
        {isClicked ? (
          <GameResultView
            opponentChoice={opponentChoice}
            myChoiceImage={myChoiceImage}
            playAgain={this.playAgain}
            result={result}
          />
        ) : (
          <GameContainer>
            {choicesList.map(eachChoice => {
              const {id, imageUrl} = eachChoice
              const smallId = id.toLowerCase()
              return (
                <Button
                  type="button"
                  onClick={this.getMyChoice}
                  key={id}
                  data-testid={`${smallId}Button`}
                >
                  <Image src={imageUrl} alt={id} />
                </Button>
              )
            })}
          </GameContainer>
        )}

        <Footer />
      </>
    )
  }
}

export default GameDisplay
