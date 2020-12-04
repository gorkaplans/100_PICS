import React, { Children } from 'react'; 

import'./Titular2right.scss'

const Titular2right = ({ title, children, img }) => {
    return (
      <>  
     <div className="img-background2" style={{backgroundImage:`url(${img})`}}></div>

       <section className="Titular2right-container">
      <h1 className="big-title bold">{title}</h1>
            <p className="light text">
              {children}
            </p>
        </section> 
       
       
      </> 
    )
}   

export default Titular2right;


