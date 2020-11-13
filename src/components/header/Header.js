import React from 'react'; 

import'./Header.scss'

const Header = () => {
    return (
    <div className="head">
        <h3 className="regular"> 100_pics</h3>
        <div className="menu light">
            <a className="apartat">Inici</a>
            <a className="apartat">Sobre això?</a>
            <a className="apartat">Llistat</a>
            <a className="apartat">Contacte</a>
            <a className="apartat">Login</a>
            
        </div>
    </div>
    )
}   

export default Header;