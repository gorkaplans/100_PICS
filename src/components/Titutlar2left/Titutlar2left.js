import React, { Children } from 'react'; 




import'./Titutlar2left.scss'

const Titutlar2left = ({ title, children, img }) => {
    return (
      <> 
      <div className="img-background" style={{backgroundImage:`url(${img})`}}></div>

      <section className="Titutlar2left-container">
   
            <h1 className="big-title bold">{title}</h1>
    
                <p className="light text">
              {children}
            </p>

            
        </section> 
       
       
      </> 
    )
}   

export default Titutlar2left;



