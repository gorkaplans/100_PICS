import MainLayout from "../components/MainLayout/MainLayout";
import Mapa from "../components/Mapa/Mapa";
import Titular from "../components/Titular";
import Filter from '../components/Filter'
import './Home.scss'

const Home = () => {
    //use state de los picos en la home 
    //useeffect para llamar inicialmente al handelsearch para mostar los picos por defecto en la home.
  
    const handleSearch = (formData) => {
    ///LLamar logica para ir a firebase i buscar picos que concuerden con los valores del formdata. 
    ///Set state con los picos que se pasara como valor al mapa
   
  }
  return (
   <MainLayout>
    <div className="home-container">
      <div className="left">
        <Mapa></Mapa>
        <Titular title="100 muntanyes">
        En cinc llices de camp. De la Comtessa lo qual. Fama e contínua bona memòria los hòmens virtuosos e. Humanes Mereixedors són d'honor glòria e de fama e. Al gentilhom o generós qui vol rebre l'orde de. Part serà del principi de cavalleria; la segona
        </Titular>
      </div>
      <div className="right">
        <Filter onSearch={handleSearch}></Filter>
      </div>
    </div>  
   </MainLayout>
  );
}
 
export default Home;