import React from 'react'; 

import'./Button.scss'

const Button = ({ children, onClick, name, value, active }) => {
    return (
      <button className={`normal-button light ${active ? "active" : ''}`} name={name} value={value} onClick={onClick}>{children}</button>
    )
  } 

export default Button;