import React from 'react'; 
import { Link } from 'react-router-dom';

import { useHistory } from "react-router-dom";


import Button from '../Button';

import'./SignUp.scss'
import { useState } from 'react';
import { userSignup } from '../../logic/user';

const SignUp = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [signupError, setSignupError] = useState('');

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
          const { success, error } = await userSignup(mail, password, name);
        if (success) {
          history.push('/user')
        } else {
          setSignupError(error)
        } }

        console.log(name, mail, password)

    }

    return (
      <div className="login-box">
        <h2 className="bold">Registrat</h2>
        <form>
        <div className="user-box">
            <input type="text" value={name} onChange={({target: { value }}) => setName(value)} name required />
            <label className="regular">Nom</label>
        </div>
        <div className="user-box">
            <input type="text" value={mail} onChange={({target: { value }}) => setMail(value)} mail required />
            <label className="regular">Mail</label>
        </div>
        <div className="user-box">
            <input type="password" value={password} onChange={({target: { value }}) => setPassword(value)} password required />
            <label className="regular">Password</label>
        </div>
        <div className="buttons-form">
          <Button onClick={handelSumbit} name='envia'>Envia</Button>
          <Link to='/login' className="apartat light">Ja tens compte? Accedeix</Link>
        </div>
        </form>

        
      </div>
    )
}   

export default SignUp;