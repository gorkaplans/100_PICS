import React, { Children, useState, useEffect } from 'react'; 




import'./Titutlar2left.scss'

const Titutlar2left = ({ title, children, img }) => {
    const[offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
      window.addEventListener('scroll', handleScroll); 

      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const[offsetX, setOffsetX] = useState(0);
    const handleScrollX = () => setOffsetX(window.pageXOffset)

    useEffect(() => {
      window.addEventListener('scroll', handleScrollX); 

      return () => window.removeEventListener('scroll', handleScrollX)
    }, [])

    return (
      <> 
      <div className="img-background" style={
        {backgroundImage:`url(${img})`, 
        transform: `translateY(${ offsetY * 0.5}px)`
        }}>
          
          
        </div>

      <section className="Titutlar2left-container" >
   
            <h1 className="big-title bold">{title}</h1>
    
                <p className="light text">
              {children}
            </p>

            
        </section> 
       
       
      </> 
    )
}   

export default Titutlar2left;



