import MainLayout from "../components/MainLayout/MainLayout";
import './Home.scss';
import SignUp from '../components/SignUp';

const Userauth= () => {

  return (
   <MainLayout>
     <div className="home-container">
     <SignUp/>
     </div>
   </MainLayout>
  );
}
 
export default Userauth;