import React from 'react'; 
import { Link } from 'react-router-dom';

import'./Header.scss'

const Header = () => {
    return (
    <div className="head">
        <Link to='/' className="logo">
            <h3 className="regular"> 100_pics</h3>
        </Link>
    <div className="menu light">
            <Link to='/' className="apartat">Inici</Link>
            <Link to='/about' className="apartat">Sobre això?</Link>
            <Link to='/list' className="apartat">Llistat</Link>
            <Link to='/contact' className="apartat">Contacte</Link>
            <Link to='/userauth' className="apartat">SignUp</Link>
        </div>
    </div>
    )
}   

export default Header;