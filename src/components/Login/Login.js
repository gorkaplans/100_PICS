import React from 'react'; 
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


import Button from '../Button';
import { userLogin } from '../../logic/user'

import'./Login.scss'
import { useState } from 'react';

const Login = () => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [loginError, setLoginError] = useState('');

    let history = useHistory();

    const handelSumbit = async (e) => {
        e.preventDefault();

        let error = false;
        if(!mail) {
          error = true; 
          setEmailError(true)
        }

        if(!password) {
          error = true; 
          setPasswordError(true)
        }

        if(!error){
          const { success, error } = await userLogin(mail, password);
        if (success) {
          
          history.push('/user')
        } else {
          setLoginError(error)
        } }
    }

        console.log(mail, password)

    

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