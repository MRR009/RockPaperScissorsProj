import styled from 'styled-components'

export const GameDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const RPSContainer = styled.div`
  padding-bottom: 32px;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
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
