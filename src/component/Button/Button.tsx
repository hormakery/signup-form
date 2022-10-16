import React from 'react'
import {
  Submit,
  ButtonWrapper,
} from './Button.styles'
import ButtonProps from './Button.interface'


const Button = () => {
  return (
    <ButtonWrapper>
      <Submit type='submit'>Claim your free trial</Submit>
    </ButtonWrapper>
  )
}

export default Button
