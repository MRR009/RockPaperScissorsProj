import {
  GameResultContainer,
  GameComparingContainer,
  MyChoiceImg,
  MyChoiceHeading,
  GameResultText,
  PlayAgainButton,
  PlayAgainText,
} from './styledComponents'

const GameResultView = props => {
  const {myChoiceImage, playAgain, opponentChoice, result} = props
  const {imageUrl} = opponentChoice

  return (
    <GameResultContainer>
      <GameComparingContainer>
        <div>
          <MyChoiceHeading>YOU</MyChoiceHeading>
          <MyChoiceImg src={myChoiceImage} alt="your choice" />
        </div>
        <div>
          <MyChoiceHeading>OPPONENT</MyChoiceHeading>
          <MyChoiceImg src={imageUrl} alt="opponent choice" />
        </div>
      </GameComparingContainer>
      <GameResultText>{result}</GameResultText>
      <PlayAgainButton onClick={() => playAgain()} type="button">
        <PlayAgainText>PLAY AGAIN</PlayAgainText>
      </PlayAgainButton>
    </GameResultContainer>
  )
}

export default GameResultView
