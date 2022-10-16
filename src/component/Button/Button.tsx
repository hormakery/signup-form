import React, { useState } from 'react'
import {
  Submit,
  ButtonWrapper,
} from './Button.styles'
import ButtonProps from './Button.interface'


const Button = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <ButtonWrapper onClick={handleClick}>
      <Submit type='submit'>Claim your free trial</Submit>
    </ButtonWrapper>
  )
}

export default Button
