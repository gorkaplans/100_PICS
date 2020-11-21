import React, { Children } from 'react'; 

import'./Titular.scss'

const Titular = ({ title, children }) => {
    return (
      <>  
       <section className="titular-container">
      <h1 className="big-title bold">{title}</h1>
            <hr className="line"></hr>
            <p className="light text">
              {children}
            </p>
        </section> 
       
       
      </> 
    )
}   

export default Titular;


