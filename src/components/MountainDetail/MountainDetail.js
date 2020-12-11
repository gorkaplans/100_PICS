import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { getMountainById, listExcursions } from '../../services/data';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";



import { addExcursion } from '../../logic/excursions'
import Button from '../Button'
import Login from '../Login'; 
import Modal from '../Modal';
import WeatherBar from '../WeatherBar'

import'./MountainDetail.scss'

const MountainDetail = () => {
    let history = useHistory();
    let { id } = useParams()
    const[mountain,setMountain]= useState({})
    const [date, setDate] = useState('2020-07-22')
    const [comment, setComment] = useState('')
    const [userComments, setUserComments] = useState([])
    const [loginOpen, setLoginOpen] = useState(false);
    const [limit, setLimit] = useState(6)

    
    const userName = useSelector(state => state.user && state.user.name ? state.user.name : " ")
    const userId = useSelector(state => state.user && state.user.id ? state.user.id : " ")
    
    
    useEffect(() => {
        getMountainById(id).then(rs => setMountain(rs));
    },[id]) 

    useEffect(() => {
        listExcursions(id,limit).then(rs => setUserComments(rs))
    },[id, limit]) 

    const {name, desc, altitude, location, img, city} = mountain
    


    const handelSumbit = async (e) => {
        e.preventDefault();
        
        const excursionDone = {
            mountainId: id,
            user: userName,
            userId: userId,
            date: date,
            comment: comment, 
        }

        addExcursion(excursionDone);
        setComment('');
        listExcursions(id,limit).then(rs => setUserComments(rs))



    }

    const handeleSingUp = (e) => {
        e.preventDefault(); 
        setLoginOpen(true);
    }

    const handleUpdateLimit = (e) => {
        setLimit(limit + 6)
    }


return (
        <div className="detail-container">
            <h1 className="bold title">{name}</h1>
            <div className="img-container-detail" style={{backgroundImage:`url(${img})`}}></div>
            <div className="details">
                <section className="detail-left">
                    <ul className="light">
                        <li> <b>Altitud :</b> {altitude}</li>
                        <li><b>Localització :</b> {location}</li>
                        <li>{desc}</li>
                    </ul>
                </section>
            </div>
           
           {city ? 
          <WeatherBar city={city}></WeatherBar>
            : <div className="loading-container">
            <h1 className="bold title">Carregant Meteo</h1>   
            </div>}
            
            
            <div className="done-container">
                
                {(userName !== " ")? 
                (
                <>
                <h2 className="bold pregunta"> Ja has fet aquest cim?</h2>
                <label className="light" for="date">Quin dia?</label>
                <input type="date" value={date} onChange={({target: { value }}) => setDate(value)} />
                <label className="light" for="comment">Explicans tot allò que et vingui de gust...</label>
                <textarea className="caixa" value={comment} onChange={({target: { value }}) => setComment(value)} rows="8" cols="50"></textarea>
                <Button onClick={handelSumbit} name='envia'>Envia</Button>
                </>
                )
                : (
                <>
                <h2 className="bold pregunta-segona"> Ja has fet aquest cim?</h2>
                <p className="light tagline">Explicans la teva experiència</p>
                <Button onClick={handeleSingUp} >SingUp</Button>
                <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
                    <Login redirect= {false}></Login>
                </Modal>
                </>

                )
                }
                
            </div>
            <hr className="line"></hr>

            <div className="user-comments">
            {userComments.map(m => (
            <div className="user-comment">
                <p className="light"> <b>{m.user} - </b>{m.date}</p>
                <hr className="line-comment"></hr>
                <p className="light comment-text">{m.comment}</p>
            </div>)

          )}

          <Button onClick={handleUpdateLimit}>Veure +</Button>
            </div>

        </div>
    )
}   

export default MountainDetail;