import MainLayout from "../components/MainLayout/MainLayout";
import './Home.scss';
import Login from "../components/Login";

const Loginpage= () => {

  return (
   <MainLayout>
     <div className="home-container">
     <Login/>
     </div>
   </MainLayout>
  );
}
 
export default Loginpage;