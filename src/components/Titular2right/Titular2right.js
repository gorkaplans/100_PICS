import React, { Children, useState, useEffect } from 'react'; 

import'./Titular2right.scss'

const Titular2right = ({ title, children, img }) => {
  const[offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); 

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

    return (
      <>  
     <div className="img-background2" style={
       {backgroundImage:`url(${img})`,
       transform: `translateY(${ offsetY * 0.5}px)`
      }}></div>

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


