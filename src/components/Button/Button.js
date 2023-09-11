import React from 'react'
import './Button.css'

const Button = ({image, buttonText, buttonAction}) => {



  return (
    <button className='menuButton'>
      <img src={image} alt="" className='menuImg' onClick={buttonAction} />{buttonText}
    </button>
  )
}

export default Button