import React from 'react'; 

import'./Loading.scss'

const Loading = () => {
    return (
        <div className="container-load">
        <div className="loader"></div>
        <h1 className="bold load-titile">Carregant...</h1>
      </div>
    )
}   

export default Loading;