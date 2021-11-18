import {
  HeaderContainer,
  HeadingContainer,
  Heading,
  ScoreContainer,
  ScoreHeading,
  Score,
} from './styledComponents'

const Header = props => {
  const {score} = props

  return (
    <HeaderContainer>
      <HeadingContainer>
        <Heading>
          Rock <br /> Paper <br /> Scissors
        </Heading>
      </HeadingContainer>
      <ScoreContainer>
        <ScoreHeading>Score</ScoreHeading>
        <Score>{score}</Score>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
