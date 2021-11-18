import styled from 'styled-components'

export const RPSContainer = styled.div`
  padding-bottom: 32px;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
`
export const GameContainer = styled.div`
  margin: auto;
  margin: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Image = styled.img`
  max-width: 175px;
  max-height: 175px;
`

export const GamesHeading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 600;
  line-height: 1.3;
  margin-top: 32px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  flex: 1;
`
