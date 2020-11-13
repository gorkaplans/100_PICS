import MainLayout from "../components/MainLayout/MainLayout";
import Mapa from "../components/Mapa/Mapa";
import Titular from "../components/Titular";
import Filter from '../components/Filter'
import './Home.scss'

const Home = () => {
  return (
   <MainLayout>
    <div className="home-container">
      <div className="left">
        <Mapa></Mapa>
        <Titular></Titular>
      </div>
      <div className="right">
        <Filter></Filter>
      </div>
    </div>  
   </MainLayout>
  );
}
 
export default Home;