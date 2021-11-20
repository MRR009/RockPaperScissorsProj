import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

export const Image = styled.img`
  max-width: 175px;
  max-height: 175px;
  transform: translateY(3rem);
  transition: transform 0.2s;
  &:hover {
    opacity: 1;
    transform: translateX(0.1rem) scale(1);
  }
`

export const ChoiceButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  flex: 1;
  &:hover {
  }
`
