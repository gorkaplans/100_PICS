import MainLayout from "../components/MainLayout/MainLayout";
import Titular from '../components/Titular'
import './Home.scss'
import Button from "../components/Button";

const Contact= () => {

  return (
   <MainLayout>
     <div className="contact-container">
    <Titular title="ei@100pics.cat">
    <br></br>
    En cinc llices de camp. De la Comtessa lo qual. Fama e contínua bona memòria los hòmens virtuosos e. 
    <br></br>
    <br></br>

    <br></br>

    <br></br>
    <a href="mailto:ei@100pics.cat">
    <Button>Contacte</Button>
    </a>
    </Titular>
    </div>
   </MainLayout>
  );
}
 
export default Contact;