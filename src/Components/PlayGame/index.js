import {GameContainer, ChoiceButton, Image} from './styledComponents'

const PlayGame = props => {
  const {choicesList, getMyChoice} = props
  const onClickRockImage = () => getMyChoice(choicesList[0].id)
  const onClickScissorImage = () => getMyChoice(choicesList[1].id)
  const onClickPaperImage = () => getMyChoice(choicesList[2].id)

  return (
    <GameContainer>
      <ChoiceButton
        type="button"
        onClick={onClickRockImage}
        data-testid={`${choicesList[0].id.toLowerCase()}Button`}
      >
        <Image src={choicesList[0].imageUrl} alt={choicesList[0].id} />
      </ChoiceButton>
      <ChoiceButton
        type="button"
        onClick={onClickScissorImage}
        data-testid={`${choicesList[1].id.toLowerCase()}Button`}
      >
        <Image src={choicesList[1].imageUrl} alt={choicesList[1].id} />
      </ChoiceButton>
      <ChoiceButton
        type="button"
        onClick={onClickPaperImage}
        data-testid={`${choicesList[2].id.toLowerCase()}Button`}
      >
        <Image src={choicesList[2].imageUrl} alt={choicesList[2].id} />
      </ChoiceButton>
    </GameContainer>
  )
}

export default PlayGame
