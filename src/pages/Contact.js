import MainLayout from "../components/MainLayout/MainLayout";
import Titular from "../components/Titular";
import './Home.scss'

const Contact= () => {

  return (
   <MainLayout>
    <div className="home-container">
      <div className="left">
        <Titular></Titular>
      </div>
      <div className="right">
        <h2>Contacte</h2>
      </div>
    </div>  
   </MainLayout>
  );
}
 
export default Contact;