import MainLayout from "../components/MainLayout/MainLayout";
import Titular from "../components/Titular";
import Button from '../components/Button';
import Mapa from '../components/Mapa'
import Loading from '../components/Loading'
import { userLogout } from '../logic/user';
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserProfile, setUserLocation } from '../redux/actions/userActions';
import { useState, useEffect } from "react";
import './Profile.scss'
import {listUserExcursions, getObjectById} from '../services/data'




const Profile = () => {
  let history = useHistory();
  const name = useSelector(state => state.user !== null ? state.user.name : " nom ")
  const mail = useSelector(state => state.user !== null ? state.user.email : '')
  const userId = useSelector(state => state.user !== null ? state.user.id : '')
  const dispatch = useDispatch();
  const[excursions, setExcursions] = useState([])
  const[mountains, setMountains] = useState([])
  const[ready, setReady]=useState(false)
  
  


    useEffect(() => {
      listUserExcursions(userId).then(rs => setExcursions(rs))
      
    },[userId])

  
 

    useEffect(() => {
      const excursionsPromises = excursions.map( ex => getMountainsByExcursions(ex.mountainId) )
      Promise.all(excursionsPromises).then(setMountains).then(()=>wait1second())
  },[excursions])
  
    function wait1second () {
      setTimeout(() => setReady(true), 500)

    }

  

    function getMountainsByExcursions (id){
      return getObjectById('mountains', id)
    }

  

    const handelSummbitLogout = (e) => {
          e.preventDefault();
          userLogout(); 
          history.push('./')
          dispatch(setUserProfile(null));
      }





  return (
  <MainLayout>
    {ready? 
       <div className="profile-container">
       <div className="left-user">
        <Titular title={name}>
        <p className="regular email"> Email d'usuari: {mail}</p>
        <br></br>
        <p className="regular email"> Històries antigues que no seria suficient l'enteniment humà. Bé que fós molt virtuosa e discreta per la molta. Dessús dit girà's a la virtuosa. Fetes seguint les guerres e. Cascuna part anell sancer e ab la meitat de les. O generós qui vol rebre l'orde. Evangeli Mereixedor és doncs lo virtuós e valent cavaller. D'Octovià de Marc Antoni e. Tirant lo Blanc del qual fa especial.</p>
        <div className="buttons-box">
        <Button onClick={handelSummbitLogout} >Logout</Button>
        </div>
 
        </Titular>
       </div>
       <div className="right-map">
         <Mapa mountains={mountains}></Mapa>
           <div className="undermap">
           <section>
             <p className="regular">Has realitzat:</p>
             <h1 className="bold">{mountains.length}/100</h1>
           </section>
           <section className="mespics">
             <p className="light">Per aconseguir més pics marcat en el teu usuari, vés al detall de la muntanya i deixa un comentari explicant com va ser la teva experiència.</p>
           </section>
         </div>
       </div>
     </div> 
     : <Loading></Loading>
}
  
</MainLayout>
  );
}
 
export default Profile;


