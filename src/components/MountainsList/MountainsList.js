import React from 'react'; 

import'./MountainsList.scss'

const MountainsList = ({ mountains, onMountainHover }) => {

  /*   const handleOnMouseEnterList = (mountain) => {
        const {id} = mountain
        console.log("handleOnMouseEnterList -> id}", id)
        const mountainId = document.getElementById(id)
        const top = mountainId.getBoundingClientRect(mountainId).top
        const left = mountainId.getBoundingClientRect(mountainId).left
        console.log(top)
    } */

    return (
       <div className="list-container"> 
           {mountains.map(m => (
            <h1  onMouseEnter={() => onMountainHover(m)} onMouseLeave={() => onMountainHover(null)} className = "regular name"> {m.name} </h1>)

          )}
           {mountains.map(m => (
            <h1 className = "regular name"> {m.name} </h1>)

          )}
           {mountains.map(m => (
            <h1 className = "regular name"> {m.name} </h1>)

          )}
           {mountains.map(m => (
            <h1 className = "regular name"> {m.name} </h1>)

          )}
           {mountains.map(m => (
            <h1 className = "regular name"> {m.name} </h1>)

          )}
       </div>
    )
}   

export default MountainsList;