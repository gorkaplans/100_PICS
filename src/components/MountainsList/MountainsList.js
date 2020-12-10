import React from 'react'; 

import'./MountainsList.scss'

const MountainsList = ({ mountains, onMountainHover, onClick, onMouseLeave2 }) => {

  

    return (
       <div className="list-container"> 
           {mountains.map(m => (
            <h1  onClick={onClick} onMouseEnter={() => onMountainHover(m)} onMouseLeave={() => onMountainHover(null), onMouseLeave2} className = "regular name apartat"> {m.name} </h1>)

          )}
           {mountains.map(m => (
            <h1  onClick={onClick} onMouseEnter={() => onMountainHover(m)} onMouseLeave={() => onMountainHover(null)} className = "regular name apartat"> {m.name} </h1>)

          )}
           {mountains.map(m => (
            <h1  onClick={onClick} onMouseEnter={() => onMountainHover(m)} onMouseLeave={() => onMountainHover(null)} className = "regular name apartat"> {m.name} </h1>)

          )}
           {mountains.map(m => (
            <h1  onClick={onClick} onMouseEnter={() => onMountainHover(m)} onMouseLeave={() => onMountainHover(null)} className = "regular name apartat"> {m.name} </h1>)

          )}
           {mountains.map(m => (
            <h1  onClick={onClick} onMouseEnter={() => onMountainHover(m)} onMouseLeave={() => onMountainHover(null)} className = "regular name apartat"> {m.name} </h1>)

          )}
         
          
       </div>
    )
}   

export default MountainsList;