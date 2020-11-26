import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { getMountainById, listExcursions } from '../../services/data';
import { useSelector } from 'react-redux';

import { addExcursion } from '../../logic/excursions'
import Button from '../Button'

import'./MountainDetail.scss'

const MountainDetail = () => {
    let { id } = useParams()
    const[mountain,setMountain]= useState({})
    const [date, setDate] = useState('2020-07-22')
    const [comment, setComment] = useState('')
    const [userComments, setUserComments] = useState([])
    
    const userName = useSelector(state => state.user !== null ? state.user.name : " nom ")
    
    
    useEffect(() => {
        getMountainById(id).then(rs => setMountain(rs));
        listExcursions(id).then(rs => setUserComments(rs))
    },[]) 

    const {name, desc, altitude, location, img,} = mountain
    


    const handelSumbit = async (e) => {
        e.preventDefault();
        
        const excursionDone = {
            mountainId: id,
            user: userName,
            date: date,
            comment: comment, 
        }

        addExcursion(excursionDone);
        setComment('');

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
            <div className="weather">
            <h1 className="bold title">Tiempo</h1>   
            </div>
            <div className="done-container">
            <h2 className="bold pregunta"> Ja has fet aquest cim?</h2>
                <label className="light" for="date">Quin dia?</label>
                <input type="date" value={date} onChange={({target: { value }}) => setDate(value)} />
                <label className="light" for="comment">Explicans tot allò que et vingui de gust...</label>
                <textarea className="caixa" value={comment} onChange={({target: { value }}) => setComment(value)} rows="8" cols="50"></textarea>
                <Button onClick={handelSumbit} name='envia'>Envia</Button>
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
            </div>

        </div>
    )
}   

export default MountainDetail;