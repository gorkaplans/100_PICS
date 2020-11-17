import React from 'react'; 
import { Link } from 'react-router-dom';


import Button from '../Button';

import'./Login.scss'
import { useState } from 'react';

const Login = () => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const handelSumbit = (e) => {
        e.preventDefault();

        console.log(mail, password)

    }

    return (
      <div className="login-box">
        <h2 className="bold">Accedeix</h2>
        <form>
        <div className="user-box">
            <input type="text" value={mail} onChange={({target: { value }}) => setMail(value)} mail required />
            <label className="regular">Mail</label>
        </div>
        <div className="user-box">
            <input type="text" value={password} onChange={({target: { value }}) => setPassword(value)} password required />
            <label className="regular">Password</label>
        </div>
        <div className="buttons-form">
          <Button onClick={handelSumbit} name='envia'>Envia</Button>
          <Link to='/userauth' className="apartat light">No tens compte? Registrat</Link>
        </div>
        </form>

        
      </div>
    )
}   

export default Login;