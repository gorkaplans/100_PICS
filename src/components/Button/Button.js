import React from 'react'; 

import'./Button.scss'

const Button = ({ children, active, onClick }) => {
    return (
      <button onClick={onClick} className={active ? 'is-active' : ''}>{children}</button>
    )
  } 

export default Button;