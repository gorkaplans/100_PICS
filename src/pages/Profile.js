import MainLayout from "../components/MainLayout/MainLayout";
import Titular from "../components/Titular";
import Button from '../components/Button';
import { userLogout } from '../logic/user';
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserProfile, setUserLocation } from '../redux/actions/userActions';



const Profile = () => {
  let history = useHistory();
  const name = useSelector(state => state.user !== null ? state.user.name : " nom ")
  const dispatch = useDispatch();

  const handelSummbitLogout = (e) => {
      e.preventDefault();
      userLogout(); 
      history.push('./')
      dispatch(setUserProfile(null));
  }

  return (
    
   <MainLayout>
     <Button onClick={handelSummbitLogout} >Logout</Button>
    <Titular title={name}>
    En cinc llices de camp. De la Comtessa lo qual. Fama e contínua bona memòria los hòmens virtuosos e. Humanes Mereixedors són d'honor glòria e de fama e. Al gentilhom o generós qui vol rebre l'orde de. Part serà del principi de cavalleria; la segona
    </Titular>

   </MainLayout>
  );
}
 
export default Profile;