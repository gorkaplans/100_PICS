import React from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import'./Header.scss'

const Header = ({user}) => {
    console.log('user', user);
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
            { user
            ? <Link to='/user' className="apartat">Perfil</Link>  
            :<Link to='/userauth' className="apartat">SignUp</Link>}
        </div>
    </div>
    
    ) } 

const mapStateToProp = (state) => {
    return {
      user: state.user
    }
  }
  

  
  export default connect(mapStateToProp)(Header);