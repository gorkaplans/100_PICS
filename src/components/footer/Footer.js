import React from 'react'; 
import { Link } from 'react-router-dom';


import'./Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
        <Link to='/' className="apartat light a-footer">Avís Legal | Tots els drets reservats</Link>
        <p className="a-footer2 light">*Des de 100 pics es recomana una activitat a la muntanya segura, responsable i 100% respectuosa amb l'entorn.</p>
        </footer>
    )
}   

export default Footer;