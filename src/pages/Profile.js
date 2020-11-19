import MainLayout from "../components/MainLayout/MainLayout";
import Titular from "../components/Titular";
import Butoon from '../components/Button';
import { userLogout } from '../logic/user';
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";



const Profile = () => {
  let history = useHistory();
  //const name = useSelector(state => state.user.name)

  const handelSummbitLogout = (e) => {
      e.preventDefault();
      userLogout(); 
      history.push('./')

  }

  return (
   <MainLayout>
     <Butoon onClick={handelSummbitLogout} >Logout</Butoon>
    <Titular></Titular>

   </MainLayout>
  );
}
 
export default Profile;