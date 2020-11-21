import React from 'react'; 

import'./Button.scss'

const Button = ({ children, onClick, name, value }) => {
    return (
      <button className="normal-button light" name={name} value={value} onClick={onClick}>{children}</button>
    )
  } 

export default Button;