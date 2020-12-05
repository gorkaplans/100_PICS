import React from 'react'; 
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../redux/actions/themeActions'

import'./Header.scss'




const Header = () => {

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleChangeColor = (e) =>{
        const theme = e.target.checked ? 'nit' : 'dia';
        dispatch(setTheme(theme));
    }
    
    return (
    <div className="head">
        <section className="head-left">
        <Link to='/' className="logo">
            <h3 className="regular"> 100_pics</h3>
         </Link>
         <input class="toggle" type="checkbox" onChange={handleChangeColor}/>
         </section>
        <div className="menu light">
            <Link to='/' className="apartat">Inici</Link>
            <Link to='/about' className="apartat">Sobre això?</Link>
            <Link to='/list' className="apartat">Llistat</Link>
            <Link to='/contact' className="apartat">Contacte</Link>
            { user && user.name
            ? <Link to='/user' className="apartat">Perfil</Link>  
            :<Link to='/userauth' className="apartat">SignUp</Link>}
        </div>
    </div>
    
    ) } 


  

  
  export default Header;