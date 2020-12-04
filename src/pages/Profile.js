import MainLayout from "../components/MainLayout/MainLayout";
import Titular from "../components/Titular";
import Button from '../components/Button';
import Mapa from '../components/Mapa'
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
  
  


  useEffect(() => {
    listUserExcursions(userId).then(rs => callback(rs))
  },[])

  function callback(r){
      setExcursions(r)
      console.log(excursions)
      for(var i=0; i<=excursions.length; i++ ) {
      
        console.log("callback -> excursions[i]", excursions[i])
        
    } 

    return mountains

  }

  //// errores party!!!
  


  

  function getMountainsByExcursions (id){
    getObjectById('mountains', id).then(rs => {
      setMountains([...mountains,rs])
    })

  }

  










  const handelSummbitLogout = (e) => {
      e.preventDefault();
      userLogout(); 
      history.push('./')
      dispatch(setUserProfile(null));
  }





  return (
    <MainLayout>
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
      </div>
    </div>  
</MainLayout>
  );
}
 
export default Profile;


