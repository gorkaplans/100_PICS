import MainLayout from "../components/MainLayout/MainLayout";
import Titular from "../components/Titular";
import './Home.scss'

const Contact= () => {

  return (
   <MainLayout>
    <div className="home-container">
      <div className="left">
        <Titular title="Contacte">
        En cinc llices de camp. De la Comtessa lo qual. Fama e contínua bona memòria los hòmens virtuosos e. Humanes Mereixedors són d'honor glòria e de fama e. Al gentilhom o generós qui vol rebre l'orde de. Part serà del principi de cavalleria; la segona
        </Titular>
      </div>
      <div className="right">
        <h2>Contacte</h2>
      </div>
    </div>  
   </MainLayout>
  );
}
 
export default Contact;