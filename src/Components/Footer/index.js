import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import {
  RulesButton,
  RulesImage,
  CloseButton,
  RulesButtonContainer,
} from './styledComponents'

const Footer = () => (
  <Popup
    modal
    trigger={<RulesButton type="button">Rules</RulesButton>}
    className="popup-content"
  >
    {close => (
      <RulesButtonContainer>
        <CloseButton
          type="button"
          data-testid="closeButton"
          onClick={() => close()}
        >
          <RiCloseLine size={20} color="#231f20" />
        </CloseButton>
        <RulesImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </RulesButtonContainer>
    )}
  </Popup>
)

export default Footer
